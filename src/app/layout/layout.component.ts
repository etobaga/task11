import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
items = ['1task'] ;
addItem(newItem: string){
  this.items.push(newItem);
}
}
