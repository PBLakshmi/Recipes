import { Component, OnInit, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';

import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent implements OnInit {
  id!: string;
  form!: FormGroup;
  selectedImage: any;
  @ViewChild('fileInput') fileInput: any;
  recipes!: Recipe[];

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      shortDescription: new FormControl('',[Validators.required]),
      description: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required]),
    });
  }
  constructor(private service: RecipeServiceService, private fb: FormBuilder) {}
  onSubmit() {
    let recipe = {
      name: this.form.value.name,
      shortDescription:this.form.value.shortDescription,
      description: this.form.value.description,
      imageUrl: this.fileInput.nativeElement.files[0].name,
    };
    this.service.addRecipe(recipe).subscribe((res) => {
    console.log(Response);
    });
    this.form.reset();
  }
}
