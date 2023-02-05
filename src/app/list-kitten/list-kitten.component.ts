import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from '../models/Cat.model';
@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent {
  displayBtnAdoptMe = true;

  @Input() catsToAdopt: Cat[] = [];

  @Output() addCatAdopted: EventEmitter<Cat> = new EventEmitter();
  sendCatToAdoptedList(event: Cat) {
    this.addCatAdopted.emit(event);
  }
}
