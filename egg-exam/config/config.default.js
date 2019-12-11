/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1572307354125_3889';

    // add your middleware config here
    config.middleware = ['ithas'];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
        mysql: {
            client: {
                host: 'localhost',
                port: 3306,
                user: 'root',
                password: 'root',
                database: 'yk'
            },
            app: true,
            agent: false
        },
        security: {
            csrf: false
        }
    };

    return {
        ...config,
        ...userConfig,
    };
};