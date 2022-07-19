import { Product } from '../../Interfaces/Product';

export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
    categoryId: Product['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
