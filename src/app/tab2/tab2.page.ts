import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  topics = ['Ciencia', 'Tecnologia', 'Politica', 'Salud', 'Universo', 'Marketing', 'Innovación', 'Cultura', 'Productividad']

  constructor() {}

  doReorder(event){
    event.detail.complete();
  }

}
