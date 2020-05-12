import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  stringLengthReducerForm : FormGroup;
  @Output() dataSubmitted = new EventEmitter<{text: string, length: number}>();

  constructor() { }

  ngOnInit() {
    this.stringLengthReducerForm = new FormGroup({
      'longText' : new FormControl('', [Validators.required]),
      'requiredLength' : new FormControl('', [Validators.required])
    })
  }

  get longText() {
    return this.stringLengthReducerForm.get('longText');
  }

  get requiredLength() {
    return this.stringLengthReducerForm.get('requiredLength');
  }

  onFormSubmit() {
    this.dataSubmitted.emit({text: this.longText.value, length: this.requiredLength.value});
  }

}
