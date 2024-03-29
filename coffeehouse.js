var basketcart=document.querySelector(".basket")
var cartcontainer=document.querySelector(".cart-container")
var cartproduct=document.querySelector(".cartproduct")
var carttrash=document.querySelector(".carttrash")
var closecart=document.querySelector(".cartclose")
var addcart1=document.getElementById("addtocartbutn1")
var addcart2=document.getElementById("addtocartbutn2")
var addcart3=document.getElementById("addtocartbutn3")
var addcart4=document.getElementById("addtocartbutn4")
var addcart5=document.getElementById("addtocartbutn5")
var addcart6=document.getElementById("addtocartbutn6")
var removetotrash=document.getElementById("removetotrash")
var dollarprice=document.getElementById("dollarprice")
var buybutton=document.getElementById("buybutton")

var count=0;
//opening a cart..

basketcart.onclick=()=>{
  cartcontainer.classList.add("active")
}

//closing a cart..

closecart.onclick=()=>{
  cartcontainer.classList.remove("active")
}

var items=[
  {
    id:"cartitem1",
    name:"Americano Pure",
    price:14,
    img1: "https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712261/hu6qpgp1g8x5um6pzwyd.png",
    id1:"count1",
    flag:0,
    ct:0
  },

  {
    id:"cartitem2",
    name:"Americano Pure",
    price:14,
    img1: "https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712303/t3cd2d70ffb4pr1uezdy.png",
    flag:0,
    id1:"count2",
    flag:0,
    ct:0
  },

  {
    id:"cartitem3",
    name:"Americano Pure",
    price:14,
    img1: "https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712345/uu1npcl9ajmmfi7pszfa.png",
    flag:0,
    id1:"count3",
    flag:0,
    ct:0
  },

  {
    id:"cartitem4",
    name:"Americano Pure",
    price:14,
    img1: "https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712382/mpoizyo7uhyt1nfm2vvc.png",
    flag:0,
    id1:"count4",
    flag:0,
    ct:0
  },

  {
    id:"cartitem5",
    name:"Americano Pure",
    price:14,
    img1: "https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712433/kbbym2cg7tfahkmefh4x.png",
    flag:0,
    id1:"count5",
    ct:0
  },

  {
    id:"cartitem6",
    name:"Americano Pure",
    price:14,
    img1: "https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712489/gy4vf095ksjsfewit3do.png",
    flag:0,
    id1:"count6",
    ct:0
  }
];


addcart1.onclick = () =>shop(0);
addcart2.onclick = () =>shop(1);
addcart3.onclick = () =>shop(2);
addcart4.onclick = () =>shop(3);
addcart5.onclick = () =>shop(4);
addcart6.onclick = () =>shop(5);

function shop(u){
  var no=u
  if(items[no].ct==0){
   if(count<3){
    var productHTML = `
      <div class="cartproduct" id="${items[u].id}">
       <div>
        <img src="${items[u].img1}" alt="Product Image"  class="cartproductimg">
       </div>
          <div class="cartprice">
              <p class="cartproductname">${items[u].name}</p>
              <p class="cartproductprice">$14</p>
              <div id="count" class="countdown">
               <p class="itemcount" id="${items[u].id1}">1</p>
               <i class="fa-solid fa-basket-shopping basket1"></i>
              </div>
          </div>
          <div class="carttrash">
              <i class="fa-solid fa-trash trash" style="color: #bb2b07;" id="removetotrash" onclick="removeitem(${items[u].id},${u})"></i>
          </div>
          <p></p>
      </div>`;
      
     cartproduct.insertAdjacentHTML('beforeend', productHTML);
     items[no].ct+=1
     count++;
     items[u].flag=1;
   }
   else{
    window.alert("YOUR CART IS FULL !!")
   }
 }
 else{
     let b=items[u].flag+=1;
     items[u].flag=b;
     document.getElementById(items[u].id1).innerHTML=b
  }

 calculate()
}




