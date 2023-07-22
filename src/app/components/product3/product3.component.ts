import { Component,Input} from '@angular/core';
import {usuario} from './../../modls/usuario.model';

import { NgOptimizedImage ,CommonModule} from '@angular/common';
@Component({standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  selector: 'app-product3',
  templateUrl: './product3.component.html',
  styleUrls: ['./product3.component.css']
})
export class Product3Component {
  @Input() usuari!:usuario;

}
