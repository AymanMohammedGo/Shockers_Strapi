'use strict';

/**
 * shockers-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::shockers-service.shockers-service');
