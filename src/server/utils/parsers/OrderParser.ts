import {CartItem, DeliveryDetails, NewOrder} from "../../types";
import {isNumber, isString, parseGenericNumber, parseId, parseName} from "./General";
import {foods} from "../../data";

const parseAddress = (address: unknown): string => {
    if (!address || !isString(address)) {
        throw new Error("Invalid or missing fields in address object");
    }
    return address;
};

const parsePhone = (phone: unknown): string => {
    if (!phone || !isString(phone)) {
        throw new Error("Invalid or missing fields in phone object");
    }
    return phone;
};

const parseDeptNumber = (deptNumber: unknown): string => {
    if (!deptNumber || !isString(deptNumber)) {
        throw new Error("Invalid or missing fields in deptNumber object");
    }
    return deptNumber;
};

const parseDeliveryDetails = (rawObj: unknown): DeliveryDetails => {
    if (!rawObj ||
        typeof rawObj !== "object" ||
        !('name' in rawObj) ||
        !('address' in rawObj) ||
        !('phone' in rawObj)
    ) {
        throw new Error("Invalid or missing fields in delivery details object");
    }
    const deliveryDetails: DeliveryDetails = {
        name: parseName(rawObj.name),
        address: parseAddress(rawObj.address),
        phone: parsePhone(rawObj.phone),
        deptNumber: null
    };

    if ('deptNumber' in rawObj && !rawObj.deptNumber && rawObj.deptNumber !== "") {
        deliveryDetails.deptNumber = parseDeptNumber(rawObj.deptNumber);
    }

    return deliveryDetails;
};

const parseCartItem = (item: unknown): item is CartItem => {
    if (!item ||
        typeof item !== "object" ||
        !('id' in item) ||
        !(isString(item.id)) ||
        !foods.some((food) => food.id === item.id) ||
        !('quantity' in item) ||
        !(isNumber(item.quantity)) ||
        item.quantity <= 0
    ) {
        throw new Error("Invalid or missing fields in cart item object");
    }
    return true;
};

const parseCartItemList = (items: unknown) => {
    if (!items ||
        !Array.isArray(items) ||
        items.some((item) => !parseCartItem(item))
    ) {
        throw new Error("Invalid or missing fields in cart items object");
    }
    return items.map((item: CartItem) => {
        return {
            id: parseId(item.id),
            quantity: parseGenericNumber(item.quantity)
        };
    });
};

export const parseNewOrder = (obj: unknown): NewOrder => {
    if (!obj ||
        typeof obj !== "object" ||
        !('deliveryDetails' in obj) ||
        !('items' in obj)
    ) {
        throw new Error("Invalid or missing fields in order object");
    }

    return {
        deliveryDetails: parseDeliveryDetails(obj.deliveryDetails),
        items: parseCartItemList(obj.items),
    };
};