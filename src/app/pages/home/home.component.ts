import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  category: string|undefined
  cols=3
  constructor() { }

  ngOnInit(): void {
  }

  oncolumnsCountChange(colsNum:number): void {
    this.cols = colsNum
  }

  onShowCategory(newCategory:string):void {
    this.category=newCategory
  }
}
