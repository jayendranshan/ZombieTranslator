define([],function(){
  var Translator = function(){

  	//alert('Translator');
  	this.zombifyRule();
};

Translator.prototype.zombifyRule = function(sentence){
	var rule2 = /a/gi;
	var rule3 = /^[a-z]/;
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
		var newstr='';
		newstr = this.zombifyRule1(sentence);
		alert(newstr);
		newstr = newstr.replace(rule8, 'RR');
		newstr = newstr.replace(rule2, 'hra');
		//newstr = newstr.replace(rule3, 'hra');
		newstr = newstr.replace(rule4, 'rr');
		newstr = newstr.replace(rule5, 'rrRr');
		newstr = newstr.replace(rule6, 'rrrRr');
		newstr = newstr.replace(rule7, 'rrrrRr');
		//newstr = newstr.replace(rule8, 'RR');
		return newstr;
		//alert(newstr);
	}
	
};

Translator.prototype.zombifyRule1 = function(str){
	var rule1 = /r/g;
	var newArray=[];
	var resultArray=[];
	var result='';
		newArray = str.split(' ');
		for (i = 0; i < newArray.length; i++) 
			{
				var tempStr = newArray[i];
    			var res = tempStr.slice(tempStr.length-1, tempStr.length);
    			if(res === 'r')
    			{
    				tempStr = tempStr.replace(rule1, 'rh');
    			}
    			resultArray.push(tempStr);
    			
    			
			}
			result=resultArray.join(' ');
			return result;
};

return Translator;
});