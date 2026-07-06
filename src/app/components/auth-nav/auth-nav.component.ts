import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Avatar } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-auth-nav',
  imports: [MenubarModule, BadgeModule, ToolbarModule, ButtonModule, CommonModule, BadgeModule, InputTextModule, AvatarModule, RippleModule, RouterLink, RouterLinkActive],
  templateUrl: './auth-nav.component.html',
  styleUrl: './auth-nav.component.scss'
})
export class AuthNavComponent {
 items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Register',
        icon: 'pi pi-sign-in',
        routerLink: 'register', 
      },
    
      {
        label: 'Login',
        icon: 'pi pi-user-plus',
        routerLink: 'login',
     
      },
    ];
  }

}
