import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private router : Router){

  }

  ngOnInit(): void {
    
  }

  user = {
    emailAddress:'',
    password:'',
  }
  // onSubmit(loginForm:any){
  //   console.log(loginForm.value);
  // }
  onSubmit(form: NgForm) {
    if (form.valid) {
     
        alert('Form Submitted!');
    } else {
      
        form.control.markAllAsTouched();
    }
  }

}
