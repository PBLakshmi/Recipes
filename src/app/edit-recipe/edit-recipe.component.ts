import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeServiceService } from '../recipe-service.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
})
export class EditRecipeComponent implements OnInit {
  recipeId!: string;
  form!: FormGroup;
  selectedRecipe: any;
  @ViewChild('fileInput') fileInput: any;
  recipes!: Recipe[];
  currentImageName: string = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: RecipeServiceService
  ) {}

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get('id')!;
    console.log(this.recipeId);

    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      ShortDescription: new FormControl('',[Validators.required]),
      description: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required]),
    });

    this.fetchRecipeById(this.recipeId);
  }

  fetchRecipeById(recipeId: string): void {
    this.service.getRecipeById(recipeId).subscribe((data: any) => {
      this.selectedRecipe = data;
      console.log(data);
      this.form.patchValue({
        name: data.name,
        ShortDescription:data.shortDescription,
        description: data.description,
        imageUrl: data.imageUrl,
      });
      this.currentImageName = data.imageUrl;
    });
  }
  onFileSelected(event: any) {
    const reader = new FileReader();

    const selectedFile = event.target.files[0];

    if (event.target.files && event.target.files[0]) {
      const [files] = event.target.files;

      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        this.currentImageName = reader.result as string;
        this.form.patchValue({
          imageUrl: reader.result,
        });
      };
    }
  }
  onSubmit() {
    let imageUrl =
      this.fileInput.nativeElement.files.length > 0
        ? this.fileInput.nativeElement.files[0].name
        : this.currentImageName;
    let recipe = {
      name: this.form.value.name,
      shortDescription:this.form.value.shortDescription,
      description: this.form.value.description,
      imageUrl: imageUrl,
    };
    this.service.editRecipe(this.recipeId, recipe).subscribe((res) => {
      console.log(res);
    });
    this.form.reset();
  }
}
