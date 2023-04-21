<template>
    <h3>R E S U M E</h3>
  <div class="container">
    <header class="header">
        <h1 class="primary--heading">Nozipho<span class="heading--deco">Mayila</span></h1>
        <h2 class="secondary--heading">Web Developer</h2>
    </header>
    <aside class="aside">
        <figure class="image__container"> <img src="https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500__340.jpg" alt="" class="image"> </figure>
        <article class="details">
            <ul role="list" class="education">
                <h3 class="title">Education</h3>
                <li role="listitem">
                    <h4 class="sub--title">Schools:</h4>
                    <ul role="list" class="sublist">
                        <li role="listitem" class="sublistitem"> <span class="text sub--text">Life Choices Coding Academy</span> <span>2023(current)</span> </li>
                        <li role="listitem" class="sublistitem"> <span class="text sub--text">CTU training Solutions</span> <span>2021</span> </li>
                        <li role="listitem" class="sublistitem"> <span class="text sub--text">Chris Hani Arts and Culture Focus School</span> <span>2014</span> </li>
                    </ul>
                </li>
                <li role="listitem">
                    <h4 class="sub--title">Courses:</h4>
                    <ul role="list" class="sublist">
                        <li role="listitem" class="sublistitem"> <span class="text sub--text">FullStack Development</span></li>
                        <li role="listitem" class="sublistitem"> <span class="text sub--text">IT Technial Support</span> <span></span></li>
                        <li role="listitem" class="sublistitem"> <span class="text sub--text">Dance</span> <span></span></li>
                    </ul>
                </li>
            </ul>
        </article>
    </aside>
        <article class="skills">
            <h3 class="title">Skills</h3>
            <div class="skills__content--flow">
                <ol role="list" class="special__skills">
                    <li role="listitem">CSS & HTML</li>
                    <li role="listitem">VUE JS</li>
                    <li role="listitem">JAVASCRIPT</li>
                    <li role="listitem">NODEJS</li>
                    <li role="listitem">GITHUB</li>
                    <li role="listitem">BOOTSTRAP</li>
                    <li role="listitem">POSTMAN</li>
                    <li role="listitem">MYSQL</li>
                </ol>
               
            </div>
          </article>
   </div>
</template>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    font: inherit;
    box-sizing: border-box;
}


picture,
img {
    display: block;
    max-width: 100%;
    object-fit: cover;
}
body {
    display:grid;
    place-items:center;
    font-family: "Roboto", sans-serif;
    min-block-size: 100vh;
    background: hsl(200, 10%, 92%);
}
.container {
    display: grid;
    grid-template-rows: auto 1fr min-content;
    grid-template-columns: auto 1fr;
    grid-template-areas: "aside header" "aside main" "footer footer";
    width: 80em;
    max-height: 1123px;
    margin-inline: auto;
    margin-bottom: 15px;
    outline: 1px solid var(--text-clr-200);
    border-radius: 0.5rem;
    padding: var(--space--1);
    gap: 0 var(--space--1);
    background-color:#DE27E1;
}
.header {
    grid-area: header;
    display: grid;
    place-content: center;
    position: relative;
    min-height: 20rem;
    isolation: isolate;
}
.header::after {
    z-index: -1;
    content: "";
    position: absolute;
    inset: 0;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 75%);
    background-color: var(--primary--accent);
}
.primary--heading {
    text-align: center;
    margin-inline: 0.5rem;
    text-transform: uppercase;
    font-weight: 900;
    margin-block-end: 0.75rem;
    font-size: clamp(2rem, -0.29rem + 5.73vw, 3.38rem);
}
.heading--deco {
    display: inline-flex;
    margin-inline-start: 0.75rem;
    align-self: flex-start;
    letter-spacing: calc(0.25rem + 0.5vw);
    color: #fff;
}
.secondary--heading {
    font-style: italic;
    background-color: #fff;
    margin-inline: auto;
    padding-inline: 1em;
    color: var(--text-clr-300);
    font-size: clamp(1.4rem, 0.86rem + 1.35vw, 1.73rem);
}
.aside {
    grid-area: aside;
    display: grid;
    grid-template-columns: fit-content(27vh);
    gap: var(--space--2);
    border: 2px solid var(--border-clr);
}
.image__container {
    margin-inline: var(--space--1);
    margin-block-start: var(--space--1);
}
.image {
    object-fit: cover;
    outline: 3px solid #fff;
    outline-offset: -0.5rem;
}
@media only screen and (max-width: 480px) {
  .image {
    width: 100%;
  }
}
.details {
    display: flex;
    flex-direction: column;
    gap: var(--space--1);
}
.details [role="list"] {
    margin-inline: var(--space--1);
    list-style: none;
}
.title {
    margin-block-end: var(--space--1);
    max-width: 20ch;
    background-color: var(--bg--light);
    padding: var(--space--050) var(--space--1);
    color: var(--primary--accent);
    font-weight: 500;

}

.text {
    font-weight: 500;
    color: var(--text-clr-300);
}
.education :has([role="list"]):nth-last-of-type(2) {
    margin-block-end: 1rem;
}
.sub--title {
    font-weight: 600;
    margin-block-end: var(--space--025);
    text-transform: uppercase;
    color: var(--primary--accent);
}
.sublistitem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 3rem;
}
.sublistitem > *:last-of-type {
    color: var(--text-clr-300);
    font-weight: 400;
}
.sub--text {
    font-size: var(--fs--01);
    text-transform: uppercase;
    font-weight: 600;
    color: var(--text-clr-200);
}

.skills__content--flow {
    display: flex;
    gap: var(--space--05);
}
.skills__content--flow > * {
    flex: 1;
}
.special__skills {
    display: inline-flex;
    flex-direction: column;
    list-style: none;
    gap: 0.25rem;
    counter-reset: special-counter;
}
.special__skills li {
    font-size: var(--fs--01);
    font-weight: bold;
    counter-increment: special-counter;
}
.special__skills li::before {
    content: counter(special-counter);
    background-color: var(--primary--accent);
    outline: 2px solid #fff;
    outline-offset: -0.25rem;
    display: inline-grid;
    place-content: center;
    margin-inline: 0.5rem;
    border-radius: 50%;
    font-size: 1.125rem;
    aspect-ratio: 1;
    color: #fff;
    height: 1.75rem;
}
.special__skills > * {
    color: var(--text-clr-300);
}
</style>