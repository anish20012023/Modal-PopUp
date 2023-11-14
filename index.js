let openModal=document.querySelector(".main-btn")
let closeModal=document.querySelector(".close-modal")
let modal=document.querySelector(".modal")
let blurBck=document.querySelector(".blur-bck")
let hiddenClass=document.querySelectorAll(".hidden")




openModal.addEventListener('click',()=>{
    hiddenClass.forEach((btn)=>{
        btn.classList.remove("hidden")
    })
   
})
closeModal.addEventListener('click',()=>{
    hiddenClass.forEach((btn)=>{
        btn.classList.add("hidden")
    })
   
})
blurBck.addEventListener('click',()=>{
    hiddenClass.forEach((btn)=>{
        btn.classList.add("hidden")
    })
})




