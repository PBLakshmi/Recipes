import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    ViewRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
