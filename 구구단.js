// JavaScript Document
var 숫자1 = Math.ceil(Math.random() * 9);
var 숫자2 = Math.ceil(Math.random() * 9);//내림보다 올림이 훨씬 더 깔끔한 구구단 숫자 만들수 있음.
var 결과 = 숫자1 * 숫자2;

var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = String(숫자1) + '곱하기' + String(숫자2) + '는?';
document.body.append(단어);
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
입력창.type = 'number';
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit', function 콜백함수(e) { //콜백함수(이벤트) 에서, 매개변수의 이름(ef.이벤트)는 내 마음대로 정할 수 있다. 
	//EventListenr가 반복문 열할을 하고 있습니다. 하지만, 이벤트리스터가 항상 반목분 역할을 하는 것은 아닙니다.
	e.preventDefault();
	if (결과 === Number(입력창.value)) {
		결과창.textContent = '딩동댕';
		숫자1 = Math.ceil(Math.random() * 9); //변수를 바꾸때, var 을 뺀다.
		숫자2 = Math.ceil(Math.random() * 9);//내림보다 올림이 훨씬 더 깔끔한 구구단 숫자 만들수 있음.
		결과 = 숫자1 * 숫자2; //		단어.textContent = 입력창.value;
		단어.textContent = String(숫자1) + '곱하기' + String(숫자2) + '는?';
		
		입력창.value = '';
		입력창.focus();
	}	else {
		결과창.textContent = '땡';
		입력창.value = '';
		입력창.focus();
	}	
}); // 콜백함수


