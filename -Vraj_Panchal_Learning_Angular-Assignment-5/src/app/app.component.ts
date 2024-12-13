import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import {cricket} from "./Shared/Models/cricket";
import {cricketService} from "./Services/cricket.service";
import { CricketListComponent } from './cricket-list/cricket-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "ASSINGMENTS - CRICKETER LIST BY VRAJ ";
  displayedColumns: string[] = ['playerName', 'playerPosition', 'playerJerseyNumber', 'playerAge', 'isplayertrophies'];
  crickets: cricket[] = [];

  constructor(private cricketService: cricketService) {
  }

  ngOnInit() {
    this.cricketService.getcrickets().subscribe({
      next: (data: cricket[]) => this.crickets = data,
      error: err => console.log("Error fetching Cricketers", err),
      complete: () => console.log("Cricket data fetch complete")
    })
  }
}