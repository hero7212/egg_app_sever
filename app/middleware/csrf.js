'use strict';
// 设置一中间件用于生成csrf token
module.exports = () => {
	return async function(ctx, next) {
		ctx.state.csrf = ctx.csrf
		await next()	
	}
}