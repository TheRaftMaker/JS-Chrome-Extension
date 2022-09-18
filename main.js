const checkId = window.setInterval(main, 200);

function main(){
const contents = $("#contents");
if(!contents[0]) return;

window.clearInterval(checkId);

const contentsParent = contents.parent();
contents.remove();

contentsParent.prepend("<h1>Get back to Work!</h1>")
// contentsParent.prepend("<img src='images/motivated.png'>");
const imgURL = chrome.runtime.getURL("images/motivated.png");
const htmlString = `<img src="${imgURL}">`;
contentsParent.prepend(htmlString)
}