import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';
import {
  PaymentRedirectReveniu,
  SignUpService,
  User,
} from '../../services/sign-up.service';

export interface PaymentResponse {
  completion_url: string;
  id: number;
  security_token: string;
  status_code: number;
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  public loadingPayment = false;
  public userData: User;

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedDataService,
    private signUpService: SignUpService
  ) {}

  ngOnInit(): void {
    this.userData = this.sharedService.user;
    console.log('recibi ...', this.userData);
  }

  async pay() {
    await this.signUpService
      .goToPay(this.userData)
      .then((rpt: PaymentRedirectReveniu) => {
        console.log('Go to that page');
        this.openWindow(rpt.completion_url, rpt.security_token);
      })
      .catch((err) => {
        console.log('Hubo un error');
      });
  }

  openWindow(url, hiddenInput) {
    var form = document.createElement('form');
    form.method = 'POST';
    form.action = url;
    form.target = '_self';

    var input = document.createElement('input');
    input.id = 'TBK_TOKEN';
    input.name = 'TBK_TOKEN';
    input.type = 'hidden';
    input.value = hiddenInput;
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
  }
}
