// Defining text characters for the empty and full hearts for you to use later.
function main(){
  emptyHeartClick();
}

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.querySelector('#modal')
const commentContainer = document.querySelectorAll(".media-post")


function emptyHeartClick() {
    commentContainer.forEach(container => {
       container.addEventListener("click", function(event){
         if (event.target.className === "like-glyph") {
           mimicServerCall()
           .then(function(){
             if (event.target.className === "like-glyph") {
                event.target.textContent = FULL_HEART
                event.target.className = "activated-heart"
             } else {
               event.target.textContent = EMPTY_HEART
               event.target.className = "like-glyph"
             }
           })
           .catch((err) => {
              modal.className = ''
              modal.innerText = err
              setTimeout(function(){
                modal.className = "hidden"}, 5000)
           })
         }
       })
  })
  }

  main()

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


