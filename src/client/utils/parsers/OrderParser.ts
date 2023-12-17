import {CartItem, DeliveryDetails, Order, OrderStatus} from "../../types.ts";
import {parseId, isString, parseGenericNumber, isNumber, parseDate, parseName} from "./General.ts";

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

    if ('deptNumber' in rawObj && rawObj.deptNumber) {
        deliveryDetails.deptNumber = parseDeptNumber(rawObj.deptNumber);
    }

    return deliveryDetails;
};

const parseCartItem = (item: unknown): item is CartItem => {
    if (!item ||
        typeof item !== "object" ||
        !('id' in item) ||
        !(isString(item.id)) ||
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

const parseStatus = (status: unknown): OrderStatus => {
    if (!status ||
        !isString(status) ||
        !['pending', 'confirmed', 'delivered'].includes(status)
    ) {
        throw new Error("Invalid or missing fields in order status object");
    }
    return status as OrderStatus;
};

const parseOrderId = (value: unknown): number => {
    const refNumber = Number(value);
    if (!refNumber || !isNumber(refNumber)) {
        throw new Error("Invalid or missing fields in order refNumber object");
    }
    return refNumber;
};

const parseMpPreferenceId = (mpPreferenceId: unknown) => {
    if (!mpPreferenceId || !isString(mpPreferenceId)) {
        throw new Error("Invalid or missing fields in mp preference id object");
    }
    return mpPreferenceId;
};

export const parseOrder = (obj: unknown): Order => {
    if (!obj ||
        typeof obj !== "object" ||
        !('id' in obj) ||
        !('refNumber' in obj) ||
        !('deliveryDetails' in obj) ||
        !('items' in obj) ||
        !('total' in obj) ||
        !('date' in obj) ||
        !('status' in obj) ||
        !('mpPreferenceId' in obj)
    ) {
        throw new Error("Invalid or missing fields in order object");
    }
    return {
        id: parseId(obj.id),
        refNumber: parseOrderId(obj.refNumber),
        deliveryDetails: parseDeliveryDetails(obj.deliveryDetails),
        items: parseCartItemList(obj.items),
        total: parseGenericNumber(obj.total),
        date: parseDate(obj.date),
        status: parseStatus(obj.status),
        mpPreferenceId: parseMpPreferenceId(obj.mpPreferenceId)
    };
};