import { Component, input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../dtos/product.dto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartQuantity = input.required();
}
