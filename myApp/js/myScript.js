
    var rand = 0;

      function getRand(){
       //var rand = Math.floor((Math.random() * 10) + 0); // returns a random number between 1 and 10
       var rand = Math.floor((Math.random() * 2) + 0); // returns a random number between 1 and 2 for demo purposes
       alert(rand);
      }



    getRand(); // call the function


    //var rand = 2;
    console.log(rand);
    if (rand == 1) var g1 = {encodedPhrase: ep[0], secretPhrase: sp[0]};
    if (rand == 2) var g1 = {encodedPhrase: ep[1], secretPhrase: sp[0]};


    function mergeAlternating(ep, sp) {
       var mergedArray = [];

       for (var i = 0, len = Math.max(ep.length, sp.length); i < len; i++) {
           if (i < ep.length) {
               mergedArray.push(ep[i]);
           }
           if (i < sp.length) {
               mergedArray.push(sp[i]);
           }
       }
       console.log(mergedArray);
       return mergedArray;
    }




    var x = 0;
    var m = 40;
    
    var myFunc = function (result) {

      for (var i = 0; i < result.length; i += 1) {

        x += 1000;

        a = x + 1000;
        b = x + 2000;
        c = x + 0;
        d = x + 1000;
        ml = m + 5;


        
        document.getElementById('demo').innerHTML +=

        '<div id="message"'+'data-'+a+'="opacity:1;top:20%;margin-left:' +m+'px;" '+'data-'+b+'="opacity:0;top:-20%;">'+
        '<h1 id="encoded">'+result[i].charAt(0)+'</h1>'+
        '</div>'+

        '<div id="message"'+'data-'+c+'="opacity:0;top:100%;margin-left:' +ml+'px;" '+'data-'+d+'="opacity:1;top:20%;">'+
        '<h1 id="decoded">'+result[i].charAt(0)+'</h1>'+
        '</div>';

        console.log(result[i].charAt(0));


        m += 40;       

      }
    } // myFunc

    myFunc(result.toLocalUpperCase());
