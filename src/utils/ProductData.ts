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
            material: 'Ethyl Alcohol (IPA) 70–80% v/v (active ingredient for disinfection)',
            ingredients: [
                'Non-woven fabric with laminated layer'
            ],
            specifications: [
                'Quick-drying, non-sticky formula for frequent use',
                'Provides effective protection without soap and water',
                'Large 5 Ltr gallon pack suitable for bulk and institutional use',

            ],
            features: [
                'Sterile and infection-resistant'
            ],
            slug: 'eco-hand-sanitizer'
        },
        {
            id: 5,
            name: 'Hand Sanitizer (5 ltr Gallon)',
            description: 'Sterile, laminated bedsheet ideal for operation theatres and critical care areas, offering extra protection against contamination.',
            image: [
                '/images/category/house-keeping/p-5/product-01.webp',
            ],
            material: 'Hand sanitizer that effectively kills 99.9% of germs and bacteria.',
            ingredients: [
                'Hand sanitizer that effectively kills 99.9% of germs and bacteria.'
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
            name: 'OT Gown (Disposable)',
            description: 'A lightweight, disposable gown that provides full coverage and safety for surgeons and staff, while ensuring comfort during long procedures.',
            image: [
                '/images/category/surgical-products/p-1/img-1.JPG',
                '/images/category/surgical-products/p-1/img-2.JPG',
                '/images/category/surgical-products/p-1/img-3.JPG',
                '/images/category/surgical-products/p-1/img-4.JPG',
            ],
            material: 'SMS (Spunbond-Meltblown-Spunbond) non-woven fabric',
            ingredients: [
                'SMS (Spunbond-Meltblown-Spunbond) non-woven fabric'
            ],
            specifications: [
                'Disposable, single-use gown',
                'Available in sterile & non-sterile options',
                'Free size with tie-up/velcro closure',
                'Shelf life: 24 months',
                'Packaging: Individually packed'
            ],
            features: [
                'Barrier protection against fluids and contaminants',
                'Breathable, lightweight fabric for comfort'
            ],
            slug: 'ot-gown-disposable'
        },
        {
            id: 2,
            name: 'Medsimart Surgical Gloves',
            description: 'High-quality sterile gloves designed for precision and safety during surgical procedures, offering excellent grip and flexibility.',
            image: [
                '/images/category/surgical-products/p-2/img-1.JPG',
                '/images/category/surgical-products/p-2/img-2.JPG',
                '/images/category/surgical-products/p-2/img-3.JPG',
                '/images/category/surgical-products/p-2/img-4.JPG',
            ],
            material: 'Medical-grade natural latex or nitrile',
            ingredients: [
                'Medical-grade natural latex or nitrile'
            ],
            specifications: [
                'Sterile, single-use gloves',
                'Available in multiple sizes (6–8.5)',
                'Shelf life: 36 months',
                'Packaging: 50 pairs per box'
            ],
            features: [
                'Provides excellent tactile sensitivity',
                'Powder-free, reducing allergy risks'
            ],
            slug: 'medsimart-surgical-gloves'
        },
        {
            id: 3,
            name: 'Camera Cover',
            description: 'Protective cover designed to safeguard medical cameras and equipment during surgical procedures, ensuring sterile usage.',
            image: [
                '/images/category/surgical-products/p-3/img-1.jpeg',
                '/images/category/surgical-products/p-3/img-2.JPG',
                '/images/category/surgical-products/p-3/img-3.JPG',
                '/images/category/surgical-products/p-3/img-4.JPG',
            ],
            material: 'Medical-grade polyethylene',
            ingredients: [
                'Medical-grade polyethylene'
            ],
            specifications: [
                'Sterile and single-use',
                'Compatible with standard surgical cameras',
                'Shelf life: 24 months',
                'Packaging: Individually packed'
            ],
            features: [
                'Prevents contamination of surgical equipment',
                'Transparent for clear visibility'
            ],
            slug: 'camera-cover'
        },
        {
            id: 4,
            name: 'Probe Cover',
            description: 'Sterile cover that ensures infection control while using diagnostic or surgical probes, keeping patients safe and equipment hygienic.',
            image: [
                '/images/category/surgical-products/p-4/img-1.JPG',
                '/images/category/surgical-products/p-4/img-2.JPG',
                '/images/category/surgical-products/p-4/img-3.JPG',
                '/images/category/surgical-products/p-4/img-4.JPG',
            ],
            material: 'Medical-grade latex or polyethylene',
            ingredients: [
                'Medical-grade latex or polyethylene'
            ],
            specifications: [
                'Single-use, sterile covers',
                'Available in various probe sizes',
                'Shelf life: 24 months',
                'Packaging: Individually packed'
            ],
            features: [
                'Prevents cross-contamination',
                'Easy to apply and remove'
            ],
            slug: 'probe-cover'
        }

    ],
    institutional: [
        {
            id: 1,
            name: 'Scrub Suit / Kurta Pajama',
            description: 'Comfortable medical attire designed for doctors, nurses, and staff, offering hygiene and ease of movement during long working hours.',
            image: [
                '/images/category/institutional/p-1/img-1.jpg',
            ],
            ingredients: [
                'Cotton-polyester blend'
            ],
            specifications: [
                'Available in sizes S–XXL',
                'Machine washable, reusable',
                'Shelf life: 24 months',
                'Packaging: Individual set'
            ],
            features: [
                'Breathable and lightweight fabric',
                'Provides a professional appearance'
            ],
            slug: 'scrub-suit-kurta-pajama'
        },
        {
            id: 2,
            name: 'O.T. Gown (Green Casement)',
            description: 'Protective gown used in operation theatres, designed for complete coverage and sterilization safety.',
            image: [
                '/images/category/institutional/p-2/img-1.jpg',
            ],
            ingredients: [
                'Cotton-rich casement fabric'
            ],
            specifications: [
                'Standard green casement fabric',
                'Tie-back closure, free size',
                'Shelf life: 24 months',
                'Packaging: Individually packed'
            ],
            features: [
                'Resistant to frequent washes',
                'Reusable and long-lasting'
            ],
            slug: 'ot-gown-green-casement'
        },
        {
            id: 3,
            name: 'Cut Sheet',
            description: 'Protective sheet used on beds and examination tables to ensure hygiene and cleanliness.',
            image: [
                '/images/category/institutional/p-3/img-1.JPG',
                '/images/category/institutional/p-3/img-2.JPG',
                '/images/category/institutional/p-3/img-3.JPG',
                '/images/category/institutional/p-3/img-4.JPG'
            ],
            ingredients: [
                'Cotton/casement fabric'
            ],
            specifications: [
                'Available in multiple sizes',
                'Machine washable, reusable',
                'Shelf life: 24 months',
                'Packaging: 10 pcs per pack'
            ],
            features: [
                'Highly absorbent and durable',
                'Provides additional comfort layer'
            ],
            slug: 'cut-sheet'
        },
        {
            id: 4,
            name: 'Draw Sheet',
            description: 'Durable sheet designed for hospital beds, providing protection and hygiene with daily use.',
            image: [
                '/images/category/institutional/p-4/img-1.JPG',
                '/images/category/institutional/p-4/img-2.JPG',
                '/images/category/institutional/p-4/img-3.JPG',
                '/images/category/institutional/p-4/img-4.JPG'
            ],
            ingredients: [
                'Cotton or poly-cotton blend'
            ],
            specifications: [
                'Standard hospital sizes',
                'Reusable and long-lasting',
                'Shelf life: 24 months',
                'Packaging: 10 pcs per pack'
            ],
            features: [
                'Easy to spread and reposition',
                'Withstands frequent washing'
            ],
            slug: 'draw-sheet'
        }

    ],
    kits: [
        {
            id: 1,
            name: "HIV Kit",
            description: "A reliable kit designed to provide safe, sterile, and complete protection during HIV-related procedures.",
            image: [
                '/images/category/kits/p-1/img-1.JPG',
                '/images/category/kits/p-1/img-2.JPG',
                '/images/category/kits/p-1/img-3.JPG',
                '/images/category/kits/p-1/img-4.JPG',
                '/images/category/kits/p-1/img-5.JPG',
            ],
            specifications: [
                "Single-use, disposable kit",
                "Valid drug license compliant",
                "Shelf life: 36 months",
                "Packaging: Sterile pouch/box"
            ],
            contents: [
                "Gloves",
                "Mask",
                "Apron",
                "Gown",
                "Waste bag"
            ],
            features: [
                "Pre-packed sterile components",
                "Ensures patient and staff safety"
            ],
            slug: "hiv-kit"
        },
        {
            id: 2,
            name: "HIV Kit Premium",
            description: "An upgraded version with enhanced components for maximum safety in high-risk medical procedures.",
            image: [
                '/images/category/kits/p-2/img-1.JPG',
                '/images/category/kits/p-2/img-2.JPG',
                '/images/category/kits/p-2/img-3.JPG',
                '/images/category/kits/p-2/img-4.JPG',
                '/images/category/kits/p-2/img-5.JPG',
                '/images/category/kits/p-2/img-6.JPG',
            ],
            specifications: [
                "Sterile, disposable kit",
                "Shelf life: 36 months",
                "Packaging: Sterile pouch/box"
            ],
            contents: [
                "Premium gloves",
                "Apron",
                "Gown",
                "Mask",
                "Waste bag",
                "Shoe covers"
            ],
            features: [
                "Extra protective elements included",
                "Reduces infection risk effectively"
            ],
            slug: "hiv-kit-premium"
        },
        {
            id: 3,
            name: "Mother & Baby Kit",
            description: "A convenient kit designed to support postnatal care, providing essentials for both mother and newborn.",
            image: [
                '/images/category/kits/p-3/img-1.JPG',
                '/images/category/kits/p-3/img-2.JPG',
                '/images/category/kits/p-3/img-3.JPG',
                '/images/category/kits/p-3/img-4.JPG',
                '/images/category/kits/p-3/img-5.JPG',
            ],
            specifications: [
                "Pre-assembled, disposable kit",
                "Shelf life: 24 months",
                "Packaging: Sterile pouch"
            ],
            contents: [
                "Sanitary pads",
                "Baby wipes",
                "Towel",
                "Gloves",
                "Waste bag"
            ],
            features: [
                "Packed with essential care items",
                "Hygienic and safe for mother & child"
            ],
            slug: "mother-baby-kit"
        },
        {
            id: 4,
            name: "Dental Kit (Disposable)",
            description: "Single-use kit designed for dental procedures, ensuring hygiene and efficiency in clinics.",
            image: [
                '/images/category/kits/p-4/img-1.JPG',
                '/images/category/kits/p-4/img-2.JPG',
                '/images/category/kits/p-4/img-3.JPG',
                '/images/category/kits/p-4/img-4.JPG',
            ],
            specifications: [
                "Disposable, single-use kit",
                "Shelf life: 24 months",
                "Packaging: Sterile pouch"
            ],
            contents: [
                "Dental bib",
                "Suction tip",
                "Gloves",
                "Mask",
                "Cup"
            ],
            features: [
                "Reduces infection risks",
                "Compact and easy to use"
            ],
            slug: "dental-kit-disposable"
        }

    ]
};