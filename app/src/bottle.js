const Bottle = require('bottlejs');
const Sequelize = require('sequelize');

const sequelize = require('./services/sequelize');
const Issue = require('./models/Issue');
const Vote = require('./models/Vote');

const bottle = new Bottle();

bottle.factory('Sequelize', () => Sequelize);
bottle.service('sequelize', sequelize, 'Sequelize');
bottle.service('Issue', Issue, 'Sequelize', 'sequelize');
bottle.service('Vote', Vote);

module.exports = bottle;
