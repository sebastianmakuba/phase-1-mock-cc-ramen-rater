// write your code here
document.addEventListener("DOMContentLoaded", () => {
    fetchRamen()
})
function fetchRamen() {
    fetch(" http://localhost:3000/ramens")
    .then (response  => response.json())
    .then(data => displayRamen(data))
}
function displayRamen (data) {
    data.forEach(ramen => {
       const parentDiv = document.getElementById("ramen-menu") 
       const menuDetails = document.createElement ('div')
       menuDetails.innerHTML = `
       <div class = photo> 
       <img src = ${ramen.image}>
       </div>`
       menuDetails.addEventListener('click',() => {
        ramenDetails(ramen)})

       parentDiv.appendChild(menuDetails)
      
    });
   
    }
    // //when clicked
    function ramenDetails(ramen){
        // const ramenDetail = document.querySelector('#ramen-detail')
        const detailImage = document.querySelector('#ramen-detail .detail-image')
        const name = document.querySelector('#ramen-detail .name')
        const restaurant = document.querySelector('#ramen-detail .restaurant')
        const ratingDisplay = document.querySelector('#rating-display')
        const commentDisplay = document.querySelector('#comment-display')

        detailImage.src = ramen.image
        detailImage.alt = ramen.name
        restaurant.textContent = ramen.restaurant
        name.textContent = ramen.name
        ratingDisplay.textContent = ramen.rating
        commentDisplay.textContent = ramen.comment

    }
       
        


        
    
             

    

