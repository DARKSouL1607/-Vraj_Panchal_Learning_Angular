import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './models/user';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Vraj_Panchal_Learning_Angular_123123';
  first_name = 'VRAJ';
  class_code = 'MAD 307'

  user1: User = {
    id: 1, firstName: "Matt", lastName: "Haug",
    department: "Engineering", isAdmin: false
  };
  user2: User = {
    id: 2, firstName: "Darren", lastName:
      "Takakki", department: "Management", isAdmin: false
  };
  
  user3: User = {
    id: 3, firstName: "kai", lastName:
      "filiaut", department: "Sales", isAdmin: false
  };
  
  user4: User = {
    id: 4, firstName: "kiesten", lastName:
      "mio", department: "HR", isAdmin: false
  };
  
  user5: User = {
    id: 5, firstName: "kuantan", lastName:
      "maa", department: "CTO Office", isAdmin: true
  };
  
  user6: User = {
    id: 6, firstName: "vraj", lastName:
      "panchal", department: "PR Team", isAdmin: false
  };
  //Can declare values either way
  userList: User[] = [this.user1, this.user2, this.user3, this.user4, this.user5, this.user6,
  ]
}
