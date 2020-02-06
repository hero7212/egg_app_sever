'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '你好，时间';
  }

  async new() {
    const { ctx } = this
    ctx.body = "这是new"
  }
}

module.exports = HomeController;
