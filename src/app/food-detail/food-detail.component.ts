import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { Product } from '../product'
import { ActivatedRoute } from "@angular/router"
import { Cart } from '../cart' 

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {
  product: Product
  carts: Cart[] 
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  getDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id') //get id from url and change the type into number
    this.productService.getDetail(id)
    .subscribe(product => this.product = product)
  }
  addToCart(item: Product): void {
    if(!item) {return} //make sure it is non-blank
    this.productService.addToCart(item)
    .subscribe(e => {
      this.carts.push(e)
    })
  }

  ngOnInit(): void {
    this.getDetail()
  }

}
