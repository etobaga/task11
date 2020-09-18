import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  title = 'task1';
@Output() newItemEvent = new EventEmitter<string>();
addNewItem(value: string){

  this.newItemEvent.emit(value);
  alert('task is added');
}
}
