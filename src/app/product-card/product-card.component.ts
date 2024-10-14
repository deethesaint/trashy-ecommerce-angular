import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, DecimalPipe, CurrencyPipe, RouterLink, RouterLinkActive],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product?: Product;
}