const calculate=()=>{
  let sum=(items[0].flag+items[1].flag+items[2].flag+items[3].flag+items[4].flag+items[5].flag)
  dollarprice.innerHTML=(sum*14)+".00"
  
}

const removeitem=(id,b)=>{
  cartproduct.removeChild(id);
  items[b].flag=0;
  calculate();
  count--;
  items[b].ct=0;
}

buybutton.onclick=()=>{
 if( dollarprice.innerHTML!=='0.00'){
  cartcontainer.classList.remove("active")
  window.alert("Your order has been placed successfully")
  const jsConfetti = new JSConfetti();
    //button.addEventListener('click', () => {
        jsConfetti.addConfetti({
            emojis: [],
          confettiRadius: 6,
          emojiSize: 50,
          confettiNumber: 120,
        }).then(() => jsConfetti.addConfetti())
    // })
    Swal.fire({
      title: "Good job!",
      width: 300,
      text: `Your score is ${score} / ${question1.length}`,
      icon: "success"
    });

 }
 else{
  window.alert("Add item to Cart")
 }
}

document.addEventListener('DOMContentLoaded',function(){
    const revname=document.getElementById("reviewername")
    const revimg=document.getElementById("reviewerimg")
    const revrole=document.getElementById("reviewerrole")
    const right=document.getElementById("rightarrow")
    const left=document.getElementById("leftarrow")
    const revcontent=document.getElementById("reviewcontent")
    var index=0
    function leftclick(){
      if(index==0){
        index=2
        revname.innerHTML="John"
        revimg.src="data:image/jpeg;base64,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"
        revrole.innerHTML="App Developer"
        revcontent.innerHTML="Coffee Provides a consistent energy boost, with a low bug-to-feature ratio. A must-have dependency for productive coding sessions."
      }
      else if(index==2){
        index=1
        revname.innerHTML="Alex Jerry"
        revimg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8u_ayP-x7a7soze-Sef8UraDAM705lPqYmQ&usqp=CAU"
        revrole.innerHTML="Software Engineer"
        revcontent.innerHTML="Coffee is my daily MVP at work – it keeps me awake, motivated, and on top of my tasks. It's the real hero behind every successful project deadline and those early morning meetings."
      }
      else{
        index=0
        revname.innerHTML="Shawn"
        revimg.src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712836/adpfkbbzriaengaacd2z.jpg"
        revrole.innerHTML="Web Developer"
        revcontent.innerHTML="Ethereal Beans' medium roast offers a delightful harmony of fruity acidity, caramel sweetness, and velvety chocolate notes, making it a must-try for coffee enthusiasts seeking a rich and balanced experience."
      }
    }
    function rightclick(){
      if(index==0){
        index=1
        revname.innerHTML="John"
        revimg.src="data:image/jpeg;base64,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"
        revrole.innerHTML="App Developer"
        revcontent.innerHTML="Coffee Provides a consistent energy boost, with a low bug-to-feature ratio. A must-have dependency for productive coding sessions."
      }
      else if(index==2){
        index=0
        revname.innerHTML="Shawn"
        revimg.src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712836/adpfkbbzriaengaacd2z.jpg"
        revrole.innerHTML="Web Developer"
        revcontent.innerHTML="Ethereal Beans' medium roast offers a delightful harmony of fruity acidity, caramel sweetness, and velvety chocolate notes, making it a must-try for coffee enthusiasts seeking a rich and balanced experience."
      }
      else{
        index=2
        revname.innerHTML="Jerry"
        revimg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8u_ayP-x7a7soze-Sef8UraDAM705lPqYmQ&usqp=CAU"
        revrole.innerHTML="Software Engineer"
        revcontent.innerHTML="Coffee is my daily MVP at work – it keeps me awake, motivated, and on top of my tasks. It's the real hero behind every successful project deadline and those early morning meetings."
      }
    }
    left.onclick=()=>leftclick()
    right.onclick=()=>rightclick()
  });
