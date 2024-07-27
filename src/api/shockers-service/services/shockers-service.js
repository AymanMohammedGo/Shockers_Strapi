'use strict';

/**
 * shockers-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shockers-service.shockers-service');
