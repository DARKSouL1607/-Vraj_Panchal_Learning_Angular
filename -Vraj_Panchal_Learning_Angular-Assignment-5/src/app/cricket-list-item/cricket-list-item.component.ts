import { Component, Input } from '@angular/core';
import { cricket } from '../Shared/Models/cricket';
import {crickets} from "../Shared/mockcricket";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cricket-list-item',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './cricket-list-item.component.html',
  styleUrls: ['./cricket-list-item.component.css']
})
export class CricketListItemComponent {
  @Input() cricket?: cricket;
  protected readonly crickets = crickets;
}
