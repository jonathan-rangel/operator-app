import { Component, OnInit } from '@angular/core';
import { CpuService } from '../cpu.service';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent implements OnInit {

  constructor(private cpuservce:CpuService) { }

  ngOnInit(): void {
  }

  div():void{ this.cpuservce.div(); }

}
