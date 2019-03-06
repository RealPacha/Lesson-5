/*Задание 1*/

var elem = document.getElementById('les1');
document.getElementById('div1').style.display = "inline";

elem.onclick = function () {
	elem.value="Привет";
}

/*Задание 2*/

var swap = document.getElementById('les2');
var del = document.getElementById('h');
var h3 = document.createElement('h3');

swap.onclick = function () {
	document.body.insertBefore(h3, h).innerHTML = "Hello";
	del.remove();
}


/*Задание 3*/

var knop = document.getElementById('les3');
var ul = document.getElementById('_ul');
var li1 = document.getElementById('li1');
var li2 = document.getElementById('li2');
var li3 = document.getElementById('li3');
var li4 = document.getElementById('li4');

knop.onclick = function () {

li1.remove();
li2.remove();
li3.remove();
li4.remove();
	for (let i = 0; i < 4; i++){
		newLi = document.createElement('li');
		newLi.innerHTML = i + 1;
		ul.appendChild(newLi);
	}
}

/*Задание 4*/

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var umnoj = document.getElementById('umnoj');
var deli = document.getElementById('deli');
var a;
var b;

plus.onclick = function () {
	a = document.getElementById('one').value;
	b = document.getElementById('two').value;

	if (a != '' && b != '') {
		document.getElementById('center').innerHTML = "+";
		document.getElementById('rez').innerHTML = a*1 + b*1; //умножение на 1, из-за того, что js не понимает, что это число, а не строка, а после умножения, уже понимает
	}else{
		document.getElementById('rez').innerHTML = 'Введи числа, друг';
	}
}

minus.onclick = function () {
	a = document.getElementById('one').value;
	b = document.getElementById('two').value;

	if (a != '' && b != '') {
		document.getElementById('center').innerHTML = "-";
		document.getElementById('rez').innerHTML = a - b;
	}else{
		document.getElementById('rez').innerHTML = 'Введи числа, друг';
	}
}

umnoj.onclick = function () {
	a = document.getElementById('one').value;
	b = document.getElementById('two').value;

	if (a != '' && b != '') {
		document.getElementById('center').innerHTML = "*";
		document.getElementById('rez').innerHTML = a * b;
	}else{
		document.getElementById('rez').innerHTML = 'Введи числа, друг';
	}
}

deli.onclick = function () {
	a = document.getElementById('one').value;
	b = document.getElementById('two').value;

	if (a != '' && b != '') {
		document.getElementById('center').innerHTML = "/";
		document.getElementById('rez').innerHTML = a / b;
	}else{
		document.getElementById('rez').innerHTML = 'Введи числа, друг';
	}
}

/*Задание 5*/

var sss = document.getElementById('les5');
sss.onclick = function () {
	let newLi = document.createElement('li');
	newLi.innerHTML = "Первый элемент списка";
	list.insertBefore(newLi, list.firstChild);
}

/*Задание 6*/

var aaa = document.getElementById('les6');
aaa.onclick = function () {
	tab = document.createElement('table');

	for(let i = 0; i < 8; i++){
		tr = document.createElement('tr');

		for(let j = 0; j < 8; j++){
			td = document.createElement('td');
			if (i%2 == j%2) {
				td.className = "white";
       		} else {
            	td.className = "dark";
        	}
       		tr.appendChild(td);

		}
		tab.appendChild(tr);
	}
	document.body.appendChild(tab);
}