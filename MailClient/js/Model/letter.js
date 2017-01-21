	function Letter(item) {
		for (key in item) {
			this[key] = item[key];		
		} 

	}
	
	Letter.prototype.moveFolder = function (folder) {
		this.folder = folder;
	}

	Letter.prototype.setAsRead = function () {
		this.read = true;
	}

	Letter.prototype.setAsSent = function () {
		this.sent = true;
	}

	Letter.prototype.markAsDraft = function () {
		this.folder = "draft";
	}
