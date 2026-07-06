import { Component } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { SharedModule } from '../../shared/module/shared/shared.module';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-user-profile',
  imports: [ SharedModule ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

   user: any;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const id = localStorage.getItem('id');
    if (id) {
      this.auth.getUserById(+id).subscribe({
        next: (res) => this.user = res,
        error: (err) => console.error(err)
      });
    }
  }

}
