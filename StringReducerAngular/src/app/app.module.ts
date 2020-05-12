import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StringReducerComponent } from './components/string-reducer/string-reducer.component';
import { InputFormComponent } from './components/string-reducer/input-form/input-form.component';

import { StringReducer } from './pipes/string-reducer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StringReducerComponent,
    InputFormComponent,
    StringReducer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
