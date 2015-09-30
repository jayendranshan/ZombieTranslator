define(['Translator'], function(Translator){

  var translator;
  // Mocking sessionStorage
  // NOTE: mocking sessionStorage won't work in firefox, see this issue
  //    https://github.com/jasmine/jasmine/issues/299
  // beforeEach happens before each it() executes
  beforeEach(function () {
    var store = {};
    spyOn(sessionStorage, 'getItem').and.callFake(function (key) {
      // by default sessionStorage will return a string of an empty array, not undefined
      return store[key] || '[]';
    });
    spyOn(sessionStorage, 'setItem').and.callFake(function (key, value) {
      // concatenating to an empty string will store it as a string
      return store[key] = value + '';
    });
    spyOn(sessionStorage, 'clear').and.callFake(function () {
        store = {};
    });
    // just in case you're using firefox, this line will help mimic regular behavior
    sessionStorage.clear();

    // reset playlist
    translator = new Translator();

  });


  //var translator = new Translator();

  describe('Translator', function(){

    it('Valid sentence doesnt throw error', function(){
      expect(translator.zombifyRule('hi')).toBeDefined();
    });

    it('No input doesnt throw error', function(){
      expect(translator.zombifyRule()).toBe('');
    });

    describe('Rules', function(){
      //it('Rule1 executed', function(){
        //expect(translator.zombifyRule('r')).toBe('RRh');
      //});

      it('Rule2 executed', function(){
        expect(translator.zombifyRule('a')).toBe('hra');
      });

      it('Rule4 executed', function(){
        expect(translator.zombifyRule('e')).toBe('rr');
      });

      it('Rule5 executed', function(){
        expect(translator.zombifyRule('i')).toBe('rrRr');
      });

      it('Rule6 executed', function(){
        expect(translator.zombifyRule('o')).toBe('rrrRr');
      });

      it('Rule7 executed', function(){
        expect(translator.zombifyRule('u')).toBe('rrrrRr');
      });

      it('Rule8 executed', function(){
        expect(translator.zombifyRule('r')).toBe('RR');
      });

      /*it('Rule8 executed', function(){
        expect(translator.zombifyRule('r')).toBe('RRh');
      });

      it('Rule9 executed', function(){
        expect(translator.zombifyRule('r')).toBe('RRh');
      });

      it('Rule10 executed', function(){
        expect(translator.zombifyRule('r')).toBe('RRh');
      });*/
    });
    //it('Playlist has a song', function(){

      //expect(playlist.playlist.length).toBe(0);
    //});

    //describe('addSong', function(){

    	//it('Song has been added', function(){
    		//playlist.playlist.addSong();
    		//playlist.playlist.updatePlaylist();
      		//expect(playlist.playlist.length).toBe(0);
    //});
    
    }); 
});
 //}); 