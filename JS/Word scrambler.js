// v1 ////////////////////////////////////////////////////////////////////////////////

/* js*/

function shuffle(str) {
  var str = document.getElementById('txt');
  var a = str.innerHTML;
  var newArr = [];
  var neww = '';
  var text = a.replace(/[\r\n]/g, '').split(' ');
  
  text.map(function(v) {
    v.split('').map(function() {
      var hash = Math.floor(Math.random() * v.length);
      neww += v[hash];
      v = v.replace(v.charAt(hash), '');
    });
    newArr.push(neww);
    neww = '';
  });
  var x = newArr.map(v => v.split('').join(' ')).join('\n');
  str.value = x.split('').map(v => v.toUpperCase()).join('');
}

/*HTML*/
<textarea cols='60' rows='8' id="txt">testing &#13;&#10;scramble &#13;&#10;words</textarea>
<button onclick='shuffle()'>Shuffle</button>

// v2 ////////////////////////////////////////////////////////////////////////////////

function scramble(a){a=a.split("");for(var b=a.length-1;0<b;b--){var c=Math.floor(Math.random()*(b+1));d=a[b];a[b]=a[c];a[c]=d}return a.join("")}

function scrambleText(){
var textArea = document.getElementById('TEXTAREA_ID');
var lines = textArea.value.split('\n');
for(var i = 0;i < lines.length;i++){
    lines[i] = scramble(lines[i]).toUpperCase().split('').join(' ');
}
textArea.value = lines.join('\n');
}
