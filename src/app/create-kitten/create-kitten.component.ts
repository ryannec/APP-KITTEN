import { Component, EventEmitter, Output } from '@angular/core';
import { Cat } from '../models/Cat.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent {
  newCat: Cat = {
    name: '',
    race: '',
    birth: new Date(),
    imgCat: '',
  };
  @Output() sendNewCatToParent: EventEmitter<Cat> = new EventEmitter();

  createNewCat() {
    this.sendNewCatToParent.emit(this.newCat);
    this.newCat = {
      name: '',
      race: '',
      birth: new Date(),
      imgCat: '',
    };
  }
}
