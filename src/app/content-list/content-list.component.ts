import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListItemComponent } from "../content-list-item/content-list-item.component";
import { LaptopContentService } from '../laptop-content.service'; // Import the service
import { IContent } from '../models/Icontent';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentListItemComponent], 
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contentList: IContent[] = [];

  constructor(private laptopContentService: LaptopContentService) {} 

  ngOnInit(): void {
    this.laptopContentService.getAllContent().subscribe((contents) => {
      this.contentList = contents;
    });
  }
}
