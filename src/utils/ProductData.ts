interface Product {
    id: number;
    name: string;
    description?: string;
    image: string[];
    video?: string;
    specifications?: string[];
    ingredients?: string[];
    features?: string[];
    slug: string;
}
interface ProductData {
    houseKeeping: Product[];
    surgical: Product[];
    institutional: Product[];
    kits: Product[];
}

const ProductData: ProductData = {
    houseKeeping: [
        {
            id: 1,
            name: 'Floor Cleaner',
            description: 'House Keeping Products',
            image: [
                '/images/house-keeping.jpg',
                '/images/house-keeping.jpg'
            ],
            ingredients: [
                'Bezalkonium Chloride Solution (80%)',
                'Deionised Water',
                'Lauryl Alcohol Ethoxylate',
                'Coco Amido Propyl Betaine',
                'Sodium Bicarbonate',
                'Perfume',
                'Tetrasodium Ethylene Diamine Tetra Acetic Acid',
                'Butylated Hydroxyl Toluene',
                'Alizann'
            ],
            specifications: [
                'Conforming to latest Indian standards',
                'Valid Drug License',
                'Test report available on demand',
                'Color: Pink',
                'Grade: 1',
                'Shelf Life: 24 months',
                'Packaging: 5 Ltr (PET/HDPE containers)',
                'Fragrance: Rose'
            ],
            features: [
                'Effective in removing hard stains',
                'To be diluted in water before use'
            ],
            slug: 'floor-cleaner',
        },
    ],
    surgical: [
        {
            id: 1,
            name: 'Surgical Products',
            description: 'Surgical Products',
            image: ['/images/surgical.jpg'],
            slug: 'surgical-products',
        },
    ],
    institutional: [
        {
            id: 1,
            name: 'Institutional Products',
            description: 'Institutional Products',
            image: ['/images/institutional.jpg'],
            slug: 'institutional-products',
        },
    ],
    kits: [
        {
            id: 1,
            name: 'Kits',
            description: 'Kits',
            image: ['/images/kits.jpg'],
            slug: 'kits',
        },
    ],
};