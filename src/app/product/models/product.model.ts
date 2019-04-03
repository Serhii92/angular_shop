import { ProductCategories } from '../enums/product-categories';

export class Product {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public isAvailable,
        public category: ProductCategories
    ) {
        name;
        description;
        price;
        isAvailable;
        category;
    }
}
