var imgObj1 = null;
var imgObj2 = null;
var imgObj3 = null;
var imgObj4 = null;
var btnObj1 = null;
var btnObj2 = null;
var btnObj3 = null;
var btnObj4 = null;
var sbtnObj1 = null;
var sbtnObj2 = null;
var sbtnObj3 = null;
var sbtnObj4 = null;
var sldshwObj = null;
var current;
var btnArray = new Array();
var count = 0;
var animate;

function init(){
	imgObj1 = document.getElementById('p1');
	imgObj2 = document.getElementById('p2');
	imgObj3 = document.getElementById('p3');
	imgObj4 = document.getElementById('p4');
	btnObj1 = document.getElementById('b1');
	btnObj2 = document.getElementById('b2');
	btnObj3 = document.getElementById('b3');
	btnObj4 = document.getElementById('b4');
	sbtnObj1 = document.getElementById('sb1');
	sbtnObj2 = document.getElementById('sb2');
	sbtnObj3 = document.getElementById('sb3');
	sbtnObj4 = document.getElementById('sb4');
	sldshwObj = document.getElementById('slideshow');

	btnArray.push(btnObj1);
	btnArray.push(btnObj2);
	btnArray.push(btnObj3);
	btnArray.push(btnObj4);

	imgObj1.style.position = 'relative';
	imgObj2.style.position = 'relative';
	imgObj3.style.position = 'relative';
	imgObj4.style.position = 'relative';
	imgObj1.style.right = '0px';
	imgObj1.style.left = '0px';
	imgObj2.style.left = '1600px';
	imgObj3.style.left = '3200px';
	imgObj4.style.left = '4800px';
	sldshwObj.focus();
	begin();
}

function slideLeft(){
	if(imgObj2.style.left == '800px')
	{
		sbtnObj2.style.backgroundColor = 'black';
		sbtnObj1.style.backgroundColor = 'transparent';
		sbtnObj3.style.backgroundColor = 'transparent';
		sbtnObj4.style.backgroundColor = 'transparent';
	}
	else if(imgObj3.style.left == '800px')
	{
		sbtnObj3.style.backgroundColor = 'black';
		sbtnObj2.style.backgroundColor = 'transparent';
		sbtnObj1.style.backgroundColor = 'transparent';
		sbtnObj4.style.backgroundColor = 'transparent';
	}
	else if(imgObj4.style.left == '800px')
	{
		sbtnObj4.style.backgroundColor = 'black';
		sbtnObj2.style.backgroundColor = 'transparent';
		sbtnObj3.style.backgroundColor = 'transparent';
		sbtnObj1.style.backgroundColor = 'transparent';
	}
	else if(imgObj1.style.left == '800px')
	{
		sbtnObj1.style.backgroundColor = 'black';
		sbtnObj2.style.backgroundColor = 'transparent';
		sbtnObj3.style.backgroundColor = 'transparent';
		sbtnObj4.style.backgroundColor = 'transparent';
	}

	imgObj1.style.right = parseInt(imgObj1.style.right) + 10 + 'px';
	imgObj1.style.left = parseInt(imgObj1.style.left) - 10 + 'px';
	imgObj2.style.left = parseInt(imgObj2.style.left) - 10 + 'px';
	imgObj3.style.left = parseInt(imgObj3.style.left) - 10 + 'px';
	imgObj4.style.left = parseInt(imgObj4.style.left) - 10 + 'px';
	if(imgObj1.style.left == '-1600px')
	{
		imgObj1.style.left = '4800px';
		clearTimeout(animate);
		animate = setTimeout(wait, 5000);
	}else if(imgObj2.style.left == '-1600px')
	{
		imgObj2.style.left = '4800px';
		clearTimeout(animate);
		animate = setTimeout(wait, 5000);
	}else if(imgObj3.style.left == '-1600px')
	{
		imgObj3.style.left = '4800px';
		clearTimeout(animate);
		animate = setTimeout(wait, 5000);
	}else if(imgObj4.style.left == '-1600px')
	{
		imgObj4.style.left = '4800px';
		clearTimeout(animate);
		animate = setTimeout(wait, 5000);
	}
	else
		animate = setTimeout(slideLeft, 1);
}

function changeSlide(){
	if(document.activeElement == sbtnObj1)
	{
		imgObj1.style.left = '0px';
		imgObj2.style.left = '1600px';
		imgObj3.style.left = '3200px';
		imgObj4.style.left = '4800px';
		sbtnObj1.style.backgroundColor = 'black';
		sbtnObj2.style.backgroundColor = 'transparent';
		sbtnObj3.style.backgroundColor = 'transparent';
		sbtnObj4.style.backgroundColor = 'transparent';
		begin2();
	}

	if(document.activeElement == sbtnObj2)
	{
		imgObj2.style.left = '0px';
		imgObj3.style.left = '1600px';
		imgObj4.style.left = '3200px';
		imgObj1.style.left = '4800px';
		sbtnObj2.style.backgroundColor = 'black';
		sbtnObj1.style.backgroundColor = 'transparent';
		sbtnObj3.style.backgroundColor = 'transparent';
		sbtnObj4.style.backgroundColor = 'transparent';
		begin2();
	}

	if(document.activeElement == sbtnObj3)
	{
		imgObj3.style.left = '0px';
		imgObj4.style.left = '1600px';
		imgObj1.style.left = '3200px';
		imgObj2.style.left = '4800px';
		sbtnObj3.style.backgroundColor = 'black';
		sbtnObj2.style.backgroundColor = 'transparent';
		sbtnObj1.style.backgroundColor = 'transparent';
		sbtnObj4.style.backgroundColor = 'transparent';
		begin2();
	}

	if(document.activeElement == sbtnObj4)
	{
		imgObj4.style.left = '0px';
		imgObj1.style.left = '1600px';
		imgObj2.style.left = '3200px';
		imgObj3.style.left = '4800px';
		sbtnObj4.style.backgroundColor = 'black';
		sbtnObj2.style.backgroundColor = 'transparent';
		sbtnObj3.style.backgroundColor = 'transparent';
		sbtnObj1.style.backgroundColor = 'transparent';
		begin2();
	}
}

function wait(){
	clearTimeout(animate);
	animate = setTimeout(slideLeft, 1);
}

function begin(){
	sbtnObj1.style.backgroundColor = 'black';
	animate = setTimeout(wait, 5000);
}

function begin2(){
	clearTimeout(animate);
	animate = setTimeout(wait, 5000);
}

function keyPressed(e){				
	var keynum;

	keynum = e.keyCode;

	if((keynum == 39 || keynum == 37) && (document.activeElement != sldshwObj))
		setFocusBtn(keynum);
	else if(keynum == 38)
		setFocussldshw();
	else if(keynum == 40 && (document.activeElement == sldshwObj))
		setFocusBtns();
}

function setFocusBtns(){
	count = 0;
	btnArray[count].focus();
}

function setFocusBtn(x){				
	if(x == 39 && count < 3){
		btnArray[count + 1].focus();
		count++;
	}else if(x == 37 && count > 0){
		btnArray[count - 1].focus();
		count--;
	}

}

function keyPressedSlide(e){
	var keynum;

	keynum = e.keyCode;

	if(keynum == 39 || keynum == 37)
		clearTimeout(animate);

	animate = setTimeout(wait, 5000);
}

function setFocussldshw(){
	sldshwObj.focus();
}

window.onload = init;