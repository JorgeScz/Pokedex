import { Component,Input } from '@angular/core';
import {pokeInfo} from './../../modls/pokeInfor.model';

import { NgOptimizedImage ,CommonModule} from '@angular/common';
@Component({
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component {
  @Input() poke!:pokeInfo;

}
