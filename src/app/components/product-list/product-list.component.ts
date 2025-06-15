import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any;
  isLoading: boolean=false;
constructor(private productService: ProductService){

}
ngOnInit(){
  this.isLoading=true;
this.productService.getAllProducts().subscribe(response => {
  this.products=response.body;
  console.log(response.body);
  this.isLoading=false;
})
}
}
