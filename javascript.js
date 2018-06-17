//creat a close button and append it to every list item
var myNodeList = document.getElementByTagName("LI");
var i;
for(i=0;i<myNodeList.length;i++){
    var span=document.createElement("SPAN");
    var text=document.createTextNode("\u00d7");
    span.className="close";
    span.appendChild(text);
    myNodeList[i].appendChild(span);
}