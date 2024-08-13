import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from "../../components/default-login-layout/default-login-layout.component";

@Component({
  selector: 'app-default-login',
  standalone: true,
  imports: [LoginComponent, DefaultLoginLayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
