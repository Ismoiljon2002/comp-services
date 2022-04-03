
// Changing the LOGO
const logoPic = document.getElementById('logo-pic');
if ( window.innerWidth < 768 ) {
    logoPic.src = "./img/LOGO mobile.png";
};

// POP-up button
const homeBtn = document.getElementById('homeBtn'),
      exitBtn1 = document.getElementById('exitBtn1'),
      exitBtn2 = document.getElementById('exitBtn2'),
      noteCard = document.getElementById('card-note'),
      toCall = document.querySelector('.btn-toCall'),
      bg1 = document.querySelector('.bg-callCard-1'), // skidka card bg
      bg2 = document.querySelector('.bg-callCard-2'); // call card bg



exitBtn1.addEventListener('click', () => {
    bg1.classList.add('hide');
})

exitBtn2.addEventListener('click', () => {
    bg2.classList.add('hide');
});

homeBtn.addEventListener('click', () => {
    bg2.classList.add('show');
    bg2.classList.remove('hide');

    const popupInp = document.querySelector('.input-call').nodeValue;
    if ( popupInp == '' ) {
        getNoteCard();
        setTimeout(getNoteCard(), 1500);
    };
});

// MOBILE BTNs
// skidka pop-up card
const skidkaBtn = document.querySelector('.link-skidka');
skidkaBtn.addEventListener('click', () => {
    bg1.classList.add('show');
    bg1.classList.remove('hide');
});

// Poluchit skidku Btn
const skidkaMobileBtn = document.getElementById('zvonok_skidku');
skidkaMobileBtn.addEventListener('click', () => {
    bg1.classList.add('show');
    bg1.classList.remove('hide');
});

// Obratny zvonok Btn
const obratniyZvonokBtn = document.getElementById('obratniy_zvonok');
obratniyZvonokBtn.addEventListener('click', () => {
    bg2.classList.add('show');
    bg2.classList.remove('hide');
});
function getNoteCard () {
    noteCard.classList.add('visible');
};