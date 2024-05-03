import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServiceService } from '../recipe-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css'],
})
export class ViewRecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  selectedRecipe: any;
  recipeId!: string;
  constructor(
    private service: RecipeServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id')!;
    this.service.getRecipeById(this.recipeId).subscribe((data: any) => {
      this.selectedRecipe = data;
      console.log(data);
    });
  }
}
