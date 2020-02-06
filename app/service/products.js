'use strict';

const { Service } = require('egg')

class ProductsService extends Service {
	async list() {
		const data = await this.app.model.Product.find({})
		return data
	}

	/**
	 * 
	 * @param {*} data 
	 */

	async save(data) {
		const model = new this.app.model.Product(data)
		await model.save()
		return model
	}
}

module.exports = ProductsService