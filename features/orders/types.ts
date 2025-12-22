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
}

export interface AddOrderResponse {
  success: boolean;
  message: string;
  data: {
    transaction: Transaction;
  };
}