<template>
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
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-light">github</a>
  </div>
</div>
<!-- <div class="card" style="width: 18rem; height:;">
  <img src="https://i.postimg.cc/K8gV3FzX/sneaker.jpg" class="card-img-top" alt="sneaker">
  <div class="card-body">
    <h5 class="card-title">Sneaker Store</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-light">Go somewhere</a>
  </div>
</div> -->
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