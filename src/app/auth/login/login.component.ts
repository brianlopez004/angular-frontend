import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  get getemail() {
    return this.loginForm.controls.email;
  }

  get getpassword() {
    return this.loginForm.controls.password;
  }

  Login() {
    if (this.loginForm.valid) {
      console.log('Llamar al servicio de Login');
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset;
    } else {
      this.loginForm.markAllAsTouched;
      // alert('Error!');
    }
  }
}
