'use strict';

const Controller = require('egg').Controller;

class ProductsController extends Controller {
  async index() {
		const { ctx } = this;
		const list = await ctx.service.products.list()
		ctx.body = {
			list
		}
		// ctx.body = '商品列表';
		// await ctx.render('products/index.ejs', {
		// 	title: '我是标题',
		// 	list: [
		// 		{
		// 			id: 1,
		// 			name: 'iPhone 11'
		// 		},
		// 		{
		// 			id: 2,
		// 			name: 'dell u270'
		// 		}
		// 	],
		// 	person: {
		// 		name: '沈剑心',
		// 		age: 17
		// 	},
		// 	htmlTags: `<div>
		// 		<h5>这是一个h5标签</h5>
		// 		<p>这是一段剪短的介绍</p>
		// 	</div>`
		// })
	}
	
	async new() {
		const { ctx } = this

		await ctx.service.products.save({
			name: 'Iphone11', 
			price: 5999, 
			descriptions: '新出的手机'
		})

		ctx.body = {msg: '保存成功'}
	}
}

module.exports = ProductsController;
