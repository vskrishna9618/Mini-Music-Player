let tracka = new Audio();
let index = 0;
tracka.src = 'songs/0.mp3';

let songs = [
  { songname: "The Box Remix", filepath: "songs/0.mp3", coverpath: "photos/1.jpg" },
  { songname: "Your Power Billie Eilish ", filepath: "songs/1.mp3", coverpath: "photos/4.jpg" },
  { songname: "Doobey Gehraiyaan ", filepath: "songs/2.mp3", coverpath: "photos/3.jpg" },
  { songname: "Stay- JustinBieber", filepath: "songs/3.mp3", coverpath: "photos/7.jpg" },
  { songname: "Hope - xxtentacion", filepath: "songs/4.mp3", coverpath: "photos/2.jpg" },
  { songname: "Moonlight - xxtentacion", filepath: "songs/5.mp3", coverpath: "photos/5.jpg" },
  { songname: "maroon-5 -animals", filepath: "songs/6.mp3", coverpath: "photos/6.jpg" },
  { songname: "2 Much-Justin Bieber ", filepath: "songs/7.mp3", coverpath: "photos/0.jpg" },
  { songname: "Anyone- Justin Bieber", filepath: "songs/8.mp3", coverpath: "photos/9.jpg" },
  { songname: "Despacito X Suit-Guru Randhawa", filepath: "songs/9.mp3", coverpath: "photos/8.jpg" },

];


let plays = document.getElementById('plays');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let gif = document.getElementById('gif');
let bar = document.getElementById('bar');
let songItem = Array.from(document.getElementsByClassName('o1'))

plays.addEventListener('click', () => {
  if (tracka.paused || tracka.currentTime <= 0) {
    tracka.play();
    plays.classList.remove('fa-play');
    plays.classList.add('fa-pause');
    gif.style.opacity = 1;

  }
  else {
    tracka.pause();
    plays.classList.remove('fa-pause');
    plays.classList.add('fa-play');
    gif.style.opacity = 0;
  }

});

songItem.forEach((element, i) => {

  element.getElementsByTagName('img')[0].src = songs[i].coverpath;
  element.getElementsByTagName('span')[0].innerHTML = songs[i].songname;
  tracka.src = songs[i].filepath;





});
tracka.src = 'songs/0.mp3';

tracka.addEventListener('timeupdate', () => {

  progress = parseInt((tracka.currentTime / tracka.duration) * 100);
  bar.value = progress;



})
bar.addEventListener('change', () => {
  tracka.currentTime = bar.value * tracka.duration / 100;
})

const mustallplay = () => {
  Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
    element.classList.add("fa-play");

  })

}
Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    mustallplay();
    index = parseInt(e.target.id);
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
    tracka.src = songs[index].filepath;
    tracka.play();
    tracka.currentTime = 0;
    gif.style.opacity = 1;

    document.getElementById('below').innerText = songs[index].songname;

    plays.classList.remove('fa-play');
    plays.classList.add('fa-pause');



  })
})
next.addEventListener('click', () => {
  if (index > 9) {
    index = 0;
  }
  else {
    index = index + 1;
  }
  tracka.src = songs[index].filepath;
  tracka.play();
  tracka.currentTime = 0;
  document.getElementById('below').innerText = songs[index].songname;
  gif.style.opacity = 1;



  plays.classList.add('fa-pause');

})
previous.addEventListener('click', () => {
  if (index < 0) {
    index = 9;
  }
  else {
    index = index - 1;
  }
  tracka.src = songs[index].filepath;
  tracka.play();
  document.getElementById('below').innerText = songs[index].songname;
  gif.style.opacity = 1;




  tracka.currentTime = 0;

  plays.classList.add('fa-pause');

})

