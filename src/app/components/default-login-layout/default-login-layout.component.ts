import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.css'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string ="";
  @Input() primaryBtnText: string ="";
  @Input() secundaryBtnText: string ="";
  
  
}
