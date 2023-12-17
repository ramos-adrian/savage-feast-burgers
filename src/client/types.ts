export interface Hamburger {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface CartItem {
    id: string;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}

export interface DeliveryDetails {
    name: string | null;
    address: string | null;
    deptNumber: string | null;
    phone: string | null;
}

export interface OrderState {
    deliveryDetails: DeliveryDetails;
}

export interface RootState {
  cart: CartState;
  hamburgers: {
    hamburgers: Hamburger[];
  };
  order: OrderState;
}

export type OrderStatus = "pending" | "confirmed" | "delivered";
// TODO unpaid: payment method was not selected, pending: payment pending, confirmed: payment confirmed, delivered: delivered to the customer.
// Note if Cash payment method is selected, the order is confirmed automatically.

// TODO Add mercadopago preference
export interface Order {
    id: string;
    refNumber: number;
    deliveryDetails: DeliveryDetails;
    items: CartItem[];
    total: number;
    date: Date;
    status: OrderStatus;
    mpPreferenceId: string;
}

export type NewOrder = Omit<Order, "id" | "refNumber" | "date" | "total" | "status" | "mpPreferenceId" >;