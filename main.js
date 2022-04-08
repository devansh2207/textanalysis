// text analysis functions.. main app (server part) incomplete
// bare minimum api; html client will be used (for string post req.)
// considering known patterns
// Given titanic dataset, api yet to be implemented completely
// also, main.js to be completed alongwith the remaining functions..

function Numbers(st){
    var pattern = /[0-9]*\.?[0-9]+/g;
    nums =  st.match(pattern);
}
function Characters(st){
    var pattern = /[^a-zA-z0-9 \r\n]+/g;
    chars =  st.match(pattern);
}

function Search(st, pattern){
    var regex = pattern
        .map(word => "(?=.*\\b" + word + "\\b)")
        .join('');
    searchExp = new RegExp(regex, "gi");
}

function Escape(st) {
    st.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

function main(input, Callback){
    Callback(input);
}