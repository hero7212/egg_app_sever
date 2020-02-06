'use strict';

module.exports = app => {
	const mongoose = app.mongoose
	const Schema = mongoose.Schema
	const productSchema = new Schema({
		name: {
			type: String,
			required: true
		},
		descriptions: {
			type: String
		},
		onSale: {
			type: Boolean,
			default: false
		},
		coverImg: {
			type: String
		},
		price: {
			type: Number,
			default: 0
		}	
	}, {
		timestamps: true
	})

	return mongoose.model('Product', productSchema)
}