const checkId = window.setInterval(main, 200);

function main(){
const contents = $("#contents");
if(!contents[0]) return;

window.clearInterval(checkId);

const contentsParent = contents.parent();
contents.remove();

// contentsParent.prepend("<img src='images/motivated.png'>");
const imgURL = chrome.runtime.getURL("images/motivated.png");
const htmlString = `<img class= "image" src="${imgURL}">`;
contentsParent.prepend(htmlString)
contentsParent.prepend("<h1>Sacrifice your happiness for the sake of someone else.</h1>").addClass("words")
}