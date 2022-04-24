export const Category = {
    BREKKIE: 'BREKKIE',
    SOUP: 'SOUP',
    PASTA: 'PASTA',
    OTHER: 'OTHER',
};

const Recipes = [
    {
        name: 'porridge',
        category: Category.BREKKIE,
        ingredients: [
            '2/3 cup rolled oats',
            '1/2 cup unsweetened almond milk',
            '2 tablespoons raw pepitas, roughly chopped',
            'pinch ground ginger',
            'pinch ground cinnamon',
            'pinch ground nutmeg',
            '2 tablespoons hemp seeds',
            '1 tablespoon almond butter',
            '2 teaspoons chia seeds',
            '1/2 teaspoon vanilla extract',
        ],
        instructions: [
            'Bring the oats and 2/3 cup water to a boil in a medium saucepan over medium high heat.',
            'Reduce the heat to low and stir in the almond milk, pepitas, ginger, cinnamon, and nutmeg.',
            'Cook, stirring occasionally, for about 5 minutes, until the oats are tender.',
            'Remove from heat and stir in the hemp seeds, almond butter, chia seeds, and vanilla.',
            'Taste, adding your choice of sweetener as desired for a sweeter porridge.',
        ],
    },
    {
        name: 'veggie broth',
        category: Category.SOUP,
        ingredients: [],
        instructions: [],
    },
    {
        name: 'veggie soup',
        category: Category.SOUP,
        ingredients: [],
        instructions: [],
    },
    {
        name: 'chicken tortilla',
        category: Category.SOUP,
        ingredients: [],
        instructions: [],
    },
    {
        name: 'lentil soup',
        category: Category.SOUP,
        ingredients: [],
        instructions: [],
    },
];

export default Recipes;
