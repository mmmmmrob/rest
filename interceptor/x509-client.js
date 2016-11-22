'use strict';

const interceptor = require('rest/interceptor');

/**
 * Authenticates the request using x.509 certificates
 *
 * @param {Client} [client] client to wrap
 * @param {string} config.key the private key
 * @param {string} config.cert the signed certificate
 *
 * @returns {Client}
 */
module.exports = interceptor({
	request: function handleRequest(request, config) {

    request.mixin = { cert: config.cert, key: config.key };

		return request;
	}
});
