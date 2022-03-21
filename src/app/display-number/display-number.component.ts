import { Component, OnInit } from '@angular/core';
import { CpuService } from '../cpu.service';

@Component({
  selector: 'app-display-number',
  templateUrl: './display-number.component.html',
  styleUrls: ['./display-number.component.css']
})
export class DisplayNumberComponent implements OnInit {

  constructor(private cpuservice:CpuService) { }

  ngOnInit(): void {
  }

  get Number(){
    return this.cpuservice.getNumber();
  }

}
