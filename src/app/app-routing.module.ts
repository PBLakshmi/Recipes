import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';

const routes: Routes = [{'path':'',component:HomeComponent},
{'path':'edit/:id',component:EditRecipeComponent},
{ 'path':'add',component:AddRecipeComponent},
{ 'path':'view/:id',component:ViewRecipeComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
