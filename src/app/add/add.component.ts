import { Component, OnInit } from '@angular/core';
import { CpuService } from '../cpu.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private cpuservce:CpuService) { }

  ngOnInit(): void {
  }

  add():void{ this.cpuservce.add(); }

}
