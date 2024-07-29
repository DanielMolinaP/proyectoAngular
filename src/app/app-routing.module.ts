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
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },  // Protege la ruta
  { path: 'fecha', component: DateCalculatorComponent }, // Ruta para el componente DateCalculatorComponent
  { path: 'formulario', component: FormComponent }, // Ruta para FormComponent
  { path: 'conversion', component: ConversionComponent } // Ruta para FormComponent

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
