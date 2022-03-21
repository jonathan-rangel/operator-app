import { Component, OnInit } from '@angular/core';
import { CpuService } from '../cpu.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  constructor(private cpuservce:CpuService) { }

  ngOnInit(): void {
  }

  sub():void{ this.cpuservce.sub(); }

}
