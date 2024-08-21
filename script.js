function correctDate(date) {
  return date < 10 ? "0" + date : date;
}

function saleDate() {
  let newDate = new Date();
  let saleDate = new Date(2024, 7, 20);
  let finishDate = saleDate - newDate;
  let day = Math.floor(finishDate / (1000 * 60 * 60 * 24));
  let hours = Math.floor((finishDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((finishDate % (1000 * 60 * 60)) / (1000 * 60));

  let dayValue = document.getElementsByClassName("time")[0];
  let hoursValue = document.getElementsByClassName("time")[1];
  let minutesValue = document.getElementsByClassName("time")[2];
  let saleText = document.querySelector(".sate_text");

  dayValue.innerHTML = correctDate(day);
  hoursValue.innerHTML = correctDate(hours);
  minutesValue.innerHTML = correctDate(minutes);

  if (finishDate <= 0) {
    dayValue.innerHTML = "00";
    hoursValue.innerHTML = "00";
    minutesValue.innerHTML = "00";
    saleText.style.display = "block";
    saleText.style.fontFamily = "Chava, sans-serif";
  } else {
    saleText.style.display = "none";
  }
}

saleDate();
setInterval(() => {
  saleDate();
}, 1000);


    //let sell_card = document.querySelectorAll(".sell_card")
    //sell_card.forEach((e) => {
    //  e.style.display="none"
    //})
    //let sell_container = document.querySelector(".sell_container")
    //sell_container.innerHTML = "СКИДКА ЗАКОНЧИЛАСЬ"
    //sell_container.style.fontSize = "60px"
    //sell_container.style.fontFamily = "chava"
  //}
//}
