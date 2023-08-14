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

})
