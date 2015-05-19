// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

if (!global.Intl) {
  global.Intl = require('intl/Intl');
}

var ReactIntl = require('react-intl');
var IntlMixin = ReactIntl.IntlMixin;

module.exports = {
  mixins: [IntlMixin],

  getDefaultProps: function () {
    return {
      locales: 'en-US',
      messages: require('../messages/en-US')
    };
  }
};