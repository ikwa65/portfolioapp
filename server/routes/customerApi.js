var Customer = require("../models/customer")

module.exports = function(router){

  router.post('/customers', function(req, res){

    var customer = new Customer();
    customer.firstName = req.body.firstName;
    customer.lastName = req.body.lastName;
    customer.phone = req.body.phone;
    if(req.body.address){
      customer.address.street = req.body.address.street;
      customer.address.city = req.body.address.city;
      customer.address.county = req.body.address.county;
      customer.address.postal = req.body.address.postal;
    }

    customer.save(function(err, data){
      if(err){
        throw err;
      }
      res.json(data);
    });
  });

  router.get('/customers', function(req, res){
    Customer.find( {}, function(err, data){
      res.json(data);
    });
  });

  router.get('/customers/:id', function(req, res){
    Customer.findOne({_id: req.params.id}, function(err, data){
      if(err){
        throw err;
      }
      res.json(data);
    });
  });

  router.delete('/customers/:id', function(req, res){
    Customer.remove({_id: req.params.id}, function(err, data){
      res.json({result: err ? "error" + err : 'Deleted succesfully'});
    });
  });

  router.post('/customers/:id', function(req, res){
    Customer.findOne({_id: req.params.id}, function(err, data){

      var customer = data;
      customer.firstName = req.body.firstName;
      customer.lastName = req.body.lastName;
      customer.phone = req.body.phone;
      if(req.body.address){
        customer.address.street = req.body.address.street;
        customer.address.city = req.body.address.city;
        customer.address.county = req.body.address.county;
        customer.address.postal = req.body.address.postal;
      }

      customer.save(function(err, data){
        if(err){
          throw err;
        }
        res.json(data);
      });

    });
  });
};


