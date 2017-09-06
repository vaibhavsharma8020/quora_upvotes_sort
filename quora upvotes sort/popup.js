
var e= document.getElementsByClassName("AnswerPagedList PagedList")[0].getElementsByClassName("pagedlist_item");


//getting upvotes
// converting to list
var temp=[].slice.call(e);

console.log(e.length);


//removing unnecessary elements.
for (var i=0;i<temp.length;i++){
if (temp[i].innerHTML.length==0){temp.splice(i,1);i--;continue;}
    if (temp[i].classList.length>1){temp.splice(i,1);i--;continue;}
}

console.log(temp);



//removing more unnecessary elements
var i=0;
for (;i<temp.length;i++){
var upvotes=temp[i].getElementsByClassName("answer_upvote")[0];
if (upvotes==undefined){temp.splice(i,1);i--;continue;}
}

console.log("hello");

//function to convert upvotes to real upvotes(like 2.5k to 2500)

upvotes=function (b){
var a=new String(b);
if (a[a.length-1]=="k"){return parseFloat(a.slice(0,-1),10)*1000;}
else return parseInt(a,10);
}

//sorting the list
temp.sort(function(a,b){
    try {var aa=upvotes(a.getElementsByClassName("answer_upvote")[0].querySelector(".count").textContent);}
    catch(err){console.log(upvotes("2.9k"));var aa=0;}
    try {var bb=upvotes(b.getElementsByClassName("answer_upvote")[0].querySelector(".count").textContent);}
    catch(err){var bb=0;}
    //var r="hey"+bb+aa;
    //console.log(r);
    return bb-aa;
}
);


console.log("sorted");

var i=0;
var t=0;
var l=temp.length;
while(i<l){
    if (i>e.length)break;
    if (e[i]==undefined || e[i].innerHTML.length==0 || e[i].getElementsByClassName("answer_upvote")[0]==undefined){console.log("hello");l+=1;i+=1;continue}
    else {e[i].parentNode.replaceChild(temp[t],e[i]);}
    i+=1;
    t+=1;
    
}


