export interface Item {
    id: number;
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

export interface ItemLocation{
    store: string;
    section: string;
}

export interface Price{
    value: number;
    unit: string;
}
