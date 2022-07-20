import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { Product } from "./Product";

export interface ProductService {
    getAll(): Product[] | Promise<Product[]>;
    updateProduct(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;
    create(dto: CreateProductDto): Product | Promise<Product>;
    findOne(id: Product['id']): Product | undefined | Promise<Product>;
}