import { Injectable } from '@angular/core';
import {cricket} from "../Shared/Models/cricket";
import {Observable, of} from "rxjs";
import {crickets} from "../Shared/mockcricket";

@Injectable({
  providedIn: 'root'
})
export class cricketService {
  private cricketList : cricket[] = crickets;

  constructor() { }
  getcrickets():Observable<cricket[]> {
    return of(crickets);
  }
  getcricketById(id:number): Observable<cricket | undefined>{
    return of(this.cricketList.find(foot => foot.id === id));
  }
  addcricket(newcricket:cricket): Observable<cricket[]>{
    this.cricketList.push(newcricket)
    return of(this.cricketList);
  }

  updatecricket(updatecricket:cricket): Observable<cricket[]>{
    const index = this.cricketList.findIndex(foot => foot.id === updatecricket.id);
    if (index !== -1){
      this.cricketList[index] = updatecricket;
    }
    return of(this.cricketList);
  }

  deletecricket(id:number):void{
    this.cricketList = this.cricketList.filter(foot => foot.id !== id);
  }
  generateNewId():number{
    return this.cricketList.length >0 ? Math.max(...this.cricketList.map(foot =>foot.id)) +1:1;
  }

  selectedcricket?: cricket;
  selectcricket(cricket:cricket):void{
    this.selectedcricket = cricket;
  }
}

