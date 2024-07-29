import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  name: string = '';
  submittedName: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Verifica si hay un token en el localStorage
    const userToken = localStorage.getItem('userToken');
    if (!userToken) {
      this.router.navigate(['/login']);
      return;
    }

    // Cargar el nombre almacenado en el Local Storage al iniciar el componente
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      this.submittedName = storedName;
    }
  }

  submitName(): void {
    if (this.name.trim()) {
      this.submittedName = this.name;
      this.name = '';
      localStorage.setItem('userName', this.submittedName);
    }
  }

  logout(): void {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    this.submittedName = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('userToken') !== null;
  }
}
