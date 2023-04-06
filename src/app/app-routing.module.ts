import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormListComponent } from './customer-form-list/customer-form-list.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ResponsiveLoginComponent } from './responsive-login/responsive-login.component';
import { CustomerListComponentComponent } from './UI/customer-list-component/customer-list-component.component';
import { DetailComponentComponent } from './UI/detail-component/detail-component.component';

const routes: Routes = [
  {path: "", component: ResponsiveLoginComponent},
  {path: "update/:cus_id", component: UpdateComponentComponent},
  {path: "detail/:cus_corporatename", component: UpdateComponentComponent},
  {path: "login", component:LoginComponentComponent},
  {path: "customer-form", component:CustomerFormListComponent},
  {path: "customer-list", component:CustomerListComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
