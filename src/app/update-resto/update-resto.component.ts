import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
})
export class UpdateRestoComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private product: ProductService
  ) {}

  alert: boolean = false;
  productData: undefined | Product;

  ngOnInit(): void {
    let productId = this.router.snapshot.params['id'];
    this.product.getProduct(productId).subscribe((data) => {
      this.productData = data;
    });
  }

  closeAlert() {
    this.alert = false;
  }

  updateProduct(data: Product) {
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.product.updateProduct(data).subscribe(() => {
      this.alert = true;
    });
  }
}
