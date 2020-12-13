import { Product } from './product'

export interface Cart{
    id: number,
    jumlah_pemesanan: string,
    keterangan: string,
    products: Product
}