export const Category = {
    BREKKIE: 'BREKKIE',
    SOUP: 'SOUP',
    PASTA: 'PASTA',
    OTHER: 'OTHER',
};

const Recipes = [
    {
        name: 'porridge',
        id: 'porridge',
        category: Category.BREKKIE,
        ingredients: [
            '2/3 cup steel cut oats',
            '2/3 cup unsweetened almond milk',
            '2 tablespoons raw pepitas, roughly chopped',
            'pinch ground ginger',
            'pinch ground cinnamon',
            'pinch ground nutmeg',
            '2 tablespoons hemp seeds',
            '1 tablespoons almond butter',
            '2 teaspoons chia seeds',
            '1/2 teaspoon vanilla extract',
        ],
        instructions: [
            'Bring the oats and 2/3 cup water to a boil in a medium saucepan over medium high heat.',
            'Reduce the heat to low and stir in the almond milk, pepitas, ginger, cinnamon, and nutmeg.',
            'Cook, stirring occasionally, for about 10 minutes, until the oats are tender.',
            'Remove from heat and stir in the hemp seeds, almond butter, chia seeds, and vanilla.',
            'Taste, adding your choice of sweetener as desired for a sweeter porridge.',
        ],
    },
    {
        name: 'veggie broth',
        id: 'veggie-broth',
        category: Category.SOUP,
        ingredients: [
            '2 large piece dried kombu',
            '1 cup chopped carrots',
            '1 cup chopped celery',
            'couple dried mushrooms',
            '1 inch piece fresh ginger, sliced',
            '2 tablespoons nutritional yeast',
            '2 tablespoons olive oil',
            '3 tablespoons tamari',
            '1/2 teaspoon ground turmeric',
        ],
        instructions: [
            'Place in a large stockpot and simmer on low for at least 2 hours, stirring occasionally.',
            'Let cool, then strain through a fine-mesh strainer.',
        ],
    },
    {
        name: 'veggie soup',
        id: 'veggie-soup',
        category: Category.SOUP,
        ingredients: [],
        instructions: [],
    },
    {
        name: 'lentil soup',
        id: 'lentil-soup',
        category: Category.SOUP,
        ingredients: [],
        instructions: [],
    },
    {
        name: 'chicken tortilla',
        id: 'chicken-tortilla',
        category: Category.SOUP,
        ingredients: [],
        instructions: [],
    },
    {
        name: 'spinach sausage orzo',
        id: 'spinach-sausage-orzo',
        category: Category.SOUP,
        ingredients: [],
        instructions: [],
    },
    {
        name: 'mushroom risotto',
        id: 'mushroom-risotto',
        category: Category.PASTA,
        ingredients: [],
        instructions: [],
    },
    {
        name: 'stuffed cabbage rolls',
        id: 'stuffed-cabbage-rolls',
        category: Category.OTHER,
        ingredients: [],
        instructions: [],
    },
];

export default Recipes;
