var Text = "Calligraphy";
var NewText = String();
for(Character of Text){
  var Code = Character.charCodeAt(0);
  if(/[A-Z]/.test(Character)){
    Code += 0x1d48f;
    NewText += String.fromCodePoint("0x" + Code.toString(16));
  } else if(/[a-z]/.test(Character)){
    Code += 0x1d489;
    NewText += String.fromCodePoint("0x" + Code.toString(16));
  } else {
    NewText += Character;
  };
};
console.log(NewText);


/******/
var Combiners = Array.from({
    length: 0x6f
}, (...x) => String.fromCharCode(x[1] + 0x300));
var Text = String();
for (Character of "Glitchy") {
    Text += Character + Combiners[Math.round(Math.random() * 0x6f)]
};
console.log(Text);

/****/
