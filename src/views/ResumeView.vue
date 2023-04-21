<template>
  <h3>P R O J E C T S</h3>
  <div class="cards">
<div class="card" style="width: 18rem;">
  <img src="https://i.postimg.cc/zfdpRL6c/bald-image.jpg" class="card-img-top" alt="sneaker">
  <div class="card-body">
    <h5 class="card-title">Portfolio</h5>
    <p class="card-text">First project</p>
    <a href="#" class="btn btn-light">netlify</a>
  </div>
</div>
<div class="card" style="width: 18rem; ">
  <img src="https://i.postimg.cc/MHkyBWDZ/istockphoto-1320740500-170x170.jpg" class="card-img-top" alt="sneaker">
  <div class="card-body">
    <h5 class="card-title">Calculator</h5>
    <p class="card-text">A project done with HTML, CSS and Javascript</p>
    <a href="#" class="btn btn-light">netlify</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img src="https://i.postimg.cc/vT95ZD5k/front.jpg" class="card-img-top" alt="sneaker">
  <div class="card-body">
    <h5 class="card-title">Store website</h5>
    <p class="card-text">A project done VueJS</p>
    <a href="#" class="btn btn-light">github</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="https://i.postimg.cc/fLhNPRM5/back.jpg" class="card-img-top" alt="sneaker">
  <div class="card-body">
    <h5 class="card-title">JS Project</h5>
    <p class="card-text">A Javascript project for ecommerce</p>
    <a href="#" class="btn btn-light">View on github</a>
  </div>
</div>
<div class="card" style="width: 18rem; height:;">
  <img src="https://i.postimg.cc/vTTx4zC4/sneaker.jpg" class="card-img-top" alt="sneaker">
  <div class="card-body">
    <h5 class="card-title">Sneaker Store</h5>
    <p class="card-text">A project done with HTML & CSS</p>
    <a href="https://sneaker-mania.netlify.app" class="btn btn-light">github</a>
  </div>
</div>
<div class="card" style="width: 18rem; height:;">
  <img src="https://i.postimg.cc/HkSb968G/istockphoto-1047790854-170667a-removebg-preview.png" class="card-img-top" alt="sneaker">
  <div class="card-body">
    <h5 class="card-title">Race Wesite</h5>
    <p class="card-text">A basic website with HTML & CSS</p>
    <a href="https://basicsitebasic.netlify.app" class="btn btn-light">Netlify</a>
  </div>
</div>
</div> 
</template>


<script>
import spinnerVue from '../components/spinnerVue.vue'
export default{
    name: 'spinner',
    component:{
        spinnerVue
    }
}
</script>

<style scoped>
.cards{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 4rem;
  background-color: transparent;
  margin-bottom: 10rem;
  padding-left: 5rem;
}
@media (min-width: 700px) {
    .cards {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }
    .cards {
      padding: 2em 2em;
    }
  }
.card{
  margin: 20px;
  padding: 20px;
  width: 25rem;
  box-shadow: 20px 20px 50px 10px #f008f4;
  transition: width 2s, height 2s, transform 2s;
}
.card:hover{
  transform: rotate(350deg);
}
.card-body{
  text-align: center;
  color: #f008f4;
}



</style>