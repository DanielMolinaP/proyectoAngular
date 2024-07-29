import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

type UserCredentials = {
  username: string;
  password: string;
}

const admin: UserCredentials = {
  username: "carlos.oviedo",
  password: "$oyAdmin666"
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Si hay un token en localStorage, redirige al usuario a la página de bienvenida
    if (localStorage.getItem('userToken')) {
      this.router.navigate(['/welcome']);
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      if (username === admin.username && password === admin.password) {
        localStorage.setItem('userToken', 'token_de_ejemplo');  // Guarda un token de ejemplo
        this.router.navigate(['/welcome']);
      } else {
        this.errorMessage = 'Credenciales incorrectas';
      }
    }
  }
}
