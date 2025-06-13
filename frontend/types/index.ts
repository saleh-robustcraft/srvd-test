export interface Order {
  _id: string;
  customer: string;
  dispensary: string;
  status: OrderStatus;
  borough: string; // Changed from Borough to string
  createdAt: string;
}

export enum OrderStatus {
  PENDING = "PENDING",
  DISPATCHED = "DISPATCHED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

export interface Batch {
  id?: string;
  orders: Order[] | string[];
  optimizedRoute?: string;
  borough: string;
  count: number;
  assignment: string;
}
