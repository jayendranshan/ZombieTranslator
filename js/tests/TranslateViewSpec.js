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

    it('Zombies knows only Zero', function(){
      expect(translator.zombifyRule('12345')).toBe('0000000000');
    });

     it('Zombies cant count', function(){
      expect(translator.zombifyRule('12345')).not.toBe('12345');
    });

    describe('Rules', function(){
      //it('Rule1 executed', function(){
        //expect(translator.zombifyRule('r')).toBe('RRh');
      //});
      it('Rule1 - replaces r at the end of the string', function(){
        expect(translator.zombifyRule1('ttssbcdr')).toEqual('ttssbcdrh');
      });

      it('Rule1 - returns a value', function(){
        expect(translator.zombifyRule1Test('mirror')).toEqual(true);
      });

      it('Rule1 - empty string returns false', function(){
        expect(translator.zombifyRule3Test()).not.toEqual(true);
      });

      it('Rule2 - a/A is hra', function(){
        expect(translator.zombifyRule('a')).toBe('hra');
      });

      it('Rule2 - a/A is not a/A', function(){
        expect(translator.zombifyRule('a')).not.toBe('a');
      });

      it('Rule3 - caplitalize the start of string as per the rule', function(){
        expect(translator.zombifyRule3('bcd. grh? qwe! yt')).toBe('bcd. Grh? Qwe! Yt');
      });

      it('Rule3 - returns a value', function(){
        expect(translator.zombifyRule3Test('aabcd. ')).toEqual(true);
      });

      it('Rule3 - empty string returns false', function(){
        expect(translator.zombifyRule3Test()).not.toEqual(true);
      });

      it('Rule4 - e/E is rr', function(){
        expect(translator.zombifyRule('e')).toBe('rr');
      });

       it('Rule4 - e/E is not e/E', function(){
        expect(translator.zombifyRule('e')).not.toBe('e');
      });

      it('Rule5 - i/I is rrRr', function(){
        expect(translator.zombifyRule('i')).toBe('rrRr');
      });

      it('Rule5 - i/I is not i/I', function(){
        expect(translator.zombifyRule('i')).not.toBe('i');
      });

      it('Rule6 - o/O is rrrRr', function(){
        expect(translator.zombifyRule('o')).toBe('rrrRr');
      });

      it('Rule6 - o/O is not o/O', function(){
        expect(translator.zombifyRule('o')).not.toBe('o');
      });

      it('Rule7 - u/U is rrrrRr', function(){
        expect(translator.zombifyRule('u')).toBe('rrrrRr');
      });

       it('Rule7 - u/U is not u/U', function(){
        expect(translator.zombifyRule('u')).not.toBe('u');
      });

      it('Rule8 - numbers to zero', function(){
        expect(translator.zombifyRule('123ae')).toBe('00000hrarr');
      });

      it('Rule8 - not numbers to numbers', function(){
        expect(translator.zombifyRule('123ae')).not.toBe('123ae');
      });

      it('Rule9 - s is sasa', function(){
        expect(translator.zombifyRule('s')).toBe('sasa');
      });

      it('Rule9 correct value doesnt throw error', function(){
        expect(translator.zombifyRule('s')).toBeDefined();
      });

      it('Rule10 - t is tartaa', function(){
        expect(translator.zombifyRule('t')).toBe('tartaa');
      });

      it('Rule10 - replaced string matches', function(){
        expect(translator.zombifyRule('ta')).toMatch('hra');
      });

    });
    
    }); 
});
 //}); 