import { nanoid } from "nanoid";

export const DummyData = [
  {
    id : nanoid(),
    Title: "Classic Pancakes",
    Description: "Fluffy and golden pancakes perfect for breakfast.",
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Breakfast",
    Difficulty: "easy",
    cooktime: "15 min",
    preptime: "10 min",
    totaltime: "25 min",
    ingredients: [
      "2 cups all-purpose flour",
      "2 tablespoons sugar",
      "2 teaspoons baking powder",
      "1/2 teaspoon salt",
      "2 eggs",
      "1 1/2 cups milk",
      "2 tablespoons melted butter"
    ],
    instructions: [
      {
        title: "Mix dry ingredients",
        description: "In a large bowl, whisk together flour, sugar, baking powder, and salt."
      },
      {
        title: "Add wet ingredients",
        description: "Add eggs, milk, and melted butter. Stir until just combined."
      },
      {
        title: "Cook the pancakes",
        description: "Pour batter onto a hot greased griddle. Flip when bubbles form. Cook until golden."
      }
    ]
  },
  {
    id : nanoid(),
    Title: "Spaghetti Aglio e Olio",
    Description: "A quick and simple Italian pasta made with garlic and olive oil.",
    img: "https://plus.unsplash.com/premium_photo-1674511582428-58ce834ce172?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Dinner",
    Difficulty: "easy",
    cooktime: "20 min",
    preptime: "10 min",
    totaltime: "30 min",
    ingredients: [
      "200g spaghetti",
      "4 garlic cloves, thinly sliced",
      "1/4 cup olive oil",
      "1 tsp red chili flakes",
      "Salt to taste",
      "Fresh parsley, chopped"
    ],
    instructions: [
      {
        title: "Cook pasta",
        description: "Boil spaghetti in salted water until al dente. Drain and set aside."
      },
      {
        title: "Sauté garlic",
        description: "Heat olive oil in a pan and sauté garlic until golden brown."
      },
      {
        title: "Mix and serve",
        description: "Add chili flakes and cooked pasta. Toss well and garnish with parsley."
      }
    ]
  },
  {
    id : nanoid(),
    Title: "Masala Chai",
    Description: "Traditional Indian spiced tea made with milk and aromatic spices.",
    img: "https://images.unsplash.com/photo-1594137260937-f59050746e36?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Snack",
    Difficulty: "easy",
    cooktime: "10 min",
    preptime: "5 min",
    totaltime: "15 min",
    ingredients: [
      "2 cups water",
      "1 cup milk",
      "2 tsp black tea leaves",
      "2 cardamom pods",
      "1 small piece of ginger",
      "Sugar to taste"
    ],
    instructions: [
      {
        title: "Boil spices",
        description: "In a saucepan, boil water with crushed cardamom and ginger."
      },
      {
        title: "Add tea and milk",
        description: "Add tea leaves and milk. Let it simmer for 5 minutes."
      },
      {
        title: "Strain and serve",
        description: "Strain the tea into cups, add sugar, and serve hot."
      }
    ]
  }
];
