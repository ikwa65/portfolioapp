var Product = require("../models/product")

module.exports = function(router){
  router.post('/products', function(req, res){
     var  product = new Product();
          product.productName         = req.body.productName;
          product.productImage        = req.body.productImage;
          product.productDescription  = req.body.productDescription;
          product.productPrice        = req.body.productPrice;
          product.productCategory     = req.body.productCategory;

    product.save(function(err, data){
      if(err){
        throw err;
      }
      res.json(data);
    });
  });

  router.get('/products', function(req, res){

    Product.find( {}, function(err, data){
      res.json(data);
    });
  });

    router.get('/products/:id', function(req, res){
      Product.findOne({_id: req.params.id}, function(err, data){
        var product = data;
            product.productName         = req.body.productName;
            product.productDescription  = req.body.productName;
            product.productPrice        = req.body.productPrice;
            product.productCategory     = req.body.productCategory;

        product.save(function(err, data){
            if(err){
                throw err;
            }
            res.json(data);
        });
      });
    });
};
