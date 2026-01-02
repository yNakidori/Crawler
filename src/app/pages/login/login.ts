import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
})
export class Login {

  email = '';
  password = '';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  async login() {
    try {
      await this.auth.login(this.email, this.password);
      this.router.navigate(['/dashboard']);
    } catch (err) {
      this.error = "Email ou senha inválidos";
    }
  }
}
