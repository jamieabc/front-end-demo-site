import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router, { Route, hashHistoryNoQuery } from 'react-router';
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

import Main from './main';
var store = require('./store');
var actions = require('./actions');
var stores = {
  store: new store()
};

var flux = new Fluxxor.Flux(stores, actions);

flux.on('dispatch', function(type, payload) {
    if (console && console.log) {
        console.log('[Dispatch]', type, payload);
    }
});


ReactDOM.render(<Main flux={flux} />, document.body);
