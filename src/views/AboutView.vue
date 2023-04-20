<template >
 <section class="about-me" id="about-me">
  <div class="container">
    <div class="about-me-container">
      <div class="about-me-title">
        About <br> Nozipho Mayila
      </div>

      <div class="about-me-flex-container">
        <div class="about-me-image">
          <div class="back-div"></div>
          
          <div class="main-image"><img src="https://i.postimg.cc/SRRk1Pw0/Nozipho-Mayila-picture-1.jpg" alt="nozi"></div>
        </div>
        <div class="about-me-content">

          <div class="logo"><img src="https://i.postimg.cc/DwGrvV5v/logo.png" alt="logo"></div>

          <div class="text">
            An ambitious Front-end Developer and designer who takes great pride in the presentation and quality of work. 

            <br><br>

            Nozipho is someone who can design and create simple, beautiful and easy to understand things. She is an expert at taking designs into original, exciting and new directions. 
          </div>
        </div>
      </div>

      <div class="mail-button mail-button2">
        <a href="mailto:mayilanozipho@gmail.com"><img src="https://i.postimg.cc/CM985h13/gmail.png" alt="mail"></a>
      </div>

    </div>

  </div>
</section>






<br><br>
<div class = "portfolio-link">
  <a href="https://github.com/nozipho97/CAPSFINAL.git" target="_blank"> My Project </a>
  <a href="https://www.figma.com/file/stkh76IqsyCyMvgx1H8f6e/portfolio?t=ewbRfavgxHSWR2MC-6" target="_blank"> UI Design by Nozipho Mayila </a>
</div>
</template>

<style scoped>

* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  
}

html {
  scroll-behavior: smooth;
}

img {
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.container {
  max-width: 1300px;
  margin: 0px auto 0px auto;
  padding: 0px 40px;
}
@media (min-width: 1200px) and (max-width: 1441px) {
  .container {
    max-width: 1250px;
    padding: 0px 36px;
  }
}
@media (max-width: 767px) {
  .container {
    padding: 0px 30px;
  }
}
@media (max-width: 479px) {
  .container {
    padding: 0px 30px 0px 20px;
  }
}

.about-me {
  padding-top: 50px;
  padding-bottom: 50px;
}
.about-me .about-me-container {
  position: relative;
}
@media (max-width: 960px) {
  .about-me .about-me-container {
    padding-bottom: 100px;
  }
}
.about-me .about-me-container .about-me-title {
  font-size: 55px;
  color: #DE27E1;
  font-weight: 500;
  text-align: left;
}
@media (max-width: 500px) {
  .about-me .about-me-container .about-me-title {
    font-size: 30px;
  }
}

.about-me-flex-container {
  margin-top: -25px;
  margin-left: 150px;
  left: 100px;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 960px) {
  .about-me-flex-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
    gap: 50px;
  }
}
@media (max-width: 500px) {
  .about-me-flex-container {
    margin-top: -10px;
  }
}
.about-me-flex-container .about-me-image {
  position: relative;
  width: 400px;
  height: 400px;
}
@media (max-width: 500px) {
  .about-me-flex-container .about-me-image {
    width: 300px;
    height: 300px;
  }
}
.about-me-flex-container .about-me-image .back-div {
  position: absolute;
  bottom: 0;
  z-index: -3;
  background-color: #013747;
  width: 80%;
  height: 80%;
}
.about-me-flex-container .about-me-image .black-image {
  z-index: -2;
  position: absolute;
  left: 10px;
  bottom: 10px;
  height: 100%;
}
.about-me-flex-container .about-me-image .black-image img {
  height: 100%;
}
.about-me-flex-container .about-me-image .main-image {
  width: 70%;
  height: 70%;
  overflow: hidden;
  position: absolute;
  left: 25%;
  top: 5%;
  box-shadow: rgb(0, 0, 0) 0px 7px 50px 0px;
  transition: all 0.2s ease-out;
}
.about-me-flex-container .about-me-image .main-image:hover {
  transform-origin: top center;
  transform: scale(1.5);
  border-radius: 25px;
}
.about-me-flex-container .about-me-image .main-image img {
  transform-origin: center center;
  transform: scale(2);
  -o-object-fit: cover;
     object-fit: cover;
  transition: all 0.2s ease-out;
}
.about-me-flex-container .about-me-image .main-image img:hover {
  transform: scale(1);
}
.about-me-flex-container .about-me-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  flex: 0 0 40%;
}
@media (max-width: 960px) {
  .about-me-flex-container .about-me-content {
    flex-direction: row-reverse;
  }
}
.about-me-flex-container .about-me-content .logo {
  max-width: 200px;
}
.about-me-flex-container .about-me-content .logo img {
  filter: drop-shadow(0 0 25px rgb(0, 0, 0));
}
@media (max-width: 500px) {
  .about-me-flex-container .about-me-content .logo img {
    transform: rotateZ(90deg);
  }
}
.about-me-flex-container .about-me-content .text {
  color: #87A4B6;
  font-weight: 600;
  font-size: 18px;
}
@media (max-width: 500px) {
  .about-me-flex-container .about-me-content .text {
    font-size: 16px;
  }
}



.mail-button {
  display: flex;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  padding: 15px;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;
}
.mail-button a {
  display: flex;
}
.mail-button img {
  -o-object-fit: contain;
     object-fit: contain;
  transition: all 0.2s ease-out;
}


.mail-button2 {
  background-color: #001925;
  position: absolute;
  bottom: 0;
  left: 0;
  border: 10px solid #DE27E1;
}
.mail-button2 img {
  filter: invert(56%) sepia(42%) saturate(4795%) hue-rotate(360deg) brightness(103%) contrast(105%);
}
.mail-button2:hover {
  background-color: #DE27E1;
  border: 10px solid #DE27E1;
}
.mail-button2:hover img {
  filter: unset;
  transform: scale(1.5);
}

.portfolio-link {
  
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.portfolio-link a{
  text-decoration: none;
  color: #DE27E1;
  padding: 2rem;
  margin: 1rem;

}
   
   
</style> 
