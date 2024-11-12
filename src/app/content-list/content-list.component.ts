import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ContentListItemComponent } from "../content-list-item/content-list-item.component";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentListItemComponent], 
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  contentList = [
    { id: 1, title: 'MSI', description: 'GAMING LAPTOP' },
    { id: 2, title: 'DELL', description: 'PROFESSIONAL LAPTOP' },
    { id: 3, title: 'ASUS', description: 'HIGH END LAPTOP' },
    { id: 4, title: 'MACBOOK', description: 'WORK SPACE LAPTOP' }
  ];
} 
