import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'; // Asegúrate de importar MatToolbarModule
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ProductComponent } from './components/product/product.component';
import { Product2Component } from './components/product2/product2.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PokemonModalContentComponent } from './pokemon-modal-content/pokemon-modal-content.component';
import { Product3Component } from './components/product3/product3.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component'; // Importa MatDialogModule
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    ProductComponent,
    Product2Component,
    MatDialogModule,
    ModalModule.forRoot(),
    PokemonModalContentComponent,
    Product3Component,
    UsuariosComponent,
    MatSidenavModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
