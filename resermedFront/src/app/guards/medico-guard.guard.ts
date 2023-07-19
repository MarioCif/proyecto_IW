import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MedicoGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const sessionToken = localStorage.getItem('sessionToken');
    if (sessionToken != "medico") {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

}