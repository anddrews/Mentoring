var daoService = (function (){
	return {
		configService: configService,
		getLettersList: getLettersList

	};

	function configService (path) {
		this.path = path;
	};

	function getLettersList() {
		var that = this;
	  	return new Promise(function(resolve, reject) {
		    var xhr = new XMLHttpRequest();
		    xhr.open('GET', that.path, true);

		    xhr.onload = function(rrr) {
		      if (this.status == 200) {
		      	var result = JSON.parse(this.response); 
				setTimeout(function () {
					result.forEach(function (item,index) {
						result[index] = new Letter(item);
					});
		        	resolve(result);
				}, 500);
		      } else {
		        var error = new Error(this.statusText);
		        error.code = this.status;
		        reject(error);
		      }
		    };

		    xhr.onerror = function() {
		      reject(new Error("Network Error"));
		    };

		    xhr.send();
		});
	};	
})();