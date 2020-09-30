var index=0;
var slide=document.getElementById('slide');
var cWidth=slideImg[1].clientWidth;
var prev=document.getElementById('prev');
var next=document.getElementById('next');
//next function delaration
var nextf=()=>{
	if(index===5){
		slide.style.transform='translateX('+cWidth*0+'px)';
		index=0;
		document.body.style.backgroundImage="url("+slideImg[index].src+")"
        document.body.style.classList.add('background');
console.log(index)
	}
	else{
		index++;
		slide.style.transform='translateX('+cWidth*-index+'px)';
		document.body.style.backgroundImage="url("+slideImg[index].src+")";
		document.body.classList.add('background');
console.log(index)
 }
}
//next event handler
next.addEventListener('click',nextf);
//previous function declaration
var prevf=()=>{
	if(index===0){
		slide.style.transform='translateX('+cWidth*-5+'px)';
		index=5;
		document.body.style.backgroundImage="url("+slideImg[index].src+")";
		document.body.classList.add('background');
console.log(index)
	}
	else{
		index=index-1;
slide.style.transform='translateX('+cWidth*-index+'px)';
document.body.style.backgroundImage="url("+slideImg[index].src+")";
		document.body.classList.add('background');
console.log(index);
 }
}
//prevous event handler
prev.addEventListener('click',prevf)
//function to automatical slide #slide
function autoMove(){
  if(index===5){
		slide.style.transform='translateX('+cWidth*0+'px)';
		index=0;
		document.body.style.backgroundImage="url("+slideImg[index].src+")"
        document.body.style.classList.add('background');
console.log(index)
	}
	else{
		index++;
		slide.style.transform='translateX('+cWidth*-index+'px)';
		document.body.style.backgroundImage="url("+slideImg[index].src+")";
		document.body.classList.add('background');
console.log(index)
 }
}
//autmated slide of #slide
var automate=setInterval(autoMove,4000);
//stop automated slide on mouseover of slide
slide.addEventListener('mouseover',()=>
{
if(automate){
	console.log('hey')
return clearInterval(automate);
  }
  else{
  	return;
  } 
})
slide.addEventListener('mouseout',()=>automate=setInterval(autoMove,4000));
window.addEventListener('resize',()=>window.location.reload());
export{autoMove,automate,nextf,prevf}