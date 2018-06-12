import { Injectable } from '@angular/core';

@Injectable()
export class RandomNumberService {
  public between(from: number, till: number): number {
    return Math.floor(from + Math.random() * till);
  }
}
