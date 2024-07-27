'use strict';

/**
 * baytuna-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::baytuna-service.baytuna-service');
