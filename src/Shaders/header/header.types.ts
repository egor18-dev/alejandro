export interface MenuItem {
  label: string;
  link?: string;
  items?: MenuItem[];
}

export interface CartItem {
  id: string;
  quantity: number;
}

export interface LocationInfo {
  city: string;
  postalCode: string;
}