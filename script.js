* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "TT Hoves";
}
section {
  padding: 0 calc(10vw - 16.345px);
  margin-bottom: calc(11vw + 18.4px);
}
.course-bg {
  background-image: url(./Images/html_css_js\ 1.png);
  background-repeat: no-repeat;
  background-size: 30vw;
  background-position: right 58px top 151px;
}
.logo {
  width: calc(8vw + 181.924px);
  margin-top: 37px;
  margin-bottom: calc(6.3vw + 4.292px);
}
.courseinfo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: calc(14.5vw - 24.487px);
  margin-bottom: calc(3.1vw + 36.354px);
}

.courseinfo div {
  display: flex;
  flex-direction: column;
}
.title {
  font-size: calc(0.6vw + 13.92px);
  line-height: 140%;
}
.subtitle {
  font-weight: 700;
  font-size: calc(1vw + 14.31px);
}
h1 {
  font-family: "Chava";
  font-size: calc(4.2vw + 26.25px);
  line-height: 110%;
  margin-bottom: calc(2vw + 11.681px);
}
.jobInfo {
  font-size: calc(1vw + 14.257px);
  font-weight: 300;
  line-height: 140%;
  width: calc(66.6vw + 77.611px);
  margin-bottom: 20px;
}
.primary {
  border-radius: 12px;
  width: 328px;
  background-color: #6e3aba;
  color: white;
  font-weight: 500;
  padding: 20px 0;
  border: 1px solid #6e3aba;
  font-size: 18px;
  line-height: 117%;
  margin-right: 30px;
  cursor: pointer;
}
.bg {
  display: flex;
  flex-direction: column;
  gap: 57px;
  align-items: center;
  background-color: #6e3aba;
  padding: 84px 0;
}
.sell {
  font-size: calc(2vw + 26.6px);
  line-height: 117%;
  color: white;
  text-align: center;
}
.sell_container {
  display: flex;
  gap: 85px;
}
.sell_card .time {
  font-family: "Chava";
  font-size: calc(12vw + 13.3px);
  line-height: 107%;
}
.sale_text {
  display: none;
  font-family: "Chava";
}

.sell_card span {
  display: block;
  font-size: 27px;
  font-weight: 500;
  line-height: 117%;
  text-align: center;
  margin-left: 10px;
}
.secondary {
  border-radius: 12px;
  background-color: #ffffff;
  width: 328px;
  padding: 20px 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 117%;
  color: #6e3aba;
  border: 1px solid #6e3aba;
  cursor: pointer;
}
.Months {
  font-size: 58px;
  font-weight: 500;
  line-height: 118%;
  margin-bottom: calc(3.2vw + 27.8px);
}
.title2 {
  font-size: calc(1vw + 14.31px);
  font-weight: 600;
  line-height: 140%;
  text-align: left;
}
.subtitle2 {
  display: block;
  margin-top: 10px;
  font-size: calc(1vw + 14.31px);
  font-weight: 400;
  line-height: 140%;
}
.courseinfo1 {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 400px;
  height: 210px;
  gap: 120px;
  margin-bottom: 90px;
}
.courseForYou {
  width: 769px;
  height: 136px;
  left: 120px;
  gap: 0px;
  opacity: 0px;
  font-size: 58px;
  font-weight: 500;
  line-height: 118%;
  margin-bottom: 90px;
}
.emoji {
  width: 210px;
  height: 210px;
  gap: 0px;
}
.courseinfo2 {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 450px;
  height: 506px;
  gap: 70px;
  margin-bottom: 52px;
}
@media ((min-width: 250px) and (max-width:1200px)) {
  .course-bg {
    background-image: url(./Images/html_css_js\ 1.png);
    background-repeat: no-repeat;
    background-size: 45vw;
    background-position: right 3.5px top 77px;
  }
  .courseinfo {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: calc(3.1vw + 36.354px);
  }
}
.legendPhoto {
  display: block;
  flex-basis: 200px;
  flex-grow: 1;
  width: calc(4.5vw + 311.9px);
}

.legendInfo {
  display: flex;
  flex-direction: row;
}

h4 {
  font-size: calc(1.1vw + 33px);
  font-weight: 700;
  line-height: 121%;
  margin-left: 51px;
  margin-bottom: calc(0.6vw + 7.56px);
}
p {
  font-size: calc(1.1vw + 14px);
  line-height: 140%;
}
.skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.skill {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: calc(0.6vw + 27.56px);
  margin-right: calc(5.2vw - 9.482);
  margin-left: 51px;
}

.skilltext {
  font-size: calc(0.3vw + 14.8px);
  font-weight: 400;
  line-height: 140%;
}
.legendEmoji {
  width: 36px;
}

.subtitle3 {
  margin-bottom: calc(3.2vw + 27.8px);
  margin-left: 51px;
}

