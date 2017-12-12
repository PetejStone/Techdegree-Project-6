 document.addEventListener('DOMContentLoaded', () => { 

let i = 0;
let subtitles = document.getElementsByClassName("mejs__time-float-current");
let pCurrent = document.querySelectorAll('p');
let video = document.getElementsByTagName('video')[0];

video.addEventListener('timeupdate', (event) => {
  return video.currentTime;
})
////////Explanation of code for future ////////

// i = 0, if the current paragraph element is < the total # of paragraphs, keep
// looping. 'timeupdate' added to keep track of time. If the video's current
// time is < that the current 'p' element's end time (per attribute retrieval),
// and is < than that current element's start time, then add one to the pCurrent
// variable, which moves to the next line in the transcript. The same code is
// added to the "if" condition.  If it is between those times, style the current
// element red, if it is not true, change it back to black!

for (let i = 0; i < pCurrent.length; video.currentTime < pCurrent[i].getAttribute('data-end') && video.currentTime > pCurrent[i].getAttribute('data-start'), i += 1 ){
  video.addEventListener('timeupdate', ()=> {
    if (video.currentTime < pCurrent[i].getAttribute('data-end') && video.currentTime >= pCurrent[i].getAttribute('data-start')) {
      pCurrent[i].style.color = 'red';
    } else pCurrent[i].style.color = 'black';

  })}

//////Explanation of code for future reference
//same as above, selects all 'p' elements
// browser is listeneing for a click. If user clicks,
// then the video's current time will = that element's 'data start' position.

for (let i = 0; i <pCurrent.length; i += 1) {
  pCurrent[i].addEventListener('click', () => {
    video.currentTime = pCurrent[i].getAttribute('data-start');
  })}
})
