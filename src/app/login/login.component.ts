import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username=''
  password=''
  errorMessage='Invalid Credentials !'
  invalidLogin=false

  // Dependency injection automatically happens when we declare it as a constructor argument
  // In TS, if we pass a parameter to a constructor, it will be available as a member variable
  constructor(private router:Router){

  }

  handleLogin(){
    if(this.username==='yshnv' && this.password==='hello123'){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
      console.log("Hello "+this.username )
    }
    else{
      this.invalidLogin=true
     
    }

    
  }

}
