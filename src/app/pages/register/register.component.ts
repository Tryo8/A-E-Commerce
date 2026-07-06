import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../core/service/auth.service';
import { IRegister } from '../../core/interface/iregister';
import { catchError, of } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { SharedModule } from '../../shared/module/shared/shared.module';
import { UserService } from '../../core/service/user.service';
import { NotificationsService } from '../../core/service/notifications/notifications.service';

@Component({
  selector: 'app-register',
  imports: [ SharedModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  isSubmitting = false;

  name!:FormControl;
  email!:FormControl;
  password!:FormControl;
  rePassword!:FormControl;

  registrationForm!: FormGroup;

  isRegistered: boolean = false;
  showPassword = false;

  constructor(
    private messageService: NotificationsService, 
    private authService:AuthService,
    private _routes: Router, 
    private _userData : UserService) {
    this.intFormControls();
    this.intFormGroup();
    
  };

  intFormControls(): void {
    const usernamePattern = /^[a-zA-Z0-9_]+$/;
    this.name = new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(33),this.forbiddenNameValidator(['admin', 'test', 'null','hacker','anonymous','nigga','fucker']),Validators.pattern(usernamePattern)]);
    this.email = new FormControl('',[Validators.required,Validators.email]);
    this.password = new FormControl('',[Validators.required,Validators.minLength(8)]);
    this.rePassword = new FormControl('',[Validators.required,this.passwordMatch(this.password)]);
  };


  intFormGroup(): void {
    this.registrationForm = new FormGroup(({
      name : this.name,
      email : this.email,
      password : this.password,
      rePassword : this.rePassword
    }));
  };

  passwordMatch(pass:AbstractControl): ValidatorFn {
    return(rePass:AbstractControl): null | {[key: string]: boolean} => {
      if(rePass.value !== pass.value ){
        return {passNotMatch : true}   
      } else {
        return null;  
      }
    }
  };

  forbiddenNameValidator(forbiddenWords: string[]) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const lowerValue = control.value.toLowerCase();
      const isForbidden = forbiddenWords.some(word => lowerValue.includes(word));

      return isForbidden ? { forbiddenName: true } : null;
    };
  };

 
  togglePassword() {
    this.showPassword = !this.showPassword;
  };

  onFormSubmit() {
    if (this.isSubmitting) return; // prevent double submit
    this.isSubmitting = true;

    // Simulate async submit (e.g. API call)
    setTimeout(() => {
      console.log('Form submitted!');
      this.isSubmitting = false;
      if(this.registrationForm.valid){
        console.log(this.registrationForm);
        this.signUp(this.registrationForm.value);
        this.isRegistered = true;
   
      } else {
      this.registrationForm.markAllAsTouched();
      Object.keys(this.registrationForm.controls).forEach((control) => this.registrationForm.controls[control].markAsDirty());
    }
    }, 1000);

    this.registrationForm.markAllAsTouched();
  }

  signUp(data:IRegister): void {
    this.authService.register(data).subscribe({
      next:(res) => {
        this._userData.userName.next(res.name);
        console.log(res);
        this.showSuccessRegisterMessage();
       
        setTimeout(() => {
          //const {email, password} = data;
          // this.authService.login({email,password}).subscribe((next) => {this._routes.navigate(['user'])});
          this._routes.navigate(['user']);
          localStorage.setItem('token',JSON.stringify(res.token));
          localStorage.setItem('id',JSON.stringify(res.user.id));
        }, 1000)
      },
      error:(err) => {
        console.log(err);
        this.showFailRegisterMessage();
       
      }
    })
  }

  showSuccessRegisterMessage() {
    this.messageService.showSuccess('success', 'Registered Successfully');
  };

  showFailRegisterMessage() {
    this.messageService.showError('error', 'Ops something went wrong:(');
  };

 
}
