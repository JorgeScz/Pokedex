import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductsComponent } from './pages/products/products.component';
import{UsuariosComponent}from './pages/usuarios/usuarios.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    title: 'productos',
    path: 'products',
    component: ProductsComponent
  },
  {
    title: 'usuarios',
    path: 'usuarios',
    component: UsuariosComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
