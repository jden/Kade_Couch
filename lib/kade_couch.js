var request = require('request');
var jsonreq = request.defaults({json:true});

//main factory object
function KadeCouch (options) {
	var self = this;
	if (typeof options === 'string') options = {url:options};
	if(options.url[options.url.length - 1] !== '/') options.url = options.url + '/';
	for(var p in options){
		self[p] = options[p];
	}
};

KadeCouch.prototype.getDocument = function(id, cb){
	request(this.url + id, function(err, response, body){
		if(err) throw err;
		if(response.statusCode === 200){			
			if(cb)cb(undefined, body);
		} else{
			if(cb)cb(response);
		}
	});
};

KadeCouch.prototype.createDocument = function(json, cb){
	var options = {
		uri: this.url,
		method: 'POST',
		json: json
	};
	request(options, function(err, response, body){
		if(err) throw err;
		if(response.statusCode === 201){			
			if(cb)cb(undefined, body);
		} else{
			if(cb)cb(response);
		}
	});
};

KadeCouch.prototype.createNamedDocument = function(doc_name, json, cb){
	var options = {
		uri: this.url + doc_name,
		method: 'PUT',
		json: json
	};
	request(options, function(err, response, body){
		if(err) throw err;
		if(response.statusCode === 201){			
			if(cb)cb(undefined, body);
		} else{
			if(cb)cb(response);
		}
	});
};

module.exports = function (url) {
	return new KadeCouch(url);
}