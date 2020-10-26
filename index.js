function msg(){
 
  window.location="page1.html";
}
function msg2(){
  var message;
  var today = new Date();
var time = today.getHours() ;

if(time<=11){
  message="Good Morning!";
}
else if(time>11 && time<=16){
  message="Good Afternoon!"
}
else if(time>16){
  message="Good Evening!";
}

  var name=document.getElementById("demo").value;
  var par = document.getElementById("par");
  par.style.color="navy";
  par.style.fontSize="20px";
  par.innerHTML=`${message}`+`${name}`+"<br>"+"Here are the list of services which I can extend to you."+"<br>"+"<br><br>";
  //var demo1=document.getElementById("demo1");
  par.innerHTML+="<form id='form1'> <input onclick='msg3()' type='radio' value='A' id='c1' name='choice'>I can let you know your level of expertise in a particular subject.<br><br><input onclick='msg3()' type='radio' value='B' id='c2' name='choice'>I can let you know skill gap if you tell me your goal.</form>";
  par.innerHTML+="<br> Please select A or B";
  	
}
function msg3(){
  var a = document.getElementById("c1").checked;
  //var b=document.getElemnetById("c2").checked;
  if(a){
    window.location="page3.html";
  }
  else{
    window.location="page4.html";
  }
}

function msg5(){
window.location="page5.html"; 
}

function msg6(){


var br = document.createElement("br"); 
// Create a form synamically 
var form = document.createElement("form"); 
form.setAttribute("method", "post");
form.setAttribute("action", "page6.html"); 

var q1 = document.createTextNode("What is the value of the following expression:(2+3%5*7)"); 
// Create an input element for emailID 
var ID1 = document.createElement("input");
ID1.setAttribute("id", "id1");
ID1.setAttribute("type", "text"); 
ID1.setAttribute("name", "question1"); 

var q2 = document.createTextNode("Which natural number has no predecessor?"); 
// Create an input element for emailID 
var ID2 = document.createElement("input");
ID2.setAttribute("id", "id2"); 
ID2.setAttribute("type", "text"); 
ID2.setAttribute("name", "question2");  

var q3 = document.createTextNode("This number’s irrationality property was first discovered by Pythagoras. What is its value?"); 
// Create an input element for emailID 
var ID3 = document.createElement("input"); 
ID3.setAttribute("id", "id3"); 
ID3.setAttribute("type", "text"); 
ID3.setAttribute("name", "question3");  

// Create a submit button 
var s = document.createElement("input"); 
s.setAttribute("type", "submit"); 
s.setAttribute("value", "Submit");
s.setAttribute("onclick",'msg7();'); 
form.append(q1);
// Append the email_ID input to the form 
form.append(ID1); 
form.appendChild(br.cloneNode());  
form.appendChild(br.cloneNode());  

form.append(q2);

form.append(ID2); 
form.appendChild(br.cloneNode());  
form.appendChild(br.cloneNode()); 

form.append(q3);

form.append(ID3); 
form.appendChild(br.cloneNode());  
form.appendChild(br.cloneNode()); 

// Append the button to the form 
form.append(s);  
document.getElementsByTagName("body")[0].appendChild(form);	}

function msg7(){
var totalscore=0

let myObj = {"Question1":23,"Question2":1,"Question3":2};
q1v1=document.getElementById('id1').value;
q2v2=document.getElementById('id2').value;
q3v3=document.getElementById('id3').value;
if (q1v1==myObj.Question1)
{
  totalscore=totalscore+3
}
else
{

}

if (q2v2==myObj.Question2)
{
  
  totalscore=totalscore+3
}
else
{
  
}
if (q3v3==myObj.Question3)
{
  
  totalscore=totalscore+3
}
else
{
  
}

 localStorage.setItem("totalscore",totalscore);
}

function msg8(){
  var score
  score = localStorage.getItem("totalscore")
  var br = document.createElement("br"); 
// Create a form synamically 
  var form = document.createElement("form"); 
  var q0 = document.createTextNode("Your Total Math Quiz Score is       :    "); 
  var q1 = document.createTextNode(score); 
  form.appendChild(br.cloneNode());  
  form.appendChild(br.cloneNode()); 
  form.append(q0);
  form.append(q1);
  document.getElementsByTagName("body")[0].appendChild(form);	
  
}