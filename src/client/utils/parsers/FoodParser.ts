import {Hamburger} from "../../types.ts";
import {isString, parseId, parseName} from "./General.ts";

export const parseHamburgerList = (obj: unknown): Hamburger[] => {
    if (!obj || !Array.isArray(obj)) {
        throw new Error("Invalid data");
    }
    return obj.map((item) => parseHamburger(item));
};

const parseImageUrl = (imageUrl: unknown) => {
    if (!imageUrl || !isString(imageUrl)) {
        throw new Error("Invalid image url");
    }
    return imageUrl;
};
const parseHamburger = (obj: unknown): Hamburger => {
    if (!obj ||
        typeof obj !== "object" ||
        !('id' in obj) ||
        !('name' in obj) ||
        !('description' in obj) ||
        !('price' in obj) ||
        !('imageUrl' in obj)
    ) {
        throw new Error("Invalid or missing fields in hamburger object");
    }
    return {
        id: parseId(obj.id),
        name: parseName(obj.name),
        description: parseDescription(obj.description),
        price: parsePrice(obj.price),
        imageUrl: parseImageUrl(obj.imageUrl)
    };
};

const parseDescription = (description: unknown): string => {
    if (!description || !isString(description)) {
        throw new Error("Invalid description");
    }
    return description;
};

const parsePrice = (price: unknown): number => {
    if (!price || typeof price !== "number") {
        throw new Error("Invalid price");
    }
    return price;
};