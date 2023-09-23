import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder) {}

  loginForm = this.formBuilder.group({
    email: ['braian@gmail.com', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  Login(): void {
    if (this.loginForm.valid) {
      console.log('Llamar al servicio de Login');
    } else {
      alert('Error!');
    }
  }
}
