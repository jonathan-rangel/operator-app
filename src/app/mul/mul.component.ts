import { Component, OnInit } from '@angular/core';
import { CpuService } from '../cpu.service';

@Component({
  selector: 'app-mul',
  templateUrl: './mul.component.html',
  styleUrls: ['./mul.component.css']
})
export class MulComponent implements OnInit {

  constructor(private cpuservce:CpuService) { }

  ngOnInit(): void {
  }

  mul():void{ this.cpuservce.mul(); }

}
