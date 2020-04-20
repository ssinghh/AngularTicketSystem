import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetdetailComponent } from './getdetail/getdetail.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'details', component: GetdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
