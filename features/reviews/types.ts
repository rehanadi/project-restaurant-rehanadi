export interface Review {
  id: number;
  star: number;
  comment: string;
  createdAt: string;
  user: {
    id: number;
    name: string;
    avatar?: string;
  };
}

export interface AddReviewPayload {
  transactionId: string;
  restaurantId: number;
  star: number;
  comment: string;
  menuIds: number[];
}

export interface ReviewMenu {
  menuId: number;
  menuName: string;
  price: number;
  type: string;
  image: string;
  quantity: number;
}

export interface ReviewData {
  id: number;
  star: number;
  comment: string;
  transactionId: string;
  createdAt: string;
  user: {
    id: number;
    name: string;
  };
  restaurant: {
    id: number;
    name: string;
  };
  menus: ReviewMenu[];
}

export interface AddReviewResponse {
  success: boolean;
  message: string;
  data: {
    review: ReviewData;
  };
}