export interface Food {
    id: string;
    name: string;
    description: string;
    price: number;
    featured: boolean;
    imageUrl: string;
}

export interface CartItem {
    id: string;
    quantity: number;
}

export interface DeliveryDetails {
    name: string | null;
    address: string | null;
    deptNumber: string | null;
    phone: string | null;
}

export type OrderStatus = "pending" | "confirmed" | "delivered"; // pending: payment pending, confirmed: payment confirmed, delivered: delivered to the customer.
// Note if Cash payment method is selected, the order is confirmed automatically.

export interface Order {
    id: string; // For internal reference
    refNumber: number; // For customer reference
    deliveryDetails: DeliveryDetails;
    items: CartItem[];
    total: number;
    date: Date;
    status: OrderStatus;
    mpPreferenceId: string;
    paymentSuccessfulSignature: string;
}

export type NewOrder = Omit<Order,
    "id" |
    "refNumber" |
    "date" |
    "total" |
    "status" |
    "mpPreferenceId" |
    "paymentSuccessfulSignature">;