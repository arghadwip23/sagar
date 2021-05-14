console.log('Hello World!');
var firebaseConfig = {
    apiKey: "AIzaSyClL7pE-1kTSr2ouTpFHnwdvhW36rLgX2s",
    authDomain: "jnvcob.firebaseapp.com",
    databaseURL: "https://jnvcob.firebaseio.com",
    projectId: "jnvcob",
    storageBucket: "jnvcob.appspot.com",
    messagingSenderId: "69566502508",
    appId: "1:69566502508:web:be3e4ad98d78924cb7aa49",
    measurementId: "G-BH23ZFD2KB"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);
 var db = firebase.firestore();
console.log(firebase);
var pre = document.getElementById('pre');
var fbtn = document.getElementById('screenf');
var sbtn = document.getElementById('screens');
var tbtn = document.getElementById('screent');
var btn = document.getElementById('im');
//ad function in first screen
firebase.auth().onAuthStateChanged(user => {
 if(user){
pre.style.display='none';
fbtn.style.display='flex';
var photoURL = user.photoURL;
var name = user.displayName;
var email = user.email;
btn.addEventListener('click', e => {
    fbtn.style.display = 'none';
    sbtn.style.display = 'flex';
    textanim();
 setTimeout(() =>{
     sbtn.style.display='none';
     tbtn.style.display='flex';
     next();
     play();
      var docRef = db.collection('samples').doc(name);
      docRef.set({ name: name,email:email, img: photoURL }).then(function() { console.log("done"); }).catch(function(error) { alert('something went wrong'); });
 },10000);
});
}else{
    window.location='index.html';
}
});

//function to animate text
function textanim() {
    var ml4 = {};
    ml4.opacityIn = [0, 1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 3;
    ml4.durationIn = 800;
    ml4.durationOut = 600;
    ml4.delay = 500;
    
    anime.timeline({ loop: true })
        .add({
            targets: '.ml4 .letters-1',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
        }).add({
            targets: '.ml4 .letters-1',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
        }).add({
            targets: '.ml4 .letters-2',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
        }).add({
            targets: '.ml4 .letters-2',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
        }).add({
            targets: '.ml4 .letters-3',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
        }).add({
            targets: '.ml4 .letters-3',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
        }).add({
            targets: '.ml4 .letters-4',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
        }).add({
            targets: '.ml4 .letters-4',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
        }).add({
            targets: '.ml4 .letters-5',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
        }).add({
            targets: '.ml4 .letters-5',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
        }).add({
            targets: '.ml4',
            opacity: 0,
            duration: 500,
            delay: 500
        });
}

function next() {
  anime.timeline({ loop: false })
      .add({
          targets: '.ml15 .word',
          scale: [14, 1],
          opacity: [0, 1],
          easing: "easeOutCirc",
          duration: 800,
          delay: (el, i) => 800 * i
      });
}
function play() {
    var audio = new Audio('music.mp3');
    audio.loop=true;
    audio.play();
}