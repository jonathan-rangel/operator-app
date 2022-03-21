import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CpuService {

  number: number = 15;

  constructor() { }

  add(): void {
    this.number += 2;
  }

  sub(): void {
    this.number -= 2;
  }

  mul(): void {
    this.number *= 2;
  }

  div(): void {
    this.number /= 2;
  }

  getNumber(): number {
    return this.number;
  }

}
