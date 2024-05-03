import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from './recipe.model';
import { RecipeServiceService } from './recipe-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Recipe-App';

  recipe: Recipe[] = [];
  recipesToDisplay!: Recipe[];
  searchForm!: FormGroup;
  filteredRecipes!: any;
  recipes: any;
  onAdd() {
    this.router.navigate(['add']);
  }
  constructor(
    private router: Router,
    private service: RecipeServiceService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.searchForm = this.fb.group({
      searchItem: [''],
    });
  }
  ngOnInit(): void {
    this.service.getRecipes().subscribe((data) => {
      this.recipe = data;
    });
    this.searchForm.get('searchItem')!.valueChanges.subscribe((value) => {
      this.filterRecipes(value);
    });
  }
  filterRecipes(value: string) {
    const filterValue = value.toLowerCase();
    this.filteredRecipes = this.recipe.filter((recipe) =>
      recipe.name.toLowerCase().includes(filterValue)
    );
  }
}
