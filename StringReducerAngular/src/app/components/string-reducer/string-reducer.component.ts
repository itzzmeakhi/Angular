import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-reducer',
  templateUrl: './string-reducer.component.html',
  styleUrls: ['./string-reducer.component.css']
})
export class StringReducerComponent implements OnInit {

  text = "hhsjkskojdwojdwodowdjwodjwlmlxmlaml";
  startConvert : boolean = false;
  textToConvert : string;
  limit : number;

  constructor() { }

  ngOnInit() {
  }

  onConvert(data : {text: string, length: number}) {
    if(data) {
      this.startConvert = true;
      this.textToConvert = data.text;
      this.limit = data.length;
    }
  }

}
