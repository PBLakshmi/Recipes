import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeServiceService {
  private url = 'http://localhost:3000/posts';
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url);
  }
  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.url}/${id}`);
  }
  deleteRecipe(id?: string): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.url}/${id}`);
  }
  editRecipe(id: string, recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.url}/${id}`, recipe);
  }
  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.url, recipe);
  }
  constructor(private http: HttpClient) {}
}
