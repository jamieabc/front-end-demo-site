'use strict';

var Fluxxor   = require('fluxxor'),
    Constants = require('./constants');

var data = [];

var store = Fluxxor.createStore({
  initialize : function() {
    this.bindActions(
      Constants.LOAD, this.onLoad,
      Constants.LOAD_SUCCESS, this.onLoadSucess,
      Constants.LOAD_FAIL, this.onLoadFail
    );
  },
  onLoad: function() {
    data = [];
  },
  onLoadSucess: function(res){
    data = res.data.result;
    this.emit('change');
  },
  onLoadFail: function(res) {
    datat = [];
    this.emit('change');
  },
  getState: function() {
    return data;
  }
});

module.exports = store;
