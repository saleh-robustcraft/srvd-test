import mongoose, { Schema, Document } from 'mongoose';

export enum OrderStatus {
  PLACED = 'PLACED',
  DISPATCHED = 'DISPATCHED',
  DELIVERED = 'DELIVERED'
}

export interface IOrder extends Document {
  customer: string;
  dispensary: string;
  status: OrderStatus;
  borough: string; // Changed from Borough to string
  createdAt: Date;
}

const OrderSchema: Schema = new Schema({
  customer: { type: String, required: true },
  dispensary: { type: String, required: true },
  status: { type: String, enum: Object.values(OrderStatus), default: OrderStatus.PLACED },
  borough: { type: String }, // Removed enum constraint
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IOrder>('Order', OrderSchema);
