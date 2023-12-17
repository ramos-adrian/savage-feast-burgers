import {NewOrder, Order} from "../types.ts";
import axios from "axios";
import {parseOrder} from "../utils/parsers/OrderParser.ts";

const baseUrl = '/api/orders';

const newOrder = async (newOrderObj: NewOrder): Promise<Order> => {
    return parseOrder((await axios.post(baseUrl, newOrderObj)).data);
};

const getOrder = async (id: string): Promise<Order> => {
    const rawresponse = await axios.get(`${baseUrl}/${id}`);
    return parseOrder(rawresponse.data);
};

const confirmOrder = async (id: string, paymentSignature: string): Promise<Order> => {
    const rawresponse = await axios.post(`${baseUrl}/${id}/confirm`, {paymentSignature});
    return parseOrder(rawresponse.data);
};

export default {newOrder, getOrder, confirmOrder};