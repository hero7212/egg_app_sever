'use strict';

const Controller = require('egg').Controller;

class ProductsController extends Controller {
  async index() {
    const { ctx } = this;
		// ctx.body = '商品列表';
		await ctx.render('products/index.ejs', {
			title: '我是标题',
			list: [{
				id: 1,
				name: 'iPhone 11'
			},{
				id: 2,
				name: 'dell u270'
			}],
			person: {
				name: '沈剑心',
				age: 17
			}
		})
  }
}

module.exports = ProductsController;
