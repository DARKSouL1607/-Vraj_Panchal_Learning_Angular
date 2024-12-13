import { Component, OnInit } from '@angular/core';
import { cricket } from '../Shared/Models/cricket';
import { NgForOf } from '@angular/common';
import { cricketService } from '../Services/cricket.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cricket-list',
  standalone: true,
  imports: [NgForOf, RouterLink],
  templateUrl: './cricket-list.component.html',
  styleUrls: ['./cricket-list.component.css']
})
export class CricketListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'playerName', 'playerPosition', 'playerJerseyNumber', 'playerAge', 'isplayertrophies'];
  crickets: cricket[] = [];

  constructor(private cricketService: cricketService, private router: Router) {}

  ngOnInit() {
    this.cricketService.getcrickets().subscribe({
      next: (data: cricket[]) => this.crickets = data,
      error: err => console.log('Error fetching Cricketers', err),
      complete: () => console.log('Cricket data fetch complete')
    });
  }

  selectedCricket?: cricket;

  selectCricket(cricket: cricket): void {
    this.selectedCricket = cricket;
  }

  deleteCricket(id: number): void {
    this.crickets = this.crickets.filter(c => c.id !== id);
  }

  edit(): void {
    this.router.navigate(['/modify-list-item']);
  }
}