import express from 'express';
import {orders} from "../data";
import {parseNewOrder} from "../utils/parsers/OrderParser";
import service from '../services/Orders';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(orders);
});

router.get('/:id', (req, res) => {
    const order = orders.find((order) => order.id.toString() === req.params.id);
    res.send(order);
});

router.post('/', (req, res) => {
    try {

        const newOrder = parseNewOrder(req.body);
        service.createOrder(newOrder).then((order) => {

            orders.push(order);
            res.send(order);

        }).catch((e) => {

            if (e instanceof Error) {
                res.status(400).send(e.message);
                return;
            }

            res.status(400).json(e);
            return;

        });

    } catch (e) {

        if (e instanceof Error) {
            res.status(400).send(e.message);
            return;
        }
        res.status(400).send('Invalid order');
        return;

    }
});

router.post('/:id/confirm', (req, res) => {
    const order = orders.find((order) => order.id.toString() === req.params.id);
    if (!order) {
        res.status(404).send('Order not found');
        return;
    }

    if (order.status === 'confirmed') {
        res.status(400).send('Order already paid');
        return;
    }

    if(!('paymentSignature' in req.body)) {
        res.status(400).send('Invalid payment signature');
        return;
    }

    if (order.paymentSuccessfulSignature !== req.body.paymentSignature) {
        res.status(400).send('Invalid payment signature');
        return;
    }

    order.status = 'confirmed';
    res.send(order);
});

export default router;