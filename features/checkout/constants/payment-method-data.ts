import { PaymentMethod } from "../types";

export const paymentMethodData: PaymentMethod[] = [
  {
    label: "Bank Negara Indonesia",
    value: "Bank Negara Indonesia",
    image: {
      src: "/images/payment-methods/bni.png",
      width: 29.63,
      height: 8.66,
    },
  },
  {
    label: "Bank Rakyat Indonesia",
    value: "Bank Rakyat Indonesia",
    image: {
      src: "/images/payment-methods/bri.png",
      width: 29.63,
      height: 11.21,
    },
  },
  {
    label: "Bank Central Asia",
    value: "Bank Central Asia",
    image: {
      src: "/images/payment-methods/bca.png",
      width: 29.63,
      height: 9.29,
    },
  },
  {
    label: "Mandiri",
    value: "Mandiri",
    image: {
      src: "/images/payment-methods/mandiri.png",
      width: 29.63,
      height: 8.93,
    },
  },
];