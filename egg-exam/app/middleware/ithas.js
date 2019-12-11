module.exports = () => {
    return async(ctx, next) => {
        let whitePath = ['/api/getList'];
        try {
            if (whitePath.includes(ctx.request.path)) {
                await next()
            } else {
                let { eggidentity } = ctx.request.header;
                if (eggidentity === 'admin') {
                    await next()
                } else {
                    ctx.body = {
                            msg: '无权限',
                            status: 401,
                            code: 1
                        }
                        // await next()
                }
            }
        } catch (error) {
            ctx.body = {
                code: 11,
                msg: error.message
            }
        }
    }
}