import Identifiable from '../shared/Identifiable';

export interface Item extends Identifiable {
  name: string;
  frequency: number;
  priority: number;
  lastDateBought: Date;
  quantity: number;
  location: ItemLocation;
  description: string;
  note: string;
  favorite: boolean;
  price: Price;
  lastUsed: Date;
}

export interface ItemLocation extends Identifiable {
  shopId: number;
  section: string;
}

export interface Price {
  value: number;
  unit: string;
}
