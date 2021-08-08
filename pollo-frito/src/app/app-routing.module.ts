import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './shared/component/payment/payment.component';
import { SignUpComponent } from './shared/component/sign-up/sign-up.component';
import { TableComponent } from './shared/component/table/table.component';


const routes: Routes = [
  {
    path: 'list',
    component: TableComponent
  },
  {
    path: '',
    component: SignUpComponent
  },
  {
    path:'payment',
    component: PaymentComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
