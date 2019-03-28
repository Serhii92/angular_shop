import { ProductCategories } from '../enums/product-categories';

export class Product {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public isAvailable,
        public category: ProductCategories
    ) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.isAvailable = isAvailable;
        this.category = category;
    }
}
