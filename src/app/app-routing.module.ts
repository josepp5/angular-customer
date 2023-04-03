import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormListComponent } from './customer-form-list/customer-form-list.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ResponsiveLoginComponent } from './responsive-login/responsive-login.component';

const routes: Routes = [
  {path: "", component: ResponsiveLoginComponent},
  {path: "update/:cus_id", component: UpdateComponentComponent},
  {path: "login", component:LoginComponentComponent},
  {path: "customer-list", component:CustomerFormListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
