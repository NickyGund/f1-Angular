import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { ErgastService } from '../ergast.service';
import { DatePipe } from '@angular/common';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})

export class StandingsComponent implements OnInit {

  @Input()
  year: any;
  standings: any = {};
  should_open: boolean = false;
  
  constructor(private service: ErgastService, private datePipe: DatePipe) {
    this.year = Date.now(); 
    this.year = this.datePipe.transform(this.year, 'yyyy');
  }

  ngOnInit() {
    //contact service
    this.service.getYearStandings(this.year.toString()).subscribe((res) => {
        this.standings = res.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        console.log(this.standings);
    })
  }

  onYearChange(newYear: string){
    this.year = newYear
    this.service.getYearStandings(newYear).subscribe((res) => {
      this.standings = res.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    })
  }


  openChildComponent(){
    if(this.should_open==true){
      this.should_open = false
    }
    else{
    this.should_open = true;
    }
  }

 

}
