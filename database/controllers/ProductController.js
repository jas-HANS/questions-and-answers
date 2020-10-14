const { Products } = require('../models/ProductModel.js');

const ProductController = {
    getAllQuestions: (product, callback) => {
        Products.find({product_id: product.product_id}, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data);
            }
        }).populate('results');
    }
}

module.exports = {
    ProductController
};