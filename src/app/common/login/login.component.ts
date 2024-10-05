import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Loginmodel } from '../../model/Loginmodel';
import { MasterService } from '../../service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private service: MasterService, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  _loginData: Loginmodel = {
    username: '',
    password: ''
  };

  ProceedLogin(form: any) {
    if (form.valid) {
      this.service.proceedLogin(this._loginData).subscribe(item => {
        let _resp = item;
        if (_resp.length > 0) {
          localStorage.setItem('username', this._loginData.username);
          this.router.navigateByUrl('');
        } else {
          alert('Invalid Credentials');
        }
      })
    }
  }
}
