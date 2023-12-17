import express from 'express';
import {foods} from "../data";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(foods);
});

router.get('/featured', (_req, res) => {
    res.send(foods.filter(food => food.featured));
});

export default router;