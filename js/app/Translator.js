define([],function(){
  var Translator = function(){

  	//alert('Translator');
  	this.zombifyRule();
};

Translator.prototype.zombifyRule = function(sentence){
	var rule1 = /r/g;
	var rule2 = /a/gi;
	var rule3 = /r/g;
	var rule4 = /e/gi;
	var rule5 = /i/gi;
	var rule6 = /o/gi;
	var rule7 = /u/gi;
	var rule8 = /r/gi;
	var rule9 = /r/g;
	var rule10 = /r/g;
	//alert(sentence);
	if(sentence===undefined)
	{
		return '';
	}
	else
	{
		var newstr = '';
		newstr = sentence.replace(rule1, 'rh');
		newstr = newstr.replace(rule2, 'hra');
		//newstr = newstr.replace(rule3, 'hra');
		newstr = newstr.replace(rule4, 'rr');
		newstr = newstr.replace(rule5, 'rrRr');
		newstr = newstr.replace(rule6, 'rrrRr');
		newstr = newstr.replace(rule7, 'rrrrRr');
		newstr = newstr.replace(rule8, 'RR');
		return newstr;
		//alert(newstr);
	}
	
};

return Translator;
});