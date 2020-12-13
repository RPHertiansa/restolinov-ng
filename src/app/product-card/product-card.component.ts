import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { Product } from '../product'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  products: Product[]
  constructor(private productService: ProductService) { }

  getProduct(){
    this.productService.getAllProducts()
    .subscribe(products => this.products = products)
  }
  ngOnInit(): void {
    this.getProduct()
  }

}
