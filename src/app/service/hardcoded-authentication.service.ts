import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
   // console.log('before '+this.isUSerLoggedIn())
    if (username === 'yshnv' && password === 'hello123') {
      sessionStorage.setItem('authenticatedUser', username)
      //console.log('after '+this.isUSerLoggedIn())
      return true;
    }
    else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
