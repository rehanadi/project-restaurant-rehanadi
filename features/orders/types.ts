export interface OrderItem {
  menuId: number;
  quantity: number;
}

export interface OrderRestaurant {
  restaurantId: number;
  items: OrderItem[];
}

export interface AddOrderPayload {
  restaurants: OrderRestaurant[];
  deliveryAddress: string;
  phone: string;
  paymentMethod: string;
  notes?: string;
}

export interface OrderMenuItem {
  menuId: number;
  menuName: string;
  price: number;
  image: string;
  quantity: number;
  itemTotal: number;
}

export interface OrderRestaurantDetail {
  restaurant: {
    id: number;
    name: string;
    logo: string;
  };
  items: OrderMenuItem[];
  subtotal: number;
}

export interface TransactionPricing {
  subtotal: number;
  serviceFee: number;
  deliveryFee: number;
  totalPrice: number;
}

export interface Transaction {
  id: number;
  transactionId: string;
  paymentMethod: string;
  status: string;
  deliveryAddress: string;
  phone: string;
  pricing: TransactionPricing;
  restaurants: OrderRestaurantDetail[];
  createdAt: string;
  updatedAt: string;
}

export interface AddOrderResponse {
  success: boolean;
  message: string;
  data: {
    transaction: Transaction;
  };
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface Filter {
  status: string;
}

export interface GetOrdersResponse {
  success: boolean;
  message: string;
  data: {
    orders: Transaction[];
    pagination: Pagination;
    filter: Filter;
  };
}

export type OrderStatus = 'preparing' | 'on_the_way' | 'delivered' | 'done' | 'cancelled';

export interface OrderStatusItem {
  label: string;
  value: OrderStatus;
}