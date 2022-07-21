import React  from "react";

const Faqjspart = () => {
 
const accordion = document.getElementsByClassName('contextBx');
for(let i =0; i<accordion.length; i++){
    accordion[i].addEventListener('click' , function (){
        this.classList.toggle('active');
    })
}

}

export default Faqjspart; 