import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  formData = {
    email: '',
    password: '',
    verifyPassword: '',
  };

  isFormValid(): boolean {
    return this.formData.email !== '' && this.formData.password !== '' && this.formData.password === this.formData.verifyPassword;
  }

  onSubmit() {
    // Aquí puedes agregar la lógica para enviar los datos de registro al servidor
    // Por ejemplo, mediante un servicio de autenticación.
    console.log('Datos del formulario:', this.formData);
  }
  constructor(private router: Router) { }

  login() {
    this.router.navigate(["/products"]);
  }
}
