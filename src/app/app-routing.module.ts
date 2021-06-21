import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmDetailsComponent } from './components/farm-details/farm-details.component';
import { FarmListComponent } from './components/farm-list/farm-list.component';
import { FirstPageComponent } from './components/first-page/first-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'bienvenue' },
  { path: 'bienvenue', component: FirstPageComponent },
  {
    path: 'fermes', component: FarmListComponent },
  { path: 'fermes/:id', component: FarmDetailsComponent }
  ]


  // { path: 'create-employee', component: EmployeeCreateComponent },
  // { path: 'edit-employee/:id', component: EmployeeEditComponent },
  // { path: 'employees-list', component: EmployeeListComponent }

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }