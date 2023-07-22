import { Component ,inject} from '@angular/core';
import{ProductComponent} from './../../components/product/product.component'
import{Product2Component} from './../../components/product2/product2.component'
import { Poke } from './../../modls/poke.model';
import { pokeInfo } from './../../modls/pokeInfor.model';
import {HttpClient}from '@angular/common/http';
import { NgOptimizedImage ,CommonModule} from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonModalContentComponent } from '../../pokemon-modal-content/pokemon-modal-content.component'; // Asegúrate de tener la ruta correcta
import {MatIconModule} from '@angular/material/icon';
import{Product3Component} from './../../components/product3/product3.component';
import { usuario } from './../../modls/usuario.model';

import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  standalone: true,
  imports:[ProductComponent,Product3Component,CommonModule,NgOptimizedImage,MatMenuModule,MatToolbarModule,Product2Component,MatIconModule,MatSidenavModule],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {                  
  constructor(public dialog: MatDialog, private router: Router) {}

  http=inject(HttpClient);
  pokein: pokeInfo[] =[];
  poke: Poke[] =[];
  users2: usuario[] = [];

  filteredPoke: any[] = [];
  fuego: any[] = [];
  isDrawerOpened = false;
  toggleDrawer() {
    this.isDrawerOpened = !this.isDrawerOpened;
  }

  aux:any[]=[];
  getFilteredPoke() {
    this.filteredPoke = this.aux.filter(pokemon => pokemon.type.toLowerCase().includes('grass'));
    
    this.poke=this.filteredPoke;
    this.currentPage = 1; // Reiniciar la página a la primera después de aplicar el filtro
  }
  tipofuego() {
    this.fuego = this.aux.filter(pokemon => pokemon.type.toLowerCase().includes('fire'));
    
    
    this.poke=this.fuego;
    this.currentPage = 1; // Reiniciar la página a la primera después de aplicar el filtro
  }
  getFilteredPoke3() {
    this.filteredPoke = this.aux.filter(pokemon => pokemon.type.toLowerCase().includes('water'));
    
    this.poke=this.filteredPoke;
    this.currentPage = 1; // Reiniciar la página a la primera después de aplicar el filtro
  }
  getFilteredPoke4() {
    this.poke=this.aux;
  }
  ngOnInit() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=150').subscribe((data: any) => {
      const results = data.results;
      results.forEach((pokemonData: any) => {
        this.http.get<any>(pokemonData.url).subscribe((pokemonDataFull: any) => {
          const pokemon: Poke = {
            id: pokemonDataFull.id,
            name: pokemonDataFull.name,
            img: 
              pokemonDataFull.sprites.front_shiny,
           type: pokemonDataFull.types[0].type.name,
           
          };
          this.poke.push(pokemon);
          this.aux.push(pokemon);
        });
      });
    });

  }
  selectOption(option: string) {
    // Implement the logic for handling the selected option
    console.log('Selected option:', option);
    // You can add your own logic here based on the selected option
  }
  logout() {
    // Aquí puedes implementar la lógica para cerrar sesión, por ejemplo, eliminar el token de autenticación, etc.
    // Por ahora, simplemente redirigiremos al usuario a la página de inicio de sesión
    
     this.router.navigate(['/login']);
  }
  usuario() {
    // Aquí puedes implementar la lógica para cerrar sesión, por ejemplo, eliminar el token de autenticación, etc.
    // Por ahora, simplemente redirigiremos al usuario a la página de inicio de sesión
    
     this.router.navigate(['/usuarios']);
  }
  showSubMenu: boolean = false;

  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }
  changeCursor(cursorType: string) {
    document.body.style.cursor = cursorType;
  }
  itemsPerPage: number = 9;
  currentPage: number = 1;
  getCurrentPageItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.poke.slice(startIndex, endIndex);
  }
  // Método para ir a la página anterior
  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
// Método para ir a la siguiente página
goToNextPage() {
  const totalPages = Math.ceil(this.poke.length / this.itemsPerPage);
  if (this.currentPage < totalPages) {
    this.currentPage++;
  }
}
getTotalPages(): number {
  return Math.ceil(this.poke.length / this.itemsPerPage);
}


  openPokemonModal(Poke: any): void {
    const pokemonId = Poke.id; // Acceder al ID del Pokémon desde el objeto Poke
    const dialogRef = this.dialog.open(PokemonModalContentComponent, {
      width: '400px', // Tamaño del modal
      data: { pokemonId } // Pasa los datos del Pokémon al componente del modal
    });

    // Escucha el evento cuando se cierra el modal
    dialogRef.afterClosed().subscribe(result => {
      // Lógica que se ejecuta después de que se cierra el modal (si es necesario)
    });
  }

  /////
  
}
