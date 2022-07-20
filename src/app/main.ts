import { ProductHttpService } from './services/product-http.service';

(async () => {
    const productService = new ProductHttpService();

    productService.create({ 
        title: 'product test',
        price: 100,
        description: 'test',
        categoryId: 12,
        images: []
     });
    
    const products = await productService.getAll();

    const productId = products[0].id;

    await productService.updateProduct(productId, { price: 2000, title: 'test' });

    const firstProduct = await productService.findOne(productId);

    console.log('first product', firstProduct);
})();