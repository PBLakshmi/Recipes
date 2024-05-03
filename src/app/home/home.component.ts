import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServiceService } from '../recipe-service.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  implements OnInit {
  recipes!: Recipe[];
  recipeSubscription!: Subscription;
  
  fetchAllRecipes() {
    this.recipeSubscription = this.service.getRecipes().subscribe(
      (data: any[]) => {
        this.recipes = data;
      },
      (error) => {
        console.error('Error fetching recipes:', error);
      }
    );
  }

  ngOnInit() {
    this.fetchAllRecipes();
  }
  ratingControl= new FormControl(0);
 

  delete(Id?: string) {
    if (Id) {
      this.service.deleteRecipe(Id).subscribe(() => {
        this.recipes = this.recipes.filter((recipe) => recipe.id !== Id);
      });
    } else {
      console.error('invalidId');
    }
  }
  edit(Id: string) {
    this.router.navigate(['../edit', Id], { relativeTo: this.route.parent });
  }
  add() {
    this.router.navigate(['../add'], { relativeTo: this.route.parent });
  }
  

  constructor(
    private service: RecipeServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  onRateChange(rate: number) {
    console.log('New rating:', rate);
}
}
