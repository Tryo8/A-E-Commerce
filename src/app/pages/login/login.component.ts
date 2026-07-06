import { Component } from '@angular/core';;
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../core/service/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ILogin } from '../../core/interface/ilogin';
import { SharedModule } from '../../shared/module/shared/shared.module';
import { UserService } from '../../core/service/user.service';
import { NotificationsService } from '../../core/service/notifications/notifications.service';

@Component({
  selector: 'app-login',
  imports: [ SharedModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  showSuccessRegisterMessage() {
    this.messageService.showSuccess('success', 'Logged in successfully!');
  };

  showFailRegisterMessage() {
    this.messageService.showError('error', 'Something went wrong, try again later');
  };

  isSubmitting = false;

  email!:FormControl;
  password!:FormControl;


  

  loginForm!: FormGroup;

  constructor(
    private messageService: NotificationsService, 
    private authService:AuthService,
    private _routes: Router, 
    private _userData:UserService) {
    this.intFormControls();
    this.intFormGroup();
    
  }

  intFormControls(): void {
    this.email = new FormControl('',[Validators.required,Validators.email]);
    this.password = new FormControl('',[Validators.required,Validators.minLength(8)]);
  };


  intFormGroup(): void {
    this.loginForm = new FormGroup(({
      email : this.email,
      password : this.password,
    }));
  };


  showPassword = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onFormSubmit() {
    if (this.isSubmitting) return; // prevent double submit
    this.isSubmitting = true;

    // Simulate async submit (e.g. API call)
    setTimeout(() => {
      console.log('Form submitted!');
      this.isSubmitting = false;
      if(this.loginForm.valid){
        console.log(this.loginForm);
        this.signIn(this.loginForm.value);
   
      } else {
      this.loginForm.markAllAsTouched();
      Object.keys(this.loginForm.controls).forEach((control) => this.loginForm.controls[control].markAsDirty());
    }
    }, 1000);

    this.loginForm.markAllAsTouched();
  }
    failMessage:any;
    signIn(data:ILogin): void {
      this.authService.login(data).subscribe({
      next:(res) => {
        this._userData.userName.next(res.name)
        localStorage.setItem('token', JSON.stringify(res.token));
        localStorage.setItem('id', JSON.stringify(res.id));
        console.log(res);
        this.showSuccessRegisterMessage();
    
        setTimeout(() => {
          this._routes.navigate(['user']);

        }, 1000)
      },
      error:(err) => {
        console.log(err);
        this.showFailRegisterMessage();
  
        // ✅ show backend success message
        this.failMessage = 'Invalid email or password, try again';
      }
    })
  }

  skipForNow(){
    localStorage.setItem("token", "SkipLogin");
    this._routes.navigate(["/user/home"])
  
  }

 

}
