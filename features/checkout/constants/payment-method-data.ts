import { PaymentMethod } from "../types";

export const paymentMethodData: PaymentMethod[] = [
  {
    label: "Bank Negara Indonesia",
    value: "bni",
    image: {
      src: "/images/payment-methods/bni.png",
      width: 29.63,
      height: 8.66,
    },
  },
  {
    label: "Bank Rakyat Indonesia",
    value: "bri",
    image: {
      src: "/images/payment-methods/bri.png",
      width: 29.63,
      height: 11.21,
    },
  },
  {
    label: "Bank Central Asia",
    value: "bca",
    image: {
      src: "/images/payment-methods/bca.png",
      width: 29.63,
      height: 9.29,
    },
  },
  {
    label: "Mandiri",
    value: "mandiri",
    image: {
      src: "/images/payment-methods/mandiri.png",
      width: 29.63,
      height: 8.93,
    },
  },
];