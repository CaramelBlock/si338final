let items = document.querySelectorAll(".item")
console.log(items)
for (i = 0; i<items.length; i++){
//   mouseover for creating border
   items[i].addEventListener("mouseover",function(){
       this.style.setProperty("border","#5a1599 3px solid")
   })

//    mouseout to get rid of border 
   items[i].addEventListener("mouseout",function(){
        if (this.style.getPropertyValue("background-color") != "rgb(255, 219, 226)"){
            color = this.style.getPropertyValue("background-color")
            console.log(color)
            this.style.setProperty("border","none")
        }
        else{
           this.style.setProperty("border","pink 3px solid") 
        }
       
   })

//   creates background #d94ca0 when clicked
   items[i].addEventListener("click",function(event){
        zindex = 3 
       
       if (this.style.getPropertyValue("background-color") != "rgb(255, 219, 226)"){
            this.style.setProperty("background-color","#ffdbe2")
            this.style.setProperty("border","pink 3px solid")
            this.style.setProperty("box-shadow", "0px 0px 5px #53838c")
            posX = event.clientX - this.width/2
            posY = event.clientY - this.height/2
            image = document.createElement("img")
            src = this.getAttribute("src")
            alt = this.getAttribute("alt")
            image.setAttribute("alt", alt)
            image.setAttribute("src", src)
            image.classList.add("sticker")
            image.style.setProperty("top",posY+"px")
            image.style.setProperty("left",posX+"px")
            document.querySelector(".stickers").appendChild(image)
            zindex ++

            document.addEventListener("mousemove",function(event){
                posX = event.clientX - image.width/2
                posY = event.clientY - image.height/2
                image.style.setProperty("z-index", 1000)
                image.style.setProperty("top",posY+"px")
                image.style.setProperty("left",posX+"px")
            })
            document.querySelector(".canvas").addEventListener("click",function(event){
                furniture = image.cloneNode()
                image.style.setProperty("display","none")
                furniture.style.setProperty("z-index", zindex)
                furniture.style.setProperty("pointer-events","none")
                document.querySelector(".furnitures").appendChild(furniture)
                
            })
        }
        else{
            this.style.setProperty("background-color","inherit")
            this.style.setProperty("border","#5a1599 3px solid")
            this.style.setProperty("box-shadow", "inherit")
        }
   })

//  removes background when clicked again or alother is clicked 

}

