function solve(val){
	v=document.getElementById('z');
	v.value+=val;
}
function result(){
	v=document.getElementById('z').value;
	v1=eval(v);
	document.getElementById('z').value=v1;
}
function back(){
	v=document.getElementById('z').value;
	v1=v.slice(0,v.length-1);
	document.getElementById('z').value=v1;
}
function sqRoot(){
	v=document.getElementById('z').value;
	v1=Math.sqrt(v);
	document.getElementById('z').value=v1;
}
function demo(){
	v=document.getElementById('z').value;
	v1=1/v;
	document.getElementById('z').value=v1;
}
function re(){
	v=document.getElementById('z').value;
	v1=v.slice(0,0);
	document.getElementById('z').value=v1;
}
function stop(){
	v=document.getElementById('z');
	v.addEventListener("keydown",function(event){
		event.preventDefault();
	});
}
/*
solve() function will type as it is whatever button pressed expression written in Textarea
result() function will evaluate valid expression written in Textarea
stop() function is preventing any keyboard input 
demo() function is doing reciprocal 
sqRoot() function is used for doing square root
back() function is doing operation of backspace in a calculator
re() function clears all text from textarea
*/