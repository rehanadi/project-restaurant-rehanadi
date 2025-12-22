export interface PaymentMethod {
  label: string;
  value: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
}

export interface DeliveryAddress {
  address: string;
  phone: string;
}

export interface CheckoutState {
  deliveryAddress: DeliveryAddress;
}

export interface UpdateAddressPayload {
  address: string;
  phone: string;
}