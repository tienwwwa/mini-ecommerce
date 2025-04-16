import { Component, input, output } from '@angular/core';
import { Product } from '../../dtos/product.dto';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    product = input.required<Product>();
    addToCartEvent = output<Product>();

    addToCartClicked(){      
      console.log(this.addToCartEvent.emit(this.product()));
    }
}
