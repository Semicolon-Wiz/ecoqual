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

export const Product: ProductData = {
    houseKeeping: [
        {
            id: 1,
            name: 'Floor Cleaner',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi iure, possimus quia perferendis earum autem voluptatibus quas nam maiores soluta fuga distinctio sed eligendi, labore ratione dolorem fugiat id.',
            image: [
                '/images/category/house-keeping/floor-cleaning/img-1.webp',
                '/images/category/house-keeping/floor-cleaning/img-2.jpg',
                '/images/category/house-keeping/floor-cleaning/img-3.jpg'
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
        {
            id: 2,
            name: 'Toilet Cleaner',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi iure, possimus quia perferendis earum autem voluptatibus quas nam maiores soluta fuga distinctio sed eligendi, labore ratione dolorem fugiat id.',
            image: [
                '/images/category/house-keeping/toilet-cleaning/img-1.webp',
                '/images/category/house-keeping/toilet-cleaning/img-2.jpg',
                '/images/category/house-keeping/toilet-cleaning/img-3.jpg'
            ],
            ingredients: [
                'Hydrochloric Acid 10.5% w/v',
                'Hydroxyl Ethyl Oleylamine',
                'Cetyl Trimethyl Ammonium Chloride',
                'Methyl Salicylate',
                'Butylated Hydroxyl Toluene',
                'Acid Blue 80',
                'Acid Red 52',
                'Water'
            ],
            specifications: [
                'Conforming to IS 7983: Latest',
                'Valid Drug License',
                'Test report available on demand',
                'Color: Dark Blue',
                'Grade: 1',
                'Shelf Life: 24 months',
                'Packaging: 5 Ltr & 500 ml (PET/HDPE containers)',
                'Fragrance: Normal'
            ],
            features: [
                'Effectively removes tough yellow stains',
                'Strong cleaning action for hygienic toilets'
            ],
            slug: 'toilet-cleaner',
        },
        {
            id: 3,
            name: 'Glass Cleaner',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi iure, possimus quia perferendis earum autem voluptatibus quas nam maiores soluta fuga distinctio sed eligendi, labore ratione dolorem fugiat id.',
            image: [
                '/images/category/house-keeping/glass-cleaning/img-1.webp',
                '/images/category/house-keeping/glass-cleaning/img-2.jpg',
                '/images/category/house-keeping/glass-cleaning/img-3.jpg'
            ],
            ingredients: [
                'Aqua',
                'Ammonium Lauryl Sulfate',
                'Sodium Laureth Sulfate',
                'Glycol Stearate',
                'Perfume',
                'Cocamide MEA',
                'Glycerin',
                'Propylene Glycol',
                'Salicylic Acid',
                'Tetrasodium EDTA',
                'Citric Acid',
                'Sodium Chloride'
            ],
            specifications: [
                'Conforming to IS 8540: Latest',
                'Valid Drug License',
                'Test report available on demand',
                'Color: Blue',
                'Grade: 1',
                'Shelf Life: 24 months',
                'Packaging: 5 Ltr & 500 ml (PET/HDPE containers)',
                'Fragrance: Lemon'
            ],
            features: [
                'Effectively removes stains from glass and similar surfaces',
                'Easy-to-use spray formula',
                'Gives streak-free shine'
            ],
            slug: 'glass-cleaner',
        }
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