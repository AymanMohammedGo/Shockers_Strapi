'use strict';

/**
 * deca-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::deca-service.deca-service');
