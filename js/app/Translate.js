$(document).ready(function(){

  //$('#english').on("keyup", zombify);
  
  });

$('#btnZombie').click(function(){
  //alert('zombify');
    zombify();
    return false;
  });

  $('#btnUnZombie').click(function(){
    //alert('unzombify');
    unzombify();
    return false;
  });
  function zombify(){
    // 1. lower-case "r" at the end of words replaced with "rh".
    // 2. an "a" or "A" by itself will be replaced with "hra".
    // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
    //   ".!?", followed by a space, followed by a letter.)
    // 4. "e" or "E" is replaced by "rr"
    // 5. "i" or "I" is replaced by "rrRr"
    // 6. "o" or "O" is replaced by "rrrRr"
    // 7. "u" or "U" is replaced by "rrrrRr"
    // 8. "r" or "R' is replaced by "RR"
    $('#zombie').val($('#english').val());
  }

  function unzombify(){
    $('#english').val($('#zombie').val());

  }

  //$('#english').on("keyup", zombify);

//});
