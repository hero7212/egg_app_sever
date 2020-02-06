'use strict';

const Controller = require('egg').Controller;

class ProductsController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '商品列表';
  }
}

module.exports = ProductsController;
