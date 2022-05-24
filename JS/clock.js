const clock = document.querySelector(".clock");
const date = new Date();

function getClock() {
  const date = new Date();
  const month = date.getMonth()+1;
  const ddate = date.getDate();
  let day = date.getDay();

  if (day===0) {day="일"}
  else if (day===1) {day="월"}
  else if (day===2) {day="화"}
  else if (day===3) {day="수"}
  else if (day===4) {day="목"}
  else if (day===5) {day="금"}
  else if (day===6) {day="토"};

  
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes =  String(date.getMinutes()).padStart(2, "0");
  const seconds =  String(date.getSeconds()).padStart(2, "0");

  clock.innerHTML = `${month}월 ${ddate}일 ${day}요일 ${hours}시 ${minutes}분 ${seconds}초`;
}

getClock();
setInterval(getClock, 1000);