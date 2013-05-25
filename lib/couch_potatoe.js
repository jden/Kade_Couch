var request = require('require')
,jsonreq = request.defaults({json:true})
;

//main factory object
function CouchPotatoe (options) {
	var self = this;
	if (typeof options === 'string') options = {url:options};
  	//check for trailing '/'
}

module.exports = function (url) {
  return new CouchPotatoe(url);
}