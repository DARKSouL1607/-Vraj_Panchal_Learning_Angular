import {Component, OnInit} from '@angular/core';
import {cricket} from "../Shared/Models/cricket";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {cricketService} from "../Services/cricket.service";
import {NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.scss'
})
export class ModifyListItemComponent implements OnInit{
  cricketForm: FormGroup;
  cricket: cricket | undefined;
  error:string | null=null;


  constructor(
    private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private cricketService: cricketService,
    private router: Router
  ) {
    this.cricketForm = this.formbuilder.group({
      id:[''],
      playerName:['', Validators.required],
      playerPosition:['', Validators.required],
      playerJerseyNumber:[''],
      playerAge:[false],
      isplayertrophies:[false]
    });
  }
  ngOnInit():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.cricketService.getcricketById(id).subscribe({
        next:cricket =>{
          if(cricket){
            this.cricketForm.patchValue(cricket);
          }
        },
        error:err=>{
          this.error = 'Error fetching cricket';
          console.log('Error fetching cricket',err);
        }
      });
    }
  }
  onSubmit():void{
    if(this.cricketForm.valid){
      const cricket: cricket = this.cricketForm.value;
      if(cricket.id){
        this.cricketService.updatecricket(cricket)
        this.router.navigate(['/crickets']);
      }else{
        cricket.id = this.cricketService.generateNewId();
        this.cricketService.addcricket(cricket)
        this.router.navigate(['/crickets']);
      }
    }
  }


}
