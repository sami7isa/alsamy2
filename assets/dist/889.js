"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[889],{2947:(t,e,s)=>{s.d(e,{H:()=>a}),salla.event.setMaxListeners(20);class r extends salla.AppHelpers{setHost(t){this.host=t}getElement(t){return this.host.querySelector(t)}getAttribute(t,e){var s;return null===(s=this.getElement(t))||void 0===s?void 0:s.getAttribute(e)}val(t){return this.getAttribute(t,"value")}isUser(){return"user"===salla.config.get("user.type")}}const a=new r},7889:(t,e,s)=>{s.r(e),s.d(e,{salla_rating_stars:()=>i});var r=s(3273),a=s(2947);const i=class{constructor(t){(0,r.r)(this,t),this.name="rating",this.size="medium"}initiateRating(){document.querySelectorAll(".s-rating-stars-element").forEach((t=>{t.addEventListener("submit",(function(t){t.preventDefault();let e=t.target.querySelectorAll(".s-rating-stars-btn-star.s-rating-stars-hovered"),s=e[e.length-1];if(!s)return;let r=s.getAttribute("data-star");t.target.querySelector(".rating_hidden_input").value=r,t.target.querySelectorAll(".s-rating-stars-btn-star").forEach(((t,e)=>a.H.toggleElementClassIf(t,"s-rating-stars-selected","s-rating-stars-unselected",(()=>e<parseInt(r))))),t.target.querySelectorAll('.s-rating-stars-btn-star[aria-pressed="true"]').forEach((t=>t.removeAttribute("aria-pressed"))),s.setAttribute("aria-pressed","")}))}))}highlightSelectedStars(){let t=["s-rating-stars-hovered"],e=this.host.querySelector(".s-rating-stars-element"),s=null==e?void 0:e.querySelectorAll(".s-rating-stars-btn-star");null==e||e.addEventListener("mouseout",(()=>s.forEach((e=>e.classList.remove(...t))))),null==s||s.forEach(((e,r)=>{e.addEventListener("mouseover",(()=>{if(e.classList.add(...t),r<=1)"BUTTON"===e.previousElementSibling.tagName&&e.previousElementSibling.classList.add(...t);else for(let e=0;e<r;e++)s[e].classList.add(...t)})),e.addEventListener("mouseout",(()=>e.classList.remove(...t)))}))}createStars(t){let e=[];for(let s=0;s<5;s++)e.push((0,r.h)("span",{class:{"s-rating-stars-btn-star sicon-star2":!0,["s-rating-stars-"+this.size]:!0,"s-rating-stars-selected":s<t}}));return e}render(){return(0,r.h)(r.H,null,this.value?(0,r.h)("div",{class:"s-rating-stars-wrapper"}," ",this.createStars(this.value)," "):(0,r.h)("form",{class:"s-rating-stars-element"},(0,r.h)("input",{type:"hidden",class:"rating_hidden_input",name:this.name,value:""}),[1,2,3,4,5].map((t=>(0,r.h)("button",{type:"submit",class:"s-rating-stars-btn-star s-rating-stars-"+this.size,"data-star":t},(0,r.h)("i",{class:"sicon-star2"}))))))}componentDidLoad(){this.initiateRating(),this.highlightSelectedStars()}get host(){return(0,r.g)(this)}};i.style=":host{display:block}"}}]);