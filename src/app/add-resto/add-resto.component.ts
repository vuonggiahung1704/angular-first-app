import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
})
export class AddRestoComponent implements OnInit {
  constructor(private produtc: ProductService) {}

  alert: boolean = false;

  ngOnInit(): void {}

  addProduct(data: Product) {
    this.produtc.saveProduct(data).subscribe(() => {
      this.alert = true;
    });
  }

  closeAlert() {
    this.alert = false;
  }
}
