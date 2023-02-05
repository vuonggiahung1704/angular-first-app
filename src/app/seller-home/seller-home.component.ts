import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
})
export class SellerHomeComponent implements OnInit {
  constructor(private product: ProductService) {}

  productList: undefined | Product[] = [];
  alert: boolean = false;

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.product.getList().subscribe((result) => {
      this.productList = result;
    });
  }

  deleteProduct(id: Number) {
    this.product.deleteProduct(id).subscribe((result: any) => {
      this.alert = true;
      this.getList();
    });
  }

  closeAlert() {
    this.alert = false;
  }
}
