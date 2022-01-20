import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Output() newYearEvent = new EventEmitter<string>();
  newyear: any;


  constructor() { 
    this.newyear = new FormControl('2022');
  }

  ngOnInit(): void {
  }

  updateYear(){
    this.newyear.setValue(this.newyear.value)
    //alert(this.year.value)
  }

  outPutYear(value: string){
    this.newYearEvent.emit(value);
  }


}
