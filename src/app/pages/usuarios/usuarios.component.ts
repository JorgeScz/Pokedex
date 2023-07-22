import { Component,inject,ViewChild  } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { NgOptimizedImage ,CommonModule} from '@angular/common';
import{Product3Component} from './../../components/product3/product3.component';
import { usuario } from './../../modls/usuario.model';
import { forkJoin } from 'rxjs'; 
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MatSidenavModule
import { MatSidenav } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu'; // Importa el módulo MatMenuModule
import { MatToolbarModule } from '@angular/material/toolbar'; // Importa el módulo MatToolbarModule
@Component({
  standalone: true,
  imports:[CommonModule,NgOptimizedImage,Product3Component,MatIconModule ,MatSidenavModule,MatMenuModule,MatToolbarModule,MatSidenavModule],
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  menuUsers: any[] = [];
  users: usuario[] = []; // Cambia "usuari" a "users"
  users2: usuario[] = [];
  http = inject(HttpClient);
  isSidenavOpen: boolean = false;
  totalItems!: number; // Asegúrate de que esta propiedad se inicialice correctamente
  selectedUser: any = null; // Nueva propiedad para almacenar el usuario seleccionado en el menú
  currentPageMenu: number = 1;
  getHeight(): string {
    return this.isSidenavOpen ? '100vh' : '0';
  }

  
  

  // Nueva propiedad para la lista de números de página
  visiblePages: number[] = [];
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;
  
  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
    if (this.isSidenavOpen) {
      this.sidenav.open();
    } else {
      this.sidenav.close();
      this.adjustMainContentMargin();

      // Al cerrar el menú, establecer selectedUser en null para borrar el contenido
      this.selectedUser = null;
    }
  }

  itemsPerPage: number = 6; // Cambiar el número de usuarios por página aquí
  currentPage: number = 1;
  ngOnInit() {
            this.obtenerUsers(); 
            this.obtenerUsers2(); 
           
  }
  adjustMainContentMargin(): void {
    const mainContent = document.querySelector('.main-content') as HTMLElement;
  }
  obtenerUsers2() {
    const requests = [];

      requests.push(this.http.get<any>("https://randomuser.me/api/"));
    
    forkJoin(requests).subscribe((responses) => {
      for (const response of responses) {
        console.log(response);

        const user: usuario = {

          id: response.results[0].location.street.number,
          name: response.results[0].name.first+ " "+response.results[0].name.last,
          img: response.results[0].picture.medium,
          password: response.results[0].login.password, 
          email: response.results[0].email,
          phone_number: response.results[0].cell
          
        };
        this.users2.push(user);
        console.log(user);
      }
    });
  }
  obtenerUsers() {
    const requests = [];

      requests.push(this.http.get<any>("https://randomuser.me/api/?results=50"));
    
    forkJoin(requests).subscribe((responses) => {
      for (const response of responses) {
        console.log(response);

        for (let i = 0; i < 50; i++) {
        const user: usuario = {

          id: response.results[i].location.street.number,
          name: response.results[i].name.first+ " "+response.results[0].name.last,
          img: response.results[i].picture.medium,
          password: response.results[i].login.password, 
          email: response.results[i].email,
          phone_number: response.results[i].cell
          
        };
        this.users.push(user);
        console.log(user);}
      }
      this.totalItems = this.users.length; // Calcula el total de elementos
    });
  }
  getUsersRows(): usuario[][] {
    const rows: usuario[][] = [];
    for (let i = 0; i < this.users.length; i += 3) {
      rows.push(this.users.slice(i, i + 3));
      
    }
    return rows;
  }
  // Métodos para navegar entre las páginas
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;

    }
  }

 

  // Function to calculate the starting and ending index for the current page
  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return this.currentPage * this.itemsPerPage;
    }
    
  // Function to get the users to display on the current page
  get usersToShow(): any[] {
    return this.users.slice(this.startIndex, this.endIndex);
  }
  
  // Function to navigate to the next or previous page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateVisiblePages();
    }
  }
  
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateVisiblePages();
    }
  }

   get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
   }
  updateVisiblePages() {
    const visiblePageCount = 7; // Número de botones de página visibles (2 al 8)

    

    let startIndex = 1;
    let endIndex = Math.min(startIndex + visiblePageCount - 1, this.totalPages - 1);

    // Ajustar startIndex y endIndex para mostrar solo los números del 2 al 8
    if (this.totalPages > visiblePageCount) {
      if (startIndex === 0) {
        endIndex = Math.min(visiblePageCount -1, this.totalPages - 1);
      } else if (endIndex === this.totalPages - 1) {
        startIndex = Math.max(this.totalPages - visiblePageCount, 0);
      }
    } else {
      // Ajustar endIndex cuando hay menos de 7 páginas
      endIndex = this.totalPages - 1;
    }

    this.visiblePages = Array.from({ length: endIndex - startIndex + 1 }, (_, index) => startIndex + index + 1);
    
  }


  // Método para ir a una página específica
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateVisiblePages();
    }
  }
  openMenuItem1() {
    // Coloca aquí la lógica que desees ejecutar cuando se haga clic en la Opción 1 del menú
    console.log('Opción 1 seleccionada');
  }
  
  openMenuItem2() {
    // Coloca aquí la lógica que desees ejecutar cuando se haga clic en la Opción 2 del menú
    console.log('Opción 2 seleccionada');
  }
  goToPageMenu(page: number) {


    if (page >= 1 && page <= this.totalPages) {
      this.currentPageMenu = page;

      this.updateVisiblePages();
  
      // Actualizar selectedUser con el primer usuario de la página actual
      const startIndex = (this.currentPageMenu - 1) * this.itemsPerPage;
    }
    
    }


   
  }

