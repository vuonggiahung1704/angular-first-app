import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-type';
import { SelllerService } from '../services/selller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SelllerService, private router: Router) {}
  showLogin = false;
  authError: string = '';
  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data: SignUp) {
    this.seller.userSignUp(data);
  }

  login(data: Login) {
    this.authError = '';
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = 'Email or password is not correct';
      }
    });
  }

  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}
