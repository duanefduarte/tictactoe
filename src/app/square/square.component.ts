import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton outline status="primary" *ngIf="!value" [disabled]="end">{{ value }}</button>
    <button nbButton outline status="success" *ngIf="value == 'X' && !highlight" [disabled]="end">{{ xValue }}</button>
    <button nbButton status="success" *ngIf="value == 'X' && highlight">{{ xValue }}</button>
    <button nbButton outline status="info" *ngIf="value == 'O' && !highlight" [disabled]="end">{{ oValue }}</button>
    <button nbButton status="info" *ngIf="value == 'O' && highlight">{{ oValue }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent  {
  
  @Input() idx: number;
  @Input() isSeqWin: boolean;
  @Input() value: string;
  @Input() end: boolean;
  @Input() theresWinner: boolean;
  @Input() xValue: string;
  @Input() oValue: string;
  @Input() highlight: boolean;

}