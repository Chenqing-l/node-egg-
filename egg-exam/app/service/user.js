const { Service } = require('egg');

class userService extends Service {
    async getList() {
        let { ctx } = this;
        let { page, pagesize } = ctx.query
        let result = await this.app.mysql.query(`select * from monthexam limit ${(page - 1) * pagesize},${pagesize}`);
        return result
    }
    async delItem() {
        let { ctx } = this;
        let { id } = ctx.query;
        let result = await this.app.mysql.query('delete from monthexam where id=?', [id]);
        return result
    }
    async addItem() {
        let { ctx } = this;
        let { create_time, title, auther, importent, reader, status } = ctx.request.body;
        let result = await this.app.mysql.query('insert into monthexam (create_time,title,auther,importent,reader,status) values (?,?,?,?,?,?)', [create_time, title, auther, importent, reader, status])
        return result
    }
    async updateItem() {
        let { ctx } = this;
        let { create_time, title, auther, importent, reader, status, id } = ctx.request.body;
        let result = await this.app.mysql.query('update monthexam set title=?,status=? where id=?', [title, status, id])
        return result
    }
}

module.exports = userService