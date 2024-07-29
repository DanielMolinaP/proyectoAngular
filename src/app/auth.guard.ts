import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthenticated = this.isAuthenticated();
    if (!isAuthenticated) {
      // Redirigir al usuario al login si no está autenticado
      this.router.navigate(['/login']);
    }
    return isAuthenticated;
  }

  private isAuthenticated(): boolean {
    // Verificar la autenticación. Aquí se podría verificar un token o sesión activa.
    // Este es solo un ejemplo sencillo.
    const userToken = localStorage.getItem('userToken'); // o sessionStorage
    return !!userToken;
  }
}
