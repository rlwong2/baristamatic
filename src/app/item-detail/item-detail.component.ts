import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent implements OnInit {
  @Input() ingredient: Ingredient;
  
  constructor() { }

  ngOnInit(): void {
  }

}