.courseProgramm {
  padding: 80px 58px 35px;
  border: 2px solid black;
  position: relative;
}
.courseProgramm h2 {
  margin-bottom: calc(1.8vw + 17.345px);
  font-size: calc(2.7vw + 24px);
  font-weight: 500;
  line-height: 118%;
}
.courseProgramm ul li {
  list-style: none;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 2px solid black;
}
.courseProgramm ul {
  padding-bottom: 10px;
}
.courseDesktop,
.courseMobile {
  color: white;
  font-size: 18px;
  background-color: #6e3aba;
  border-radius: 12px;
  border: 2px solid #6e3aba;
  display: block;
  margin: 0 auto;
  width: calc(10.6vw + 288px);
  padding: 20px 0;
  cursor: pointer;
}
.courseMobile {
  display: none;
}
@media (max-width: 975px) {
  .courseDesktop {
    display: none;
  }
  .courseMobile {
    display: block;
  }
  .courseProgramm {
    margin-bottom: 30px;
  }
  .legendInfo {
    display: flex;
    flex-direction: column;
  }
  .skill {
    margin-left: 0px;
  }
  h4 {
    margin-left: 0px;
  }
  .subtitle3 {
    margin-bottom: calc(3.2vw + 27.8px);
    margin-left: 0px;
  }
  .grid-container {
    display: grid;
    grid-template-rows: calc(27.7vw + 224.018px) calc(27.7vw + 224.018px) calc(
        27.7vw + 224.018px
      );
    grid-template-columns: calc(27.7vw + 224.018px);
    gap: 19px;
  }
  .grid-item2 {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    display: flex;
    justify-self: stretch;
  }

  .grid-item1 {
    grid-column: 1 / 1;
    grid-row: 2 / 2;
  }
  .grid-item3 {
    grid-column: 1 / 1;
    grid-row: 3 / 3;
    display: flex;
    justify-self: start;
  }
}
.imgCourse {
  position: absolute;
  top: -3.2px;
  right: -3px;
  width: 80px;
}

.courseProgrammtitle {
  margin-left: 0px;
}
.grid-container {
  display: grid;
  grid-template-columns: calc(11.3vw + 285.575px) 578px;
  grid-template-rows: 150px 150px;
  gap: 19px;
}

.grid-item1 {
  grid-column: 1 / 1;
  grid-row: 1 / 2;
}

.grid-item2 {
  grid-column: 2 / 2;
  grid-row: 1 / 1;
  display: flex;
  justify-self: stretch;
}

.grid-item3 {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: flex;
  justify-self: start;
}

.diplom {
  width: calc(11.3vw + 285.575px);
  height: calc(7.9vw + 199.47px);
  object-fit: cover;
}
.diplomtext {
  display: block;
  font-size: calc(1vw + 14.31px);
  font-weight: 400;
  line-height: 140%;
}

.h2 {
  margin-bottom: calc(1.8vw + 17.345px);
  font-size: calc(2.7vw + 24px);
  font-weight: 500;
  line-height: 118%;
}
.UserReview{
  width: calc(56.4vw +  116.674px);
  font-size: calc(2.7vw +  24.055px); 
  font-weight: 500;
  line-height: calc(3.1vw +  28.336px); 
  text-transform: uppercase;
  margin-bottom: calc(2.2vw +  11.713px); 
  
}
.review{
  width: 335px;
  height: 484px;
  background-color: #F0F7FD;
  border-radius: 13px;
  padding: 54.6px 20px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.review p{
  width: 305px;
  font-size: 21px;
  font-weight: 400;
  line-height: 29.4px;
}
.youtube{
  margin-bottom: 12px;
}
.clientReview{
  display: flex;
  align-items: center;
  gap: 16px;
}
.clientReview img{
  border-radius: 50%;
}
.clientReview span{
  font-size: 21px;
  font-weight: 400;
  line-height: 29.4px;
  width: 169px;
  display: block;
  
}

.clientReview img {
  border-radius: 50%;
}

.hesitationtext {
  display: block;
  margin-bottom: calc(0.4vw + 18.34px);
  width: calc(45.4vw + 154px);
  font-size: calc(1vw + 14.271px);
  font-weight: 400;
  line-height: 140%;
}

.splide__track ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.splide__slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.splide__slide img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 975px) {
  .splide__slide {
    display: block;
  }
}

footer {
  padding: 100px 120px 80px;
  background-color: #222;
  display: flex;
  flex: wrap;
  justify-content: space-between;
}
.footerleft {
  width: 49%;
  color: white;
}
.footerleft h2 {
color: #ffffff;
width: calc (10.5vw + 289.6px);
}
.aplication {
  display: flex;
  gap: 20px;
  align-items: center;
}

.aplication span {
  font-size: calc (1w + 14.3px);
  line-height: 140%;
  margin-bottom: 24px;
}
.footerright {
  width: calc (16.4vw + 265.6px);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 60px 68px 50px;
  text-align: center;
}
.footerright h4 {
font-size: calc (0.4w + 24.3px);
font-weight: 700;
line-height: 136%;
margin-bottom: 19px;
}
.footerright span {
  display: block;
font-size: 21px;
line-height: 140%;
margin-bottom: 30px;

}
.footerright input {
  display: block;
  align-items: center;
}

.sale10 {
  width: 160px;
  height: 160px;
  color: #ffffff;
  font-weight: 700;
  background-color: #6e3aba;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 63px;
  border-radius: 50%;
  position: relative;
  top: -530px;
  left: -150px;
}

@media (max-width: 1280px) {
  .sale {
  left: auto;
  right: -150px}
}
