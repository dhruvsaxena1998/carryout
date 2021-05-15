import { Item } from "../item/model";

export interface Menu {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  media: string;
}

export interface MenuItem extends Item {
  category: "item" | "optional";
}

export type ItemRequestBody = {
  id: number;
  category: "item" | "optional";
};

export interface MenuRequestBody {
  name: string;
  price: number;
  description: string;
  media: string;
  items: ItemRequestBody[];
}
