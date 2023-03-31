import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormListComponent } from './customer-form-list/customer-form-list.component';
import { UpdateComponentComponent } from './update-component/update-component.component';

const routes: Routes = [
  {path: "", component: CustomerFormListComponent},
  {path: "update/:cus_id", component: UpdateComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
