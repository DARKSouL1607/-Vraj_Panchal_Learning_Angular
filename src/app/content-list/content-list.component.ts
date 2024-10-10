import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [], 
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css' ] 
})
export class ContentListComponent {
  
  contentList = [
    { id: 1, title: 'MSI', description: 'GAMING LAPTOP' },
    { id: 2, title: 'DELL', description: 'PROFESSIONAL LAPTOP' },
    { id: 3, title: 'ASUS', description: 'HIGH END LAPTO' },
    { id: 4, title: 'MACBOOK', description: 'WORK SPACE LAPTOP' }
  ];
}
