// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function main(){
  emptyHeartInvoke()
}
function emptyHeartInvoke() {
const commentContainer = document.querySelectorAll(".media-post")
commentContainer.forEach(container => {
  container.addEventListener("click", changeHeart)
})
}

function changeHeart(e) {
  if (e.target.className.includes('like-glyph')) {
  mimicServerCall()
  .then(function(){
    if (e.target.innerText === EMPTY_HEART) {
    e.target.innerText = FULL_HEART
    e.target.className = "like-glyph activated-heart"
  } else {
      e.target.innerText = EMPTY_HEART
      e.target.className = "like-glyph"
    }
  })
  .catch((err) => {
    const error = document.querySelector('#modal')
    error.className = ""
    error.innerText = err 
    setTimeout(function(){
      error.className = "hidden"}, 5000)
  })
  }
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
