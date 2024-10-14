import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items: Product[] = [
    {
      name: "Gối ôm đa năng",
      image: "https://demxanh.com/media/news/892_goi_om_1.JPG",
      price: 70000,
      discount: 12000
    },
    {
      name: "50 Stickers",
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lllkzkp0l1zj0a.webp",
      price: 20000
    },
    {
      name: "Tai nghe Bluetooth",
      image: "https://down-vn.img.susercontent.com/file/6a3ef6cc2e76f7494668484d0f450ad6.webp",
      price: 80000,
      discount: 12000
    },
    {
      name: "Dây đeo đồng hồ Apple Watch",
      image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-ltyu881a7trn4e.webp",
      price: 66000,
      discount: 2000
    },
    {
      name: "Bluewow [spiral pill] Găng Tay Ngón Tay Sợi",
      image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lmqyecv2osf86d.webp",
      price: 107000,
      discount: 13500
    },
    {
      name: "Gối ôm đa năng",
      image: "https://demxanh.com/media/news/892_goi_om_1.JPG",
      price: 70000,
      discount: 12000
    },
    {
      name: "50 Stickers",
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lllkzkp0l1zj0a.webp",
      price: 20000
    },
    {
      name: "Tai nghe Bluetooth",
      image: "https://down-vn.img.susercontent.com/file/6a3ef6cc2e76f7494668484d0f450ad6.webp",
      price: 80000,
      discount: 12000
    },
    {
      name: "Dây đeo đồng hồ Apple Watch",
      image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-ltyu881a7trn4e.webp",
      price: 66000,
      discount: 2000
    },
    {
      name: "Bluewow [spiral pill] Găng Tay Ngón Tay Sợi",
      image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lmqyecv2osf86d.webp",
      price: 107000,
      discount: 13500
    },
    {
      name: "Tai nghe Bluetooth",
      image: "https://down-vn.img.susercontent.com/file/6a3ef6cc2e76f7494668484d0f450ad6.webp",
      price: 80000,
      discount: 12000
    },
    {
      name: "Tai nghe Bluetooth",
      image: "https://down-vn.img.susercontent.com/file/6a3ef6cc2e76f7494668484d0f450ad6.webp",
      price: 80000,
      discount: 12000
    },
  ]
}
