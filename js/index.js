if (window.location.pathname === "/index.html"|| window.location.pathname ==="/CoursEnLigne/") {
   let compteurIcon = document.querySelectorAll("main .iconeRef1 p span");
   let imgHome = document.querySelectorAll(".sectionCard img");
   let Npanier = document.querySelector('header .Npanier')
   let btnHome = document.querySelectorAll(".sectionCard button");
   let modalHome = document.querySelector('#modalMail')
   let mailInput = document.querySelector('.homeCover p:nth-child(2) input')
   let mailBtn = document.querySelector('.homeCover p:nth-child(2) button')
   let closeBtnModal = document.querySelector('.closeBtnModal')
  
   // data-bs-target="#Letter"

 let regExp =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;

   mailBtn.addEventListener('click',()=>{
      if(!(regExp.test(mailInput.value))){
         mailBtn.previousElementSibling.style.display="block"
         mailInput.addEventListener('focus',()=>{
            mailBtn.previousElementSibling.style.display="none"
           
         })
      }else{
         mailBtn.setAttribute('data-bs-target','#Letter')
         modalHome.textContent=mailInput.value
         mailBtn.click()
         
      }
   })
  
   closeBtnModal.addEventListener('click',()=>{
      mailBtn.removeAttribute('data-bs-target')
   })



   btnHome.forEach((btn) => {
      btn.addEventListener("click", () => {
         if( btn.classList.contains('btnAdd')){

            btn.classList.remove('btnAdd')
            btn.classList.add('btnRemove')
            btn.querySelector('span').textContent='Remove to Cart'
            Npanier.textContent =  parseInt(Npanier.textContent)+1

         }else if( btn.classList.contains('btnRemove')){

            btn.classList.remove('btnRemove')
            btn.classList.add('btnAdd')
            btn.querySelector('span').textContent='Add to Cart'
            Npanier.textContent =  parseInt(Npanier.textContent)-1

         }
      });
   });

   let c1 = 0; //2523;
   let c2 = 0; //  3612;
   let c3 = 0; //120;
   let c4 = 0; //710;

   let timerc1 = setInterval(() => {
      if (c1 >= 2522) {
         clearInterval(timerc1);
      }
      c1++;
      compteurIcon.item(0).textContent = c1;
   }, 30);



   let timerc2 = setInterval(() => {
      if (c2 >= 3611) {
         clearInterval(timerc2);
      }
      c2++;
      compteurIcon.item(1).textContent = c2;
   }, 30);

   let timerc3 = setInterval(() => {
      if (c3 >= 119) {
         clearInterval(timerc3);
      }
      c3++;
      compteurIcon.item(2).textContent = c3;
   }, 150);

   let timerc4 = setInterval(() => {
      if (c4 >= 709) {
         clearInterval(timerc4);
      }
      c4++;
      compteurIcon.item(3).textContent = c4;
   }, 100);

   imgHome.item(0).addEventListener("click", () => {
      window.location.href = "./pages/coursjs.html";
   });
}
