import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      description: `Originário da região de Provença, na França, este prato, que mistura ingredientes como berinjela, 
        tomate (olha ele aqui de novo), pimentão e abobrinha, é tido por alguns como “comida de camponês”.
        Inclusive por alguns dos incrédulos personagens da sensacional animação da Pixar, de 2007,
        que recebe o mesmo nome da receita. Mas no final, mesmo com essa denominação,
        a verdade é que o Ratatouille é o tipo de comida feita para quem, assim como o crítico Anton Ego, 
        não engole qualquer coisa.`,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      description: `Originário da região de Provença, na França, este prato, que mistura ingredientes como berinjela, 
        tomate (olha ele aqui de novo), pimentão e abobrinha, é tido por alguns como “comida de camponês”.
        Inclusive por alguns dos incrédulos personagens da sensacional animação da Pixar, de 2007,
        que recebe o mesmo nome da receita. Mas no final, mesmo com essa denominação,
        a verdade é que o Ratatouille é o tipo de comida feita para quem, assim como o crítico Anton Ego, 
        não engole qualquer coisa.`,
      imageUrl:
        // tslint:disable-next-line: max-line-length
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/1024px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes', 'Cheese']
    },
    {
      id: 'r3',
      title: 'O Ratatouille do filme "Ratatouille"',
      description: `Originário da região de Provença, na França, este prato, que mistura ingredientes como berinjela, 
        tomate (olha ele aqui de novo), pimentão e abobrinha, é tido por alguns como “comida de camponês”.
        Inclusive por alguns dos incrédulos personagens da sensacional animação da Pixar, de 2007,
        que recebe o mesmo nome da receita. Mas no final, mesmo com essa denominação,
        a verdade é que o Ratatouille é o tipo de comida feita para quem, assim como o crítico Anton Ego, 
        não engole qualquer coisa.`,
      imageUrl:
        // tslint:disable-next-line: max-line-length
        'https://www.guiadasemana.com.br/contentFiles/system/pictures/2015/6/137688/cropped/ratatouille.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes', 'Cheese']
    }
  ];

  constructor() { }

  getAllRecipes(): Array<Recipe> {
    return [...this.recipes];
  }

  getRecipeById(recipeId: string) {
    return {...this.recipes.find(recipe => recipe.id === recipeId)};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
