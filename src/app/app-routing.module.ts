import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { DoctorComponent } from './component/dashboard/doctor/doctor.component';
import { ViewDoctorComponent } from './component/dashboard/doctor/view-doctor/view-doctor.component';
import { PatientComponent } from './component/dashboard/patient/patient.component';
import { ViewPatientComponent } from './component/dashboard/patient/view-patient/view-patient.component';
import { AuthguardGuard } from './shared/guard/authguard.guard';
import {ReceiptComponent} from "./component/dashboard/receipt/receipt.component";
import {ViewReceiptComponent} from "./component/dashboard/receipt/view-receipt/view-receipt.component";
import {VisitComponent} from "./component/dashboard/visit/visit.component";
import {ViewVisitComponent} from "./component/dashboard/visit/view-visit/view-visit.component";


const routes: Routes = [
  {path : '', redirectTo : 'login', pathMatch : 'full'},
  {path : 'dashboard', children :
  [
    {path : '', redirectTo: 'patient', pathMatch: 'full'},
    {path : 'patient', component: PatientComponent},
    {path : 'doctor', component: DoctorComponent},
    {path : 'receipt', component: ReceiptComponent},
    {path : 'visit', component: VisitComponent},
    {path : 'visit/:id', component: ViewVisitComponent},
    {path : 'doctor/:id', component: ViewDoctorComponent},
    {path : 'patient/:id', component: ViewPatientComponent},
    {path : 'receipt/:id', component: ViewReceiptComponent},
  ], canActivate: [AuthguardGuard]},
  {path : 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
