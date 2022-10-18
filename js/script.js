const sentence = prompt("Type a sentence")

cipher(sentence);
count(sentence);

window.alert(divChar + sentence + uppercase(lFVar));
//window.alert(count(sentence));
//window.alert();

//-------------------------------------------------------

function cipher(sentence) {
    const first = sentence.charAt(0);
    const last = sentence.charAt(sentence.length - 1);
    return lFVar = last + first;
}

function uppercase(lFVar) {
    return upperLf = lFVar.toUpperCase();
}

function count(sentence) {
    const sentenceLength = sentence.length;
    //console.log(sentenceLength);
    const divide = sentenceLength / 2;
    return divChar = sentence.charAt(divide);
}

/*function reverse(divChar, sentence, lFVar) {

}*/