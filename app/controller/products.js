'use strict';

const Controller = require('egg').Controller;

class ProductsController extends Controller {
  async index() {
		const { ctx } = this;
		const list = await ctx.service.products.list()
		await ctx.render('products/index.ejs', {
			list
		})
	}
	
	async new() {
		const { ctx } = this
		ctx.state.csrf = ctx.csrf
		await ctx.render('products/new.ejs')
	}

	async create() {
		const { ctx } = this
		await ctx.service.products.save({
			name: ctx.request.body.name,
			price: ctx.request.body.price
		})
		await ctx.redirect('/products')
	}
}

module.exports = ProductsController;
