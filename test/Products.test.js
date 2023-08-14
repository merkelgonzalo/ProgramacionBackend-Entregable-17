import mongoose from 'mongoose';
import ProductManager from '../src/dao/managers/ProductManager.js';
import Assert from 'assert';
import { config } from '../src/config/config.js';

const MONGO = config.mongo.url;

const assert = Assert.strict;

describe('Testing Products Manager', () => {
    
    before(async function() {
        await mongoose.connect(MONGO);
        this.productManager = new ProductManager();
    });

    beforeEach(function(){
        this.timeout(7000)
    });

    it("The GET method of Products must be obtain all products in array format", async function(){
        const result = await this.productManager.get();
        const docs = await result.docs;
        assert.strictEqual(Array.isArray(docs),true);
    });

    it("The POST method of Products must be create a product in Database", async function(){
        let mockProduct = {
            title: "Create Product Test",
            price: 123456,
            category: "Testing"
        }
        const result = await this.productManager.post(mockProduct);
        assert.ok(result._id);
    });

})
