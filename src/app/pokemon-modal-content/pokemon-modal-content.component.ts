import { Component,inject,Inject   } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { NgOptimizedImage ,CommonModule} from '@angular/common';
import{Product2Component} from './../components/product2/product2.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { pokeInfo } from './../modls/pokeInfor.model';
@Component({
  standalone: true,
  imports:[CommonModule,NgOptimizedImage,Product2Component],
  selector: 'app-pokemon-modal-content',
  templateUrl: './pokemon-modal-content.component.html',
  styleUrls: ['./pokemon-modal-content.component.css']
})
export class PokemonModalContentComponent {
  http=inject(HttpClient);
  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {}
  locationName: string = ""; 
    poke: pokeInfo[] = []; // Aquí está la propiedad correcta 'pokein', no 'PokeInfo'
      ngOnInit() {
        const pokemonId = this.data.pokemonId;
    console.log(pokemonId);
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
    .subscribe((pokemonDataFull: any) => {
      const locationAreaEncountersLink = pokemonDataFull.location_area_encounters;
      const color = pokemonDataFull.species.url;
      // Realizar una nueva solicitud HTTP al enlace locationAreaEncountersLink
      
      
          // locationData es la respuesta de la nueva consulta con detalles de la ubicación del Pokémon
          // Puedes asignar locationData directamente a la propiedad 'location'
              
          this.http.get<any>(color)
        .subscribe((coloricito: any) => {
          const pokemon2: pokeInfo = {
            name: pokemonDataFull.name,
            img: pokemonDataFull.sprites.front_shiny,
            type: pokemonDataFull.types[0].type.name,
            movimiento:pokemonDataFull.moves[0].move.name,
            texto:coloricito.flavor_text_entries[0].flavor_text,
          };this.poke.push(pokemon2);
        });
          
        
    });
     
}
}
