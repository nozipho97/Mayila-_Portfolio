<template>
    <div class="contain">
  
      <div class="wrapper">
    
        <div class="form">
          <h4>GET IN TOUCH</h4>
          <h2 class="form-headline">Send us a message</h2>
          <form id="submit-form" action="https://formspree.io/f/xbjeqgqr"  method="post">
            <p>
              <input id="name" class="form-input" type="text" placeholder="Your Name*">
              <small class="name-error"></small>
            </p>
            <p>
              <input id="email" class="form-input" type="email" placeholder="Your Email*">
              <small class="name-error"></small>
            </p>
            <p class="full-width">
              <input id="company-name" class="form-input" type="text" placeholder="Company Name*" required>
              <small></small>
            </p>
            <p class="full-width">
              <textarea  minlength="10" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
              <small></small>
            </p>
            <p class="full-width">
              <input type="checkbox" id="checkbox" name="checkbox" checked> Yes, I would like to receive communications by call / email about Restuarant's services.
            </p>
            <p class="full-width">
              <input type="submit" class="submit-btn" value="Submit" onclick="checkValidations()">
              <button class="reset-btn" onclick="reset()">Reset</button>
            </p>
          </form>
        </div>
    
        <div class="contacts contact-wrapper">
    
          <ul>
            <li>I would love to hear from you, <span class="highlight-text-grey">message</span> me for any further information
              </li>
            <span class="hightlight-contact-info">
              <li class="email-info"><i class="fa fa-envelope" aria-hidden="true"></i> mayilanozipho@gmail.com</li>
              <li><i class="fa fa-phone" aria-hidden="true"></i> <span class="highlight-text">+27 68 326 4041</span></li>
            </span>
            <i class="fa-brands fa-facebook" href="https://www.facebook.com/seekcpt/about_profile_transparency"></i>
            <i class="fa-brands fa-whatsapp" href="#"></i>
            <i class="fa-brands fa-github" href="https://github.com/nozipho97"></i>
            <i class="fa-brands fa-linkedin" href="https://www.linkedin.com/in/nozipho-mayila-b03766210/"></i>
             
          </ul>
  
        </div>
      </div>
    </div>
  </template>
  
  <script>
import ContactView from '../views/ContactView.vue'
export default {
    name: 'contact'
}
</script>
  
  <style scoped>
  * {
    box-sizing: border-box;
  }
  body {
    padding: 1rem;
    color:  #860A89;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
  .contain {
    background-color: #DE27E1;
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding: 1em;
    margin-bottom: 1rem;
  }
  div.form {
    background-color: #eee;
    padding: 3em;
    
  }
  .contact-wrapper {
    margin: auto 0;
  }
  .submit-btn {
    float: left;
  }
  .reset-btn {
    float: right;
  }
  .form-headline:after {
    content: "";
    display: block;
    width: 10%;
    padding-top: 10px;
    border-bottom: 3px solid #DE27E1;
  }
  .highlight-text {
    color:  #860A89;
  }
  .hightlight-contact-info {
    font-weight: 700;
    font-size: 22px;
    line-height: 1.5;
  }
  .highlight-text-grey {
    font-weight: 500;
  }
  .email-info {
      margin-top: 20px;
  }
  ::-webkit-input-placeholder { /* Chrome */
    font-family: 'Roboto', sans-serif;
  }
  .required-input {
    color:  #860A89;
  }
  @media (min-width: 600px) {
    .contain {
      padding: 0;
    }
  }
  h3,
  ul {
    margin: 0;
  }
  h3 {
    margin-bottom: 1rem;
  }
  .form-input:focus,
  textarea:focus{
    outline: 1.5px solid #DE27E1;
  }
  .form-input,
  textarea {
    width: 100%;
    border: 1px solid #bdbdbd;
    border-radius: 5px;
  }
  .wrapper > * {
    padding: 1em;
  }
  @media (min-width: 700px) {
    .wrapper {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }
    .wrapper > * {
      padding: 2em 2em;
    }
  }
  ul {
    list-style: none;
    padding: 0;
  }
  .contacts {
    color:  #860A89;
  }
  .form {
    background: #fff;
  }
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  form label {
    display: block;
  }
  form p {
    margin: 0;
  }
  .full-width {
    grid-column: 1 / 3;
  }
  button,
  .submit-btn,
  .form-input,
  textarea {
    padding: 1em;
  }
  button, .submit-btn {
    background: transparent;
    border: 1px solid #DE27E1;
    color: sa;
    border-radius: 15px;
    padding: 5px 20px;
    text-transform: uppercase;
  }
  button:hover, .submit-btn:hover,
  button:focus , .submit-btn:focus{
    background: #DE27E1;
    outline: 0;
    color: #eee;
  }
  .error {
    color:  #860A89;
  }
  ul i {
    font-size: 1.5em;
    color:white;
    margin: 0 10px;
    transition: 0.5s;
    justify-content: space-evenly;
    cursor: pointer;
  }
  ul i:hover {
    transform: translateY(-10px);
  }
  </style>
  