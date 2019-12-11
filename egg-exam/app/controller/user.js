const { Controller } = require('egg');


class userController extends Controller {
    async getList() {
        let { ctx, service } = this;
        let result = await this.service.user.getList();
        if (result.length > 0) {
            ctx.body = {
                code: 0,
                msg: 'success',
                result
            }
        } else {
            ctx.body = {
                code: 1,
                msg: '查询失败',
                result
            }
        }
    }
    async delItem() {
        let { ctx, service } = this;
        let result = await service.user.delItem();
        if (result.affectedRows > 0) {
            ctx.body = {
                code: 0,
                msg: '删除成功'
            }
        } else {
            ctx.body = {
                code: 1,
                msg: '删除失败'
            }
        }
    }
    async addItem() {
        let { ctx, service } = this;
        let result = await service.user.addItem();
        let { auther, title, status, date, reader, importent } = ctx.request.body
        if (auther && title && status && date && reader && importent) {
            if (result.affectedRows > 0) {
                ctx.body = {
                    code: 0,
                    msg: '添加成功'
                }
            } else {
                ctx.body = {
                    code: 1,
                    msg: '添加失败'
                }
            }
        } else {
            ctx.body = {
                code: 1,
                msg: '缺少参数'
            }
        }

    }
    async updateItem() {
        let { ctx, service } = this;
        let result = await service.user.updateItem();
        if (result.affectedRows > 0) {
            ctx.body = {
                code: 0,
                msg: '更新成功'
            }
        } else {
            ctx.body = {
                code: 1,
                msg: '更新失败'
            }
        }
    }
}

module.exports = userController