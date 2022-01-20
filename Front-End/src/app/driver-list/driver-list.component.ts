import { Component, OnInit } from '@angular/core';
import { ErgastService } from '../ergast.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  drivers: any = {};
  year: any;

  constructor(private service: ErgastService) {}

  ngOnInit() {
    this.year = Date.now();
    this.service.getDriverList(this.year).subscribe((res) => {
      this.drivers = res.MRData.DriverTable.Drivers
    });
  }

}
