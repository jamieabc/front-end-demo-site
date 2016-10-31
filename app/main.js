var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Main = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin('store')],

  componentDidMount: function() {
    this.props.flux.actions.load();
  },

  getStateFromFlux: function(state) {
    const flux = this.getFlux();
    return {
      data: flux.store("store").getState(),
    };
  },

  render: function() {
    let component = [];
    this.state.data.forEach(item => {
      component.push(
        <div>
          <span>{item.name}</span>
          <span>{`${item.address1} ${item.address2} ${item.address3} ${item.city} ${item.postcode}`}</span>
        </div>
      );
    });

    return (
      <div>
        {this.state.data.map(item => {
          return (
            <div key={item.name}>
              <span>{item.name}</span>
              <span>{`${item.address1} ${item.address2} ${item.address3} ${item.city} ${item.postcode}`}</span>
            </div>);
        })}
      </div>
    );
  }
});

module.exports = Main;
