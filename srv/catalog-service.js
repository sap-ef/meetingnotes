const cds = require('@sap/cds');
const debug = require('debug')('srv:catalog-service');

module.exports = cds.service.impl(async function () {

    const {
        Sales
    } = this.entities;

    this.on('userInfo', req => {
        let results = {};
        results.user = cds.context.user.id;
        results.locale = cds.context.locale;
        results.scopes = {};
        results.scopes.identified = req.user.is('identified-user');
        results.scopes.authenticated = req.user.is('authenticated-user');
        results.scopes.Viewer = req.user.is('Viewer');
        results.scopes.Admin = req.user.is('Admin');
        return results;
    });


});