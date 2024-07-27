'use strict';

/**
 * baytuna service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::baytuna.baytuna');
