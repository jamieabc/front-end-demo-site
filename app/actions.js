'use strict';

var Constants = require('./constants');
var Accessor = require('./accessor');

var actions = {
  load: function() {
    this.dispatch(Constants.LOAD);
    return Accessor.load.call(this, {
      partial_postcode: 'TW8'
    }).then(
      function(res) {
        this.dispatch(Constants.LOAD_SUCCESS, { data: res });
      }.bind(this),
      function(err) {
        console.log('err: ', err);
      }.bind(this)
    )
  }
};

module.exports = actions;
