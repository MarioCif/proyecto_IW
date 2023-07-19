import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const sessionToken = localStorage.getItem('sessionToken');
    if (!sessionToken || sessionToken == '') {
      this.router.navigate(['/login']);
      return false;
    }

    const allowedTokens = ['usuario', 'medico'];
    if (!allowedTokens.includes(sessionToken)) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }

}