
 
 function themeChange() {
   const body = document.body;
   const checkbox =  document.getElementById("check");

   if(checkbox.checked){
      body.classList.add("dark");

   }
   else{
      body.classList.remove("dark")
   }

   
 }
 function show() {
   var button = document.getElementById("btn")
   var button2 = document.getElementById("btn2")

   var show  = document.getElementById("show")
   show.style.height = "auto"
   button.style.display = "none"
   button2.style.display = "block"


   
 }
 function hide() {
   var button1 = document.getElementById("btn")
   var button2 = document.getElementById("btn2")

   var show  = document.getElementById("show")
   show.style.height = "50px"
   button1.style.display = "block"
   button2.style.display = "none"


   
 }