import {NewOrder, Order} from "../types";
import {foods, orders} from "../data";
import {v4 as uuidv4} from "uuid";
import {MercadoPagoConfig, Preference} from "mercadopago";

const mercadoPagoAccessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
if (!mercadoPagoAccessToken) {
    throw new Error('Mercado Pago Access Token not found');
}
export const client = new MercadoPagoConfig({accessToken: mercadoPagoAccessToken});

const createOrder = async (newOrder: NewOrder): Promise<Order> => {

    const total: number = newOrder.items.reduce((acc, item) => {
        const food = foods.find((food) => food.id === item.id);
        if (!food) {
            throw new Error('Invalid food Id');
        }
        return acc + food.price * item.quantity;
    }, 0);

    const refNumber: number = orders[orders.length - 1] ? orders[orders.length - 1].refNumber + 1 : 1;
    const orderId: string = uuidv4();
    const paymentSuccessfulSignature: string = uuidv4();

    const mpPreference = new Preference(client);
    const preferenceResponse = await mpPreference.create({
        body: {
            items: newOrder.items.map((item) => {
                const food = foods.find((food) => food.id === item.id);
                if (!food) {
                    throw new Error('Invalid food');
                }
                return {
                    id: food.id,
                    title: food.name,
                    unit_price: food.price,
                    quantity: item.quantity,
                    currency_id: 'ARS',
                    picture_url: food.imageUrl
                };
            }),
            // external_reference: orderId.toString(),
            back_urls: {
                success: `${process.env.FRONTEND_URL}/order/${orderId}?payment=success&paymentSignature=${paymentSuccessfulSignature}`,
                failure: `${process.env.FRONTEND_URL}/order/${orderId}?payment=failure`,
                pending: ''
            },
            auto_return: 'approved'
        }
    }).catch((err) => {
        throw err;
    });

    if (!('id' in preferenceResponse)) {
        throw new Error('There was an error creating the Mercado Pago preference');
    }

    const mpPreferenceId = preferenceResponse.id;


    if (!mpPreferenceId) {
        throw new Error('There was an error creating the Mercado Pago preference');
    }

    return {
        id: orderId,
        refNumber,
        status: 'pending',
        date: new Date(),
        total: total,
        mpPreferenceId,
        paymentSuccessfulSignature,
        ...newOrder
    };
};

export default {createOrder};