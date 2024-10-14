import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { ProductCardSkeletonComponent } from "../product-card-skeleton/product-card-skeleton.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductCardSkeletonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [ProductService]
})
export class HomeComponent implements OnInit {
  constructor(private _prodService: ProductService) {}

  isLoaded: Boolean = false;
  items: Product[] = [];
  
  ngOnInit() {
    setTimeout(() => {
      this.items = this._prodService.getProducts();
      this.isLoaded = true;
    }, 2345);
  }

}
