import { effect, Injectable, signal, Signal } from '@angular/core';
import { Product } from '../dtos/product.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Áo cầu lông Yonex TPM2736 ',
      price: 329000,
      imageUrl: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-tpm2736-cerise-chinh-hang_1742933488.webp',
      stock: 0
    },
    {
      id: 2,
      name: 'Áo cầu lông Yonex TPM2736 - Navy Peony chính hãng',
      price: 329000,
      imageUrl: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-tpm2736-navy-peony-chinh-hang_1742933283.webp',
      stock: 10
    },
    {
      id: 3,
      name: 'Áo cầu lông Yonex TPM2902 - White chính hãng',
      price: 329000,
      imageUrl: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-tpm2902-white-chinh-hang_1742439861.webp',
      stock: 5
    },
    {
      id: 4,
      name: 'Áo Cầu Lông Lining VM1067 Nữ - Đen',
      price: 130000,
      imageUrl: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-lining-vm1066-nam-den_1726790319.jpg',
      stock: 30
    },
    {
      id: 5,
      name: 'Áo Cầu Lông Lining VM1066 Nữ - Cam',
      price: 130000,
      imageUrl: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-lining-vm1066-nam-cam_1726790176.webp',
      stock: 12
    },  
  ]

  cart = signal(0);
  carts = signal<Product[]>([]);
  total = signal(0);
  addToCart(product: Product){
    this.carts.update((items) => {
      if(!this.carts().includes(product)){
        items.push(product);
        // update gia + so luong gio hang
        this.total.update(number => number + product.price)
        this.cart.update((num) => num + 1 );
      }
      return items;
    });

    this.products.forEach(it => {
      if(it === product){
        it.stock -= 1;
        console.log(it);
        
      }
    })
  }

  removeCart(product: Product){

    this.carts.update(carts => {
      carts = carts.filter(it => it !== product)
      return carts;
    })
    // update so luong va tong gio hang
    this.total.update(number => number - product.price)
    this.cart.update((num) => num - 1 );
    console.log(this.carts());
    
  }


  constructor() { 
    effect(() => {
      const m = this.cart();

    });
  }
}
