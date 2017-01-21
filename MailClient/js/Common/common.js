(function(){
	daoService.configService('/data/letters.json');	
	daoService.getLettersList().then(function(lettersList){domManipulate.drawLetters(lettersList)});
})();

