import { Component, Input, OnInit } from '@angular/core';
import { ErgastService } from '../ergast.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})


export class StandingsComponent implements OnInit {

  standings: any = {};
  year: any;
  beenClicked: boolean = false;
  
  constructor(private service: ErgastService, private datePipe: DatePipe) {
    this.year = Date.now(); 
    this.year = this.datePipe.transform(this.year, 'yyyy');
  }

  ngOnInit() {
    //contact service
    this.service.getYearStandings(this.year).subscribe((res) => {
        this.standings = res.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        console.log(this.standings);
    })
  }


  onSave(year: number){
    
    this.service.getYearStandings(year).subscribe((res) => {
      this.standings = res.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      
  })
  }
}
