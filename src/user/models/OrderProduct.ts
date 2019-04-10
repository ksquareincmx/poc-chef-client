export interface IOrderProduct {
    id: string;
    name: string;
    quantity: number;
    price:number;
    subtotal: number;
    createdAt: number;
    updatedAt: number;
}

export interface IOrderProductDto {
    id: string;
    name: string;
    quantity: number;
    price:number;
    subtotal: number;
    created_at: number;
    updated_at: number;
}