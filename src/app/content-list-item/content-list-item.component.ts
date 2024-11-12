import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-list-item',
  standalone: true, // Add this line
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.css']
})
export class ContentListItemComponent {
  @Input() contentItem: { id: number; title: string; description: string } | undefined; 
} 

