export const isString = (value: unknown): value is string => {
    return typeof value === "string";
};

export const isNumber = (value: unknown): value is number => {
    return typeof value === "number";
};

export const parseGenericNumber = (value: unknown): number => {
    if (!value || !isNumber(value)) {
        throw new Error("Invalid number");
    }
    return value;
};

export const parseId = (id: unknown): string => {
    if (!id || !isString(id)) {
        throw new Error("Invalid id");
    }
    return id;
};

export const parseName = (name: unknown): string => {
    if (!name || !isString(name)) {
        throw new Error("Invalid name");
    }
    return name;
};

export const parseDate = (date: unknown): Date => {
    if (!date || !isString(date)) {
        throw new Error("Invalid date");
    }
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
        throw new Error("Invalid date");
    }
    return parsedDate;
};