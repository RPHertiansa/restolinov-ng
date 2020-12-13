import { Cart } from './cart'

export interface Order{
    id: number,
    nama: string,
    noMeja: number,
    keranjangs: Cart
}