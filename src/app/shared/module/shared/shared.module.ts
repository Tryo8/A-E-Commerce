import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from "primeng/button";
import { RouterLink } from '@angular/router';
import { Message } from 'primeng/message';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { AutoFocusModule } from 'primeng/autofocus';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { SkeletonModule } from 'primeng/skeleton';
import { SplitButton } from 'primeng/splitbutton';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { Chip } from 'primeng/chip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule, 
    PasswordModule, 
    IconField, 
    InputTextModule, 
    FloatLabel, 
    InputIcon, 
    ReactiveFormsModule, 
    ButtonModule, 
    CommonModule, 
    RouterLink,
    Message,
    NgxSpinnerModule,
    AutoFocusModule,
    Menubar,
    SkeletonModule,
    OverlayBadgeModule,
    SplitButton,
    ConfirmPopupModule,
    Chip
  ],
  exports: [
    CommonModule,
    FormsModule, 
    PasswordModule, 
    IconField, 
    InputTextModule, 
    FloatLabel, 
    InputIcon, 
    ReactiveFormsModule, 
    ButtonModule, 
    CommonModule, 
    RouterLink,
    Message, 
    NgxSpinnerModule,
    AutoFocusModule,
    Menubar,
    SkeletonModule,
    OverlayBadgeModule,
    SplitButton,
    ConfirmPopupModule,
    Chip
  ],

})
export class SharedModule { }
