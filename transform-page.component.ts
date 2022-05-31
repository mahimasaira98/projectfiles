import { ConditionalExpr, identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-transform-page',
  templateUrl: './transform-page.component.html',
  styleUrls: ['./transform-page.component.scss']
})
export class TransformPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public displayArraylist = [
    {
      id: 1,
      text: "first",
      pos: 170
    },
    
    {
      id: 2,
      text: "second",
      pos: 20
    },
    {
      id: 3,
      text: "third",
      pos: 3560
    },
    {
      id: 4,
      text: "fourth",
      pos: 4
    }
  ]

  applyFilter(id:number){
    // this.displayArraylist = this.displayArraylist.filter((element) => {
    //   return element.id !== id;
    // })
    // console.log(this.displayArraylist);
    
    let index = this.displayArraylist.findIndex((item) => item.id == 3)
    console.log(index);
    console.log(this.displayArraylist)

    this.displayArraylist.sort((a,b) => {
        return a.pos - b.pos
        
    })
    console.log(this.displayArraylist)
  }
  }
   


