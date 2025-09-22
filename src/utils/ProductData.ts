export interface ProductType {
    id: number;
    name: string;
    description?: string;
    image: string[];
    video?: string;
    specifications?: string[];
    ingredients?: string[];
    features?: string[];
    contents?: string[];
    slug: string;
}
interface ProductData {
    houseKeeping: ProductType[];
    surgical: ProductType[];
    institutional: ProductType[];
    kits: ProductType[];
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
            name: 'Bouffant Cap',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi iure, possimus quia perferendis earum autem voluptatibus quas nam maiores soluta fuga distinctio sed eligendi, labore ratione dolorem fugiat id.',
            image: [
                '/images/category/house-keeping/floor-cleaning/img-1.webp',
                '/images/category/house-keeping/floor-cleaning/img-2.jpg',
                '/images/category/house-keeping/floor-cleaning/img-3.jpg'
            ],
            specifications: [
                'Non-woven breathable fabric',
                'GSM: 30 to 50 GSM',
                'Color: Blue, Green',
                'Ultrasonically heat-sealed joints',
                'Pack Size: 100 pieces',
                'Test report available on demand',
                'Certificate on demand'
            ],
            features: [
                'Comfortable and lightweight',
                'Prevents hair contamination in clean areas',
                'Disposable and hygienic',
                'Ideal for hospitals, labs, and food industries'
            ],
            slug: 'bouffant-cap',
        },
        {
            id: 2,
            name: "Surgeon's Cap",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi iure, possimus quia perferendis earum autem voluptatibus quas nam maiores soluta fuga distinctio sed eligendi, labore ratione dolorem fugiat id.',
            image: [
                '/images/category/house-keeping/floor-cleaning/img-1.webp',
                '/images/category/house-keeping/floor-cleaning/img-2.jpg',
                '/images/category/house-keeping/floor-cleaning/img-3.jpg'
            ],
            specifications: [
                "Non-woven breathable fabric",
                "GSM: 30 to 50 GSM",
                "Size: Normal & Large",
                "Color: Blue, Green",
                "Ultrasonically heat-sealed joints",
                "Pack Size: 100 pieces",
                "Test report available on demand",
                "Certificate on demand"
            ],
            features: [
                "Provides secure hair coverage during surgery",
                "Comfortable fit for long hours",
                "Disposable and hygienic",
                "Suitable for medical and clinical use"
            ],
            slug: "surgeons-cap"
        },
        {
            id: 3,
            name: "Wraparound Gown - Disposable",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi iure, possimus quia perferendis earum autem voluptatibus quas nam maiores soluta fuga distinctio sed eligendi, labore ratione dolorem fugiat id.",
            image: [
                "/images/category/house-keeping/floor-cleaning/img-1.webp",
                "/images/category/house-keeping/floor-cleaning/img-2.jpg",
                "/images/category/house-keeping/floor-cleaning/img-3.jpg"
            ],
            specifications: [
                "AAMI Protection Level: 3",
                "Material: Non-Woven SMMMS Fabric",
                "Sterilization: ETO Sterilized",
                "GSM: >50",
                "Color: Blue",
                "Sealing: Ultrasonically heat-sealed on sleeves & joints",
                "Pack Size: Single piece",
                "Certificates: Available on demand",
                "Test Report: Available on demand"
            ],
            slug: "wraparound-gown-disposable"
        }
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
            name: "Viral Barrier Kit / HIV Kit Premium",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi iure, possimus quia perferendis earum autem voluptatibus quas nam maiores soluta fuga distinctio sed eligendi, labore ratione dolorem fugiat id.",
            image: [
                "/images/category/house-keeping/floor-cleaning/img-1.webp",
                "/images/category/house-keeping/floor-cleaning/img-2.jpg",
                "/images/category/house-keeping/floor-cleaning/img-3.jpg"
            ],
            specifications: [
                "Premium protection kit designed for infection control",
                "Conforms to latest healthcare and hygiene standards",
                "Single-use, disposable components",
                "Sterile and safe packaging"
            ],
            contents: [
                "Wraparound Gown – 1 piece",
                "Bouffant Cap – 1 piece",
                "Spunlace Non-Woven Shoe Cover – 1 pair",
                "Sterile Latex Surgical Gloves – 1 pair",
                "Goggles – 1 piece",
                "3-Ply Surgical Mask – 1 piece",
                "Hand Towel – 1 piece",
                "Draw Sheet – 1 piece",
                "Trolley Cover – 1 piece",
                "Diathermy Bag – 1 piece",
                "Disposable Bag – 1 piece",
                "Plain Sheet (Large) – 1 piece"
            ],
            features: [
                "Complete body protection barrier kit",
                "Ideal for handling high-risk viral exposure cases (HIV, etc.)",
                "Provides safety and hygiene for healthcare professionals",
                "Lightweight, comfortable, and easy to use"
            ],
            slug: "viral-barrier-kit-premium"
        },
    ]
};