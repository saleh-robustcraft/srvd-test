// utils/groupByBorough.ts
import { Order } from '../types';

export type OrdersByBorough = Record<string, Order[]>;

/**
 * Groups an array of orders by their borough.
 * @param orders Array of orders
 * @returns Object with boroughs as keys and arrays of orders as values
 */
export function groupOrdersByBorough(orders: Order[]): OrdersByBorough {
  return orders.reduce((acc, order) => {
    if (!acc[order.borough]) {
      acc[order.borough] = [];
    }
    acc[order.borough].push(order);
    return acc;
  }, {} as OrdersByBorough);
}
