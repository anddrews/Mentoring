var domManipulate = (function (){

	return {
		drawLetters: drawLetters,
		createLetterBlock: createLetterBlock,
		showFullLetter: showFullLetter,
		redrawLetters: redrawLetters,
		clearFolder: clearFolder,
		drawFolder: drawFolder,
		getLetterById: getLetterById
	};

	function createLetterBlock (letter) {
		var isRead = letter.read ? 'checked':'';
		var letterTemplate = '<p class="from"> From: ' + letter.from + '</p>' +
		                     '<span class="subject"><span> Subject: ' + letter.subject + '</span> <label for="is-read-' + letter.id + '"> is read <input id="is-read-' + letter.id + '" type="checkbox" name="is-read" ' + isRead + ' "/></label></span>';

		var folder = document.getElementById(letter.folder);
		var letterDom = document.createElement('div');
		letterDom.classList.add("letter");
		letterDom.id = 'letterId-' + letter.id;

		letterDom.innerHTML = letterTemplate;
		folder.appendChild(letterDom);
		letterDom.addEventListener('click', showFullLetter);
	}

	function showFullLetter (event) {
		var letterId = event.target.id.split('-')[1];
		var from = document.getElementById('full-info-from');
		var subj = document.getElementById('full-info-subj');
		var body = document.getElementById('full-info-body');
		var letter = getLetterById.call(domManipulate, letterId);

		from.innerText = subj.innerText = body.innerText = '';
		from.innerText = letter.from;
		subj.innerText = letter.subject;
		body.innerText = letter.body;

		console.log(letterId);

	}

	function drawLetters (lettersList) {
		this.letters = lettersList;	
		for (var i = 0; i< this.letters.length; i++) {
			this.createLetterBlock(this.letters[i]);
		}
		this.clearFolder('inbox');
		this.drawFolder('inbox');
	}

	function redrawLetters () {
		var folders = document.getElementById('letters').children;
		for (var i = 0; i < folders.length; i++) {
			this.clearFolder(folders[i]);
			this.drawFolder(folders[i]);
		}
	}

	function clearFolder(folderId) {
		var folder = document.getElementById(folderId);
		var folderChildren = folder.children;
		var childCount = folderChildren.length;
		for (var i = 1; i < childCount; i++)  {
			folder.removeChild(folderChildren[1]);
		}
	}

	function drawFolder(folderId) {
		var that = this;
		this.letters.forEach(function(item){
			if(item.folder == folderId) {
				that.createLetterBlock(item);
			}
		})
	}

	function getLetterById (letterId) {
		return this.letters.filter(function (item){
			return item.id == letterId;
		})[0];
	}	

})();