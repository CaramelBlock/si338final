let items = document.querySelectorAll(".item")
let container = document.querySelector(".stickers");
let canvas = document.querySelector(".canvas");
let furnitures = document.querySelector(".furnitures")
let zindex = 3;
let stickers = []
let clickedImages = []
let currentBtn 
let image = document.createElement("img");
let text = document.querySelector("h2");

// console.log(items)

for (i = 0; i<items.length; i++){
//   mouseover for creating border
   items[i].addEventListener("mouseover",function(){
       this.style.setProperty("border","#5a1599 3px solid")
   })

//    mouseout to get rid of border 
   items[i].addEventListener("mouseout",function(){
        this.style.removeProperty("border","#5a1599 3px solid")
   })

//   creates background #d94ca0 when clicked
    items[i].addEventListener("click",function(event){
        this.classList.toggle("clicked")
        if (this.classList.value.includes("clicked")){
            text.innerHTML = "Now click the location you want the object placed!"
            // this.classList.add("clicked")
            clickedImages.push(this)
            if (clickedImages.length > 1){
                console.log(clickedImages)
                container.removeChild(container.lastChild);
                removedButton = clickedImages.shift()
                removedButton.classList.remove("clicked")
                canvas.classList.add("notClickable")
            }

            let posX = event.clientX - this.width/2
            let posY = event.clientY - this.height/2
            let src = this.getAttribute("src")
            let alt = ""

            if (this.classList.value.includes("flipped")){
                image.classList.add("flipped")
            }
            else{
                image.classList.remove("flipped")
            }
            
            image.setAttribute("alt", alt)
            image.setAttribute("src", src)
            image.classList.add("sticker")
            image.style.setProperty("top",posY+"px")
            image.style.setProperty("left",posX+"px")
            
            container.appendChild(image)
            zindex++
            container.style.setProperty("display","inherit")
            canvas.classList.remove("notClickable")
            currentBtn = this

            

            
        }
        else {
            text.innerHTML = "To start decorating, click an item you want to add!"
            container.removeChild(container.lastChild);
            canvas.classList.add("notClickable")
            clickedImages.pop()
            console.log(clickedImages)
            
        }
   })
   

//  removes background when clicked again or alother is clicked 
}
let mouseMoveHandler = function(event) {
                posX = event.clientX - image.width/2
                posY = event.clientY - image.height/2
                image.style.setProperty("z-index", zindex)
                image.style.setProperty("top",posY+"px")
                image.style.setProperty("left",posX+"px")
            }
            document.addEventListener("mousemove", mouseMoveHandler)

    let canvasClickHandler = function(){
                document.removeEventListener('mousemove', mouseMoveHandler);
                currentBtn.classList.remove("clicked")
                text.innerHTML = "To start decorating, click an item you want to add!"
                let furniture = image.cloneNode()
                stickers.push(furniture)
                furnitures.appendChild(furniture)
                if (container.lastChild){
                    container.removeChild(container.lastChild)
                }
                clickedImages.pop()
                // for (i = 0; i<stickers.length; i++){
                //    furnitures.removeChild(furnitures.lastChild) 
                // }
                document.addEventListener("mousemove", mouseMoveHandler)
                canvas.classList.add("notClickable")
                
            }

            canvas.addEventListener("click", canvasClickHandler)

// let posButton = document.querySelector("#posButton")
// posButton.addEventListener("click", function(){
//     posButton.classList.toggle("clicked")
//     if (this.classList.value == "button clicked"){
//         for (i = 0; i<stickers.length; i++){
//             stickers[i].style.setProperty("pointer-events", "auto")
//             stickers[i].addEventListener("click",function(){
//                 image = this
//                 image.style.setProperty("pointer-events", "none") 
//                 canvas.classList.remove("notClickable")
                
//             })
        
//         }
//     }
//     else{
//         for (i = 0; i<stickers.length; i++){
//             stickers[i].style.setProperty("pointer-events", "none") 
//             canvas.classList.add("notClickable")
//         }
//     }
// })

let clearButton = document.querySelector("#clearButton")
clearButton.addEventListener("mousedown", function(){
    clearButton.classList.add("clicked")             
    })

clearButton.addEventListener("mouseup", function(){
    let conformation = confirm("Are you sure you want to remove all of your furniture?")
    clearButton.classList.remove("clicked") 
    if (conformation){      
        while (furnitures.children.length > 0){
            console.log(furnitures)
            furnitures.removeChild(furnitures.lastChild)
        }
    }     
})

let flipButton = document.querySelector("#flipButton")
flipButton.addEventListener("click", function(){
    flipButton.classList.toggle("clicked")       
    for (i = 0; i<items.length; i++){
        items[i].classList.toggle("flipped")
   }    
})



let undoButton = document.querySelector("#undoButton")
undoButton.addEventListener("mousedown", function(){
    undoButton.classList.add("clicked")             
    })

undoButton.addEventListener("mouseup", function(){
    undoButton.classList.remove("clicked")  
    if (furnitures.children.length > 0){
        furnitures.removeChild(furnitures.lastChild)  
    }
})