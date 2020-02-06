'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/new', controller.home.new);
  router.get('/products', controller.products.index);
  router.get('/products/new', controller.products.new);
  router.post('/products/create', controller.products.create);
};
