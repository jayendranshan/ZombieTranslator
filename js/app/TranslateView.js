define(['jquery','Translator'],function($,Translator){
var TranslateView = function(){
  // initialize
  //this.translator = new Translator();
  this.zombify();
  //alert('TranslateView');
  
};

TranslateView.prototype.zombify = function() {
	//this.translator = new Translator();
	$('#english').on('keyup', function(){
		this.translator = new Translator();
  	var that = this;
  	var rule1 = /r/g;
		//alert($('#english').val());
		var currentString = $('#english').val();
		//var newstr = currentString.replace(rule1, 'rh');
		//alert(currentString);
		this.translator.zombifyRule(currentString);
		var newText =  that.translator.zombifyRule(currentString);
		//alert(newText);
		$('#zombie').val(newText);
		return false;
  });
 };

return TranslateView;
 });