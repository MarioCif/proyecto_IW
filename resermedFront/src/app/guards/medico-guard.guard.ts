import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MedicoGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const tokenDataString = localStorage.getItem('currentUser');
    if(tokenDataString){
      const tokenData = JSON.parse(tokenDataString);
      const userType = tokenData.userType;

      if (userType != "medico") {
        this.router.navigate(['/login']);
        return false;
      }

    }

    return true;
  }

}