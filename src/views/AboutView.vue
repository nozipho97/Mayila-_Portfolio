<template >
  <div id="about-section">
      <div class="about">
        <h2>About</h2>
        <div class="container">
          <div class="child1">
            <div class="row">
            <h1>Nozipho Mayila</h1>
            <p>25 Years And I Am A Student At Life Choices. A Very Dedicated Young Lady With A Passion In Web Programming.</p>
            
              <div class="info">
                <h3><span>Qualification: </span>Web Programmer</h3>
                <h3><span>Post: </span>FullStack developer</h3>
                <h3><span>Language: </span>English</h3>
              </div>
            </div>
            <div class="child2">
              <img alt="picture" src="https://i.postimg.cc/02TFp4TX/bald_image-removebg-preview.png" style="height:500px; width:600px">
            </div>
          </div>
        </div>
      </div> 
  </div> 
    
  
</template>

<style scoped>
#about-section{
    padding-top:125px;
    padding: 0%;
    margin: 0%;
    display: flex;
    width: 100%;
}
#about-section h1{
  font-size: x-large;
  color: sandybrown;
  text-decoration: underline;
}
.about{
    border: 1px solid saddlebrown;
    margin: 1rem;
    padding: 2rem 2rem;
    text-align: center;
    color: sandybrown;
    font-weight: 100;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    margin-left: 60px;
    background-color: saddlebrown;
  }
  .heading{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: bold;
    text-decoration: underline;
    color: saddlebrown;
    text-align: center;
  }
  
  .child1{
    display: flex;
    padding: 1rem 1rem;
    vertical-align: middle;
    margin: 50px;
  }
  
  .info span{
    font-weight: bold;
  }
  .child2 img:hover{
    background-size: 110%;
    box-shadow: 10px 10px 0  sandybrown , -10px -10px 0  saddlebrown;
  }
  .skills{
    justify-content: space-between;
    display: inline-flex;
    color: sandybrown;
    background-color: saddlebrown;
    
  }
  .skills:hover{
      
  }
  
   
   
</style> 
