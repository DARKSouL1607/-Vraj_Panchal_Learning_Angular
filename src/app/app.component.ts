import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from "./content-list/content-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ContentListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vraj_Panchal_Learning_Angular_123123';

  userList = [
    { id: 1, firstName: "Matt", lastName: "Haug", department: "Engineering", isAdmin: false },
    { id: 2, firstName: "Darren", lastName: "Takakki", department: "Management", isAdmin: false },
    { id: 3, firstName: "Kai", lastName: "Filiaut", department: "Sales", isAdmin: false },
    { id: 4, firstName: "Kiesten", lastName: "Mio", department: "HR", isAdmin: false },
    { id: 5, firstName: "Kuantan", lastName: "Maa", department: "CTO Office", isAdmin: true },
    { id: 6, firstName: "Vraj", lastName: "Panchal", department: "PR Team", isAdmin: false },
  ];
}