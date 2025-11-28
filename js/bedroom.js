let items = document.querySelectorAll(".item")
let container = document.querySelector(".stickers");
let canvas = document.querySelector(".canvas");
let furnitures = document.querySelector(".furnitures")
let zindex = 3;
let stickers = []
let clickedImages = []
let currentBtn 
let image = document.createElement("img");

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
        if (this.classList.value == "item clicked"){
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
            let alt = this.getAttribute("alt")

            
            stickers.push(image)
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
            container.removeChild(container.lastChild);
            canvas.classList.add("notClickable")
            clickedImages.pop()
            console.log(clickedImages)
            
        }
   })
   let mouseMoveHandler = function(event) {
                posX = event.clientX - image.width/2
                posY = event.clientY - image.height/2
                image.style.setProperty("z-index", zindex)
                image.style.setProperty("top",posY+"px")
                image.style.setProperty("left",posX+"px")
            }
            document.addEventListener("mousemove", mouseMoveHandler)

    let canvasClickHandler = function(event){
                document.removeEventListener('mousemove', mouseMoveHandler);
                currentBtn.classList.remove("clicked")
                let furniture = image.cloneNode()
                furnitures.appendChild(furniture)
                if (container.lastChild){
                    container.removeChild(container.lastChild)
                }
                clickedImages.pop()
                document.addEventListener("mousemove", mouseMoveHandler)
                canvas.classList.add("notClickable")
                
            }

            canvas.addEventListener("click", canvasClickHandler)

//  removes background when clicked again or alother is clicked 

}
// let posButtonUnclick = true
// document.querySelector("#posButton").addEventListener("click", function(){
//     if (posButtonUnclick){
//         posButtonUnclick = false
//         for (i = 0; i<stickers.length; i++){
//             stickers[i].style.setProperty("pointer-events", "auto")
//             stickers[i].addEventListener("click",function(){
//                 sticker = this
//                 let mouseMoveHandler = function(event) {
//                         posX = event.clientX - image.width/2
//                         posY = event.clientY - image.height/2
//                         sticker.style.setProperty("z-index", zindex)
//                         sticker.style.setProperty("top",posY+"px")
//                         sticker.style.setProperty("left",posX+"px")
//                     }
//                 document.addEventListener("mousemove", mouseMoveHandler)
//                 let canvasClickHandler = function(){
//                         document.removeEventListener('mousemove', mouseMoveHandler);
//                     }

//                 canvas.addEventListener("click", canvasClickHandler)
//             })
        
//         }
//     }
//     else{
//         for (i = 0; i<stickers.length; i++){
//             stickers[i].style.setProperty("pointer-events", "none") 
//         }
//     }
// })