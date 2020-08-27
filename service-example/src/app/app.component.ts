import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-example';

   products:Product[];
   
 
   constructor(private productService:ProductService){}
 
   getProducts() {
     this.products=this.productService.getProducts();
   }
}
