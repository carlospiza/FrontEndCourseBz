function searchWord(){
    var controlWord = this.value;
    var regex = new RegExp("(<[^>]*>)|("+ controlWord.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1") +')', 'ig');  
    let paragraphs = document.getElementsByTagName('article')[0].getElementsByTagName('p');

    for(let i=0; i < paragraphs.length; i++){
        if(paragraphs[i].innerHTML.search(regex)){
            let nHtml = paragraphs[i].innerHTML.replace(regex, function(a){
            return (a.charAt(0) == "<") ? a : `<mark>${a}</mark>`;
            });
            paragraphs[i].innerHTML = nHtml;
        }
    }
}

document.getElementById("idSearchText").addEventListener("onkeyup", searchWord);
