import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';  // Importa el guard
import { DateCalculatorComponent } from './date-calculator/date-calculator.component';
import { FormComponent } from './form/form.component';
import { ConversionComponent } from './conversion/conversion.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },  
  { path: 'fecha', component: DateCalculatorComponent,canActivate: [AuthGuard] }, 
  { path: 'formulario', component: FormComponent }, 
  { path: 'conversion', component: ConversionComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
