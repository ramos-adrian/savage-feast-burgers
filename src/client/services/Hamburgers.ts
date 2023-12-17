import {Hamburger} from "../types.ts";
import {parseHamburgerList} from "../utils/parsers/FoodParser.ts";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL + '/api/foods';

const getFeatured = async (): Promise<Hamburger[]> => {
    const rawResponse = await axios.get(`${baseUrl}/featured`);
    return parseHamburgerList(rawResponse.data);
};

const getAll = async (): Promise<Hamburger[]> => {
    const rawResponse = await axios.get(`${baseUrl}`);
    return parseHamburgerList(rawResponse.data);
};

export default {getFeatured, getAll};