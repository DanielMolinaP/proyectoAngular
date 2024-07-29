import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { CambioLetrasPipe } from './cambio-letras.pipe';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DateCalculatorComponent } from './date-calculator/date-calculator.component';
import { FormComponent } from './form/form.component';
import { ConversionComponent } from './conversion/conversion.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    CambioLetrasPipe,
    DateCalculatorComponent,
    FormComponent,
    ConversionComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule ,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  // Asegúrate de que ReactiveFormsModule esté aquí
    HttpClientModule,
    BrowserAnimationsModule,  // Importa BrowserAnimationsModule
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
