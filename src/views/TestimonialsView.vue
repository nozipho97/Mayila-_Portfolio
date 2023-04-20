<template >
    <div class="card">
    <div class="flip-card" v-for="testimonial in testimonials" :key="testimonial">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img :src="testimonial.image" alt="Avatar" style="width:300px;height:250px;">
          </div>
          <div class="flip-card-back">
            <h1>{{ testimonial.name }}</h1>
            <p>{{ testimonial.relation }}</p>
            <p>{{ testimonial.comment }}</p>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
testimonials:[
    {name: 'Nontobeko Mhlongo',
image:'https://i.postimg.cc/FsGBGZvv/C11-Nontobeko-Mhlongo-1.jpg' ,
relation:'Life Choices Academy,Colleague ',
comment:"Nozipho is smart and very approachable, humble and  well spoken. Works hard on completing her tasks and developing her skills."
},
{name: 'Asandile Langeni',
    image: 'https://i.postimg.cc/ZY8gvmDC/asandile-langeni.jpg',
    relation:'Life Choices Academy,Colleague. ',
    comment: `Nozipho is a the definition of dynamite comes in small packages, as she has good potential that she is slowly realizing it. Her attitude to finding a solution to problems is admired and she doesn't lay down to anything which is admirable.`
    },
    {name: 'Keren Bruce',
        image: 'https://i.postimg.cc/7YqRgRpX/keren-bruce.jpg',
        relation:'Life Choices Academy,Colleague ',
        comment: ` Nozipho is a wonderful hard-working worker with a soft kind personality and a warm heart. She always ensures that goals are being met the way they are required to. She is highly creative and creates beautiful innovative projects which showcase her amazing technical abilities. She would make a highly efficient and wonderful asset to your company..`
        },
        {name: 'Nikita Ramawoothar',
            image: 'https://i.postimg.cc/TPNP7GxX/DSC-3524.jpg',
            relation:'Life Choices Academy,Colleague ',
            comment:`Nozipho is a very creative individual and is always
            pleasant company to have within the workplace. She is not only
            helpful but also an exceptional developer that you can always
            count on to get some ideas and inspiration from.`
            },
            {name: 'Ryan Thomas',
                image: 'https://i.postimg.cc/26fVzGKp/ryan.jpg',
                relation:'Life Choices Academy,Lecture. ',
                comment:  `Nozipho very rarely struggles to the point of needing any help, which shows   off traits that presents
                     her as a really fast & strong learner, that's able to assess a problem at hand and solve it within
                     minutes. Nozipho also comes across as shy and quiet, but once engaging in conversation she
                     shows off her great sense of humor.`
                },
                {name: 'Sivuyisiwe Mgijima',
                    image: 'https://i.postimg.cc/hGjWyhJh/C11-Sivuyisiwe-1.jpg',
                    relation:'Life Choices Academy,Colleague ',
                    comment:  `A woman of class and elegance, a prepossessing sight and of
                    course consisting of unfathomable intelligence. Always happy
                    to help, even if she's always tired. Nozipho's friendly aura
                    invites a sense of comfort whenever we assist one another on
                    work. She radiates joy and that translates into her code as
                    her flair for design triumphs any I've seen so far. Poor
                    eyesight aside, anything she creates is always vibrant and a
                    feast for the eye's.`
                    },
]
    }
},
}
</script>
<style scoped>
.card{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 4rem;
    background-color: transparent;
    margin: 4rem;
    border: none;   
    
}
.flip-card {
    background-color: transparent;
    width: 300px;
    height: 200px;
    perspective: 1000px;
    padding: 0%;
    margin-bottom: 0%;
    box-shadow: 20px 20px 50px 10px #f008f4;
    
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .flip-card-front {
    background-color: #f008f4;
    color: black;
  }
  .flip-card-back {
    background-color: plum;
    color:white;
    transform: rotateY(180deg);
    overflow-y: auto;
    font-weight: bold;
  }
</style>