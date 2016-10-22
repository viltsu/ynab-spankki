import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [HelloWorldComponent],
  declarations: [HelloWorldComponent],
  imports: [BrowserModule, FormsModule],
  providers: []
})
export class MainModule {}
