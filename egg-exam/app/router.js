'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    // 删除接口
    router.get('/api/del', controller.user.delItem);
    // 获取列表接口
    router.get('/api/getList', controller.user.getList);
    // 更新接口
    router.post('/api/update', controller.user.updateItem);
    // 添加接口
    router.post('/api/add', controller.user.addItem);
};