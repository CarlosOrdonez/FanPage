var p=document.getElementById("elmo");
var o=document.getElementById("bird");
var q=document.getElementById("s");
var r=document.getElementById("count");
var s=document.getElementById("d");
var t=document.getElementById("abby");
var w=document.getElementById("sesa");
var x=document.getElementById("tootsie");
var z=document.getElementById("toot");
var y=document.getElementById("tootest");
var a=document.getElementById("tooter");
var b=document.getElementById("tootypop");
var a=document.getElementById("tot");
var k=document.getElementById("peepee");
var i1 = 0
var i2 = 0
var i3 = 0
var i4 = 0
var i5 = 0
var i6 = 0
var i7 = 0


if(i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7==1){
	p.style.opacity = "0.2"
}
//Parent 
p.addEventListener("click", changeBird);
	i2 = 1
	if(i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7==1){
		p.style.display = "none"
		o.style.display = "none"
		q.style.display = "none"
		r.style.display = "none"
		s.style.display = "none"
		t.style.display = "none"
		w.style.display = "none"
		k.style.display = "flex"
	}
	else{
		moveleft;
		moveback; 
	}
}
//Child
function changeBird(){
	p.src = "Images/elmo.gif";
	var audio = new Audio('sounds/elmo.mp3');
	audio.play();
}
//Child
function moveleft()
{
document.getElementById('Images/elmo.gif').style.position="absolute";
document.getElementById('Images/elmo.gif').style.left="0";
}
function moveback()
{
document.getElementById('Images/elmo.gif').style.position="absolute";
}

o.addEventListener("click", changeElmo);
function changeElmo(){
	o.src = "Images/bigbird.gif";
	var audio = new Audio('sounds/bigbird.m4a');
	audio.play();
	i1 = 1
	if(i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7==1){
		p.style.display = "none"
		o.style.display = "none"
		q.style.display = "none"
		r.style.display = "none"
		s.style.display = "none"
		t.style.display = "none"
		w.style.display = "none"
		k.style.display = "flex"
	}
}
q.addEventListener("click", changeS);
function changeS(){
	q.src = "Images/giphy.gif";
	var audio = new Audio('sounds/oscar.m4a');
	audio.play();
	i3 = 1
	if(i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7==1){
		p.style.display = "none"
		o.style.display = "none"
		q.style.display = "none"
		r.style.display = "none"
		s.style.display = "none"
		t.style.display = "none"
		w.style.display = "none"
		k.style.display = "flex"
	}
}
r.addEventListener("click", changeC);
function changeC(){
	r.src = "Images/count.gif";
	var audio = new Audio('sounds/count.m4a');
	audio.play();
	i4 = 1
	if(i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7==1){
		p.style.display = "none"
		o.style.display = "none"
		q.style.display = "none"
		r.style.display = "none"
		s.style.display = "none"
		t.style.display = "none"
		w.style.display = "none"
		k.style.display = "flex"
	}
}
s.addEventListener("click", changeO);
function changeO(){
	s.src = "Images/grover.gif";
	var audio = new Audio('sounds/grover.m4a');
	audio.play();
	i5 = 1
	if(i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7==1){
		p.style.display = "none"
		o.style.display = "none"
		q.style.display = "none"
		r.style.display = "none"
		s.style.display = "none"
		t.style.display = "none"
		w.style.display = "none"
		k.style.display = "flex"
		
	}
}
t.addEventListener("click", changeA);
function changeA(){
	t.src = "Images/abby.gif";
	var audio = new Audio('sounds/abby.m4a');
	audio.play();
	i6 = 1
	if(i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7==1){
		p.style.display = "none"
		o.style.display = "none"
		q.style.display = "none"
		r.style.display = "none"
		s.style.display = "none"
		t.style.display = "none"
		w.style.display = "none"
		k.style.display = "flex"
	}
}
w.addEventListener("click", changeSesa);
function changeSesa(){
	w.src = "Images/sesa.png";
	var audio = new Audio('');
	audio.play();
	i7 = 1
	if(i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7==1){
		p.style.display = "none"
		o.style.display = "none"
		q.style.display = "none"
		r.style.display = "none"
		s.style.display = "none"
		t.style.display = "none"
		w.style.display = "none"
		k.style.display = "flex"
	}
}
