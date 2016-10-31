var $ = require('jquery');

var accessor = {
  load(params) {
    const settings = {
      url: 'https://data.gov.uk/data/api/service/health/pharmacies/',
      method: 'GET',
      data: params
    };
    return $.ajax(settings);
  }
}

module.exports = accessor;
