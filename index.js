var sidenavbar = document.querySelector(".side-navbar")
var rightnav = document.querySelector(".navbar-menu-toggle")
var crossside = document.querySelector(".cross")
rightnav.addEventListener("click",function(){
    sidenavbar.style.left="0"
})
crossside.addEventListener("click",function(){
    sidenavbar.style.left="-60%"
})

var productContainer= document.getElementById("products")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var entervalue= event.target.value.toUpperCase()
    for(i=0;i<productlist.length;i++){
        var productname = productlist[i].querySelector("p").textContent
        
        if(productname.toUpperCase().indexOf(entervalue)<0){
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }
    }   
})