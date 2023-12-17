import {Food, Order} from "./types";

// eslint-disable-next-line
export let orders: Order[] = [];

// eslint-disable-next-line
export let foods: Food[] = [
    {
        id: '1',
        featured: true,
        name: 'The Classic',
        description: 'American cheese, pickles, lettuce, tomato, caramelized onions, Burger Shop dressing',
        price: 11.99,
        imageUrl: "https://i.imgur.com/TPSvp1R.png"
    },
    {
        id: '2',
        featured: false,
        name: 'BBQ Burger',
        description: 'Bacon, crispy onion ring American cheese and BBQ sauce',
        price: 6.99,
        imageUrl: "https://i.imgur.com/cbmXcQ7.png"
    },
    {
        id: '3',
        featured: true,
        name: 'The Buttermilk Fried Chicken',
        description: 'Buttermilk Ranch, White Cheddar, Bacon, Lettuce, and Tomato',
        price: 7.99,
        imageUrl: "https://i.imgur.com/0aDUwKE.png"
    },
    {
        id: '4',
        name: '(Vegan) The Chile Garden Burger',
        featured: true,
        description: 'Impossible Burger with roasted hatch chilies, candied bacon, white cheddar, and habañero aioli. Available in Vegetarian only.',
        price: 5.99,
        imageUrl: "https://i.imgur.com/8keIGEp.png"
    },
    {
        id: '5',
        name: 'Shop Fries',
        featured: false,
        description: 'Melted cheese, pickles, caramelized onions, Burger Shop dressing',
        price: 6.99,
        imageUrl: "https://i.imgur.com/STNsTAf.png"
    },
    {
        id: '6',
        name: 'Loaded Grilled Cheese',
        featured: false,
        description: 'Caramelized onions, tomatoes, pickles avocado, white cheddar and cheese sauce',
        price: 7.99,
        imageUrl: "https://i.imgur.com/RcIklMV.png"
    },
    {
        id: '7',
        name: '6 Piece Bone-In',
        featured: false,
        description: 'Six Crispy Battered Wings available in Tapatio Lime, Lemon Pepper, Garlic Parmesan, Spicy BBQ, or Nashville Hot',
        price: 10.49,
        imageUrl: 'https://i.imgur.com/hOMOMQA.png'
    },
    {
        id: '8',
        name: 'Caesar Salad',
        featured: false,
        description: 'Romaine, Baby Kale, Croutons, Parmesan Cheese, and Caesar Dressing',
        price: 7.99,
        imageUrl: 'https://i.imgur.com/NBig37L.png'
    },
    {
        id: '9',
        name: 'Coca-Cola',
        featured: false,
        description: 'Coke - Original taste',
        price: 3,
        imageUrl: 'https://i.imgur.com/2dB0gce.png'
    },
    {
        id: '10',
        name: 'Evian Water',
        featured: false,
        description: 'Evian Natural Spring Water',
        price: 3,
        imageUrl: 'https://i.imgur.com/euvBph8.png'
    },
    {
        id: '11',
        name: 'Banana White Chocolate Bread Pudding',
        featured: false,
        description: 'Banana White Chocolate Bread Pudding with a Bourbon Caramel Sauce',
        price: 7.99,
        imageUrl: 'https://i.imgur.com/UIbVoge.png'
    }
];