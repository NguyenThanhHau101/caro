

(function(){
  let board = document.getElementById("board");

  for (let i = 1; i <= 20; i++){
    for (let j = 1; j <= 20; j++){
      let item = document.createElement('div');
      item.classList.add("item");
      item.classList.add("center");
      item.classList.add("row" + i);
      item.classList.add("column" + j);
      board.appendChild(item);
    }
  }
})();
let clock = (function(){
  let timeA = 600;
  let timeB = 600;
  let clockA = document.getElementById("clockA");
  let clockB = document.getElementById("clockB");
  clockA.innerText = TimeToString(timeA);
  clockB.innerText = TimeToString(timeB);

  setTimeout(()=>{
    timeA -= 1;
    console.log(timeA);
    clockA.innerText = TimeToString(timeA);
  }, 1000);
  function TimeToString(number){
    let minute = number / 60;
    let second = number % 60;
    let sMinute = "";
    let sSecond = "";
    if (minute == 10){
      sMinute = "10";
    } else {
      sMinute = "0"+ minute.toString();
    }
    if (second > 10){
      sSecond = second.toString();
    } else {
      sSecond = "0"+ second.toString();
    }
    return sMinute +":" + sSecond;
  } 
})();


(function(){
  let ran = 0; 
  let items = document.getElementsByClassName("item");
  for (const item of items){
    item.addEventListener("click",function(){
      if (item.hasChildNodes()){
        let mes = document.getElementById("mes");
        mes.innerText ="Bạn không được đánh cờ vào ô này";
        
      }else{
        let span = document.createElement("span");
        if (ran % 2 == 0){
          span.innerText = "O";
          span.classList.add("redFont");
        } else {
          span.innerText = "X";
        }
        ran++;
        item.appendChild(span);
        let mes = document.getElementById("mes");
        mes.innerText ="";
      }
    });
  } 
})();




