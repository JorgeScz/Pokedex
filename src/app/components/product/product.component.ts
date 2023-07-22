import { Component,Input } from '@angular/core';
import {Poke} from './../../modls/poke.model';

import { NgOptimizedImage ,CommonModule} from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() poke!:Poke;

}
