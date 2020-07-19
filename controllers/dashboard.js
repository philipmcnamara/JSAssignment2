"use strict";

const logger = require("../utils/logger");

const homers = {
  name: 'Homer Simpson',
  stats: [
    {
      weight: '200',
      chest: '50',
      thigh: '40',
      upperArm: '30',
      waist: '20',
      hips: '10',
    },
    {
      weight: '190',
      chest: '50',
      thigh: '40',
      upperArm: '30',
      waist: '20',
      hips: '10',
    },
    {
      weight: '180',
      chest: '50',
      thigh: '40',
      upperArm: '30',
      waist: '20',
      hips: '10',
    },
  ],
};

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: 'Member 1 Dashboard',
      member: homers
    };
    response.render("dashboard", viewData);
  }
};

module.exports = dashboard;