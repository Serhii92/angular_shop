import { ProductCategories } from 'src/app/product/enums/product-categories';

export class ProductModel {
    constructor(
        public id: number = null,
        public name: string = '',
        public description: string = '',
        public price: number = 0,
        public isAvailable = false,
        public category?: ProductCategories,
        public quantity?: number
    ) {
        this.quantity = quantity || 1;
    }
}
