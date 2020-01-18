var DOMParser = require('../dom-parser').DOMParser;
var doc = new DOMParser().parseFromString(
    '<html><body>'+
    '<div id="a" class="ab">'+
        '<a class="b">abcd</a>'+
    '</div>'+
    '<div class="b a andEvenMore">'+
        '<a href="aa" id="b">'+
    '</div>'+
    '</body></html>'
    ,'text/html');

// console.log(doc.getElementsByAttribute('class', 'b'));
console.log(doc.getElementsByClassName('b', false))
//console.log(doc.querySelect('.div.aa       class#a a'))
//console.log(doc.findSelector('div.aa#in[ii="a"]'))
//console.log(doc.getElementsBySelector('a[href="aa"]#b'))
//console.log(doc.getElementsBySelector('div.b'))
// console.log(doc.querySelect('div.a a.b'))
console.log('end')
