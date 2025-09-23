export interface ProductType {
    id: number;
    name: string;
    description?: string;
    image: string[];
    video?: string;
    specifications?: string[];
    material?: string;
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
            name: 'LDPE Apron',
            description: 'A lightweight, waterproof apron designed to keep staff safe from spills and stains during cleaning or medical duties. Easy to wear and dispose after use.',
            image: [
                '/images/category/house-keeping/p-1/img-1.JPG',
                '/images/category/house-keeping/p-1/img-2.JPG',
                '/images/category/house-keeping/p-1/img-3.JPG'
            ],
            material: 'LDPE (Low-Density Polyethylene)',
            ingredients: [
                'LDPE (Low-Density Polyethylene)'
            ],
            specifications: [
                'Made from durable LDPE material',
                'Disposable, single-use design',
                'Available in standard sizes',
                'Shelf life: 24 months',
                'Packaging: 100 pcs per pack'
            ],
            features: [
                'Protects against fluid and dirt exposure',
                'Comfortable and easy for long-hour usage'
            ],
            slug: 'ldpe-apron'
        },
        {
            id: 2,
            name: 'LDPE Bedsheet',
            description: 'Waterproof bedsheet offering reliable protection against spills and stains, ensuring patient comfort and hygiene.',
            image: [
                '/images/category/house-keeping/p-2/img-1.JPG',
                '/images/category/house-keeping/p-2/img-2.JPG',
            ],
            material: 'LDPE (Low-Density Polyethylene)',
            ingredients: [
                'LDPE (Low-Density Polyethylene)'
            ],
            specifications: [
                'Made from medical-grade LDPE',
                'Disposable and easy to spread',
                'Standard hospital bed size',
                'Shelf life: 24 months',
                'Packaging: 25 pcs per pack'
            ],
            features: [
                'Provides a clean and safe surface',
                'Reduces cross-contamination risks'
            ],
            slug: 'ldpe-bedsheet'
        },
        {
            id: 3,
            name: 'Non-Woven Bedsheet (Disposable)',
            description: 'Soft yet strong disposable bedsheet designed to improve patient comfort while keeping hospital beds hygienic.',
            image: [
                '/images/category/house-keeping/p-3/img-1.JPG',
                '/images/category/house-keeping/p-3/img-2.JPG',
                '/images/category/house-keeping/p-3/img-3.JPG',
                '/images/category/house-keeping/p-3/img-4.JPG',
            ],
            material: 'Non-woven polypropylene',
            ingredients: [
                'Non-woven polypropylene'
            ],
            specifications: [
                'Non-woven polypropylene fabric',
                'Lightweight and tear-resistant',
                'Fits standard hospital beds',
                'Shelf life: 18 months',
                'Packaging: 25 pcs per pack'
            ],
            features: [
                'Skin-friendly and breathable',
                'Hygienic single-use option'
            ],
            slug: 'non-woven-bedsheet-disposable'
        },
        {
            id: 4,
            name: 'Laminated Sterile Bedsheet (Disposable)',
            description: 'Sterile, laminated bedsheet ideal for operation theatres and critical care areas, offering extra protection against contamination.',
            image: [
                '/images/category/house-keeping/p-4/img-1.JPG',
                '/images/category/house-keeping/p-4/img-2.JPG',
                '/images/category/house-keeping/p-4/img-3.JPG',
            ],
            material: 'Non-woven fabric with laminated layer',
            ingredients: [
                'Non-woven fabric with laminated layer'
            ],
            specifications: [
                'Disposable, single-use sheet',
                'Laminated for added strength',
                'Sterilized and individually packed',
                'Shelf life: 24 months',
                'Packaging: 10 pcs per pack'
            ],
            features: [
                'Sterile and infection-resistant',
                'Provides waterproof protection'
            ],
            slug: 'laminated-sterile-bedsheet'
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