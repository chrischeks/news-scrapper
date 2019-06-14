import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PunchComponent } from './punch/punch.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PunchDisplayComponent } from './punch-display/punch-display.component';

const routes: Routes = [
  {path: '', component: PunchComponent},
  {path: 'punch/:id', component: PunchDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
