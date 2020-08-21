import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login(form: NgForm){
    console.log(form.value);

    if(form.value.email === 'admin@gmail.com' && form.value.password ==='tic123'){
      localStorage.setItem('email', form.value.email);
      this.router.navigate(['/home']);
    }
  }

}
