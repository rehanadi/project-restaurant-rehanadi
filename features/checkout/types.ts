export interface PaymentMethod {
  label: string;
  value: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
}