

// const square = document.getElementById("square");
// const star = document.getElementById("star");
// const northStar = document.getElementById("northStar");
// const twinkle = document.getElementById("twinkle");
// const word = document.getElementById("word");



// // const squareColor = document.getElementById("square-color");

// // squareColor.addEventListener("input", function () {
// //     square.style.backgroundColor = squareColor.value;
// // });


// // ---------------- BACKGROUND IMAGE ----------------

// const backgroundImage = document.getElementById("background-image");

// backgroundImage.addEventListener("change", function () {

//     square.style.backgroundImage = "url('" + backgroundImage.value + "')";

// });




// const starX = document.getElementById("star-x");
// const starY = document.getElementById("star-y");

// starX.addEventListener("input", function () {
//     star.style.left = starX.value + "px";
// });

// starY.addEventListener("input", function () {
//     star.style.top = starY.value + "px";
// });



// const northStarX = document.getElementById("northStar-x");
// const northStarY = document.getElementById("northStar-y");

// northStarX.addEventListener("input", function () {
//     northStar.style.left = northStarX.value + "px";
// });

// northStarY.addEventListener("input", function () {
//     northStar.style.top = northStarY.value + "px";
// });



// const twinkleScale = document.getElementById("twinkle-scale");

// twinkleScale.addEventListener("input", function () {
//     twinkle.style.transform = "scale(" + twinkleScale.value + ")";
// });

// const twinkleX = document.getElementById("word-x");
// wordX.addEventListener("input", function (){
//     word.style.left = wordX.value + "px";
// })

// const twinkleY = document.getElementById("word-y");
// wordY.addEventListener("input", function (){
//     word.style.top = wordY.value + "px";
// })

// const wordInput = document.getElementById("word-input");

// wordInput.addEventListener("input", function () {
//     word.textContent = wordInput.value;
// });

// const wordSize = document.getElementById("word-size");

// wordSize.addEventListener("input", function () {
//     word.style.fontSize = wordSize.value + "px";
// });

// const wordX = document.getElementById("word-x");
// wordX.addEventListener("input", function (){
//     word.style.left = wordX.value + "px";
// })

// const wordY = document.getElementById("word-y");
// wordY.addEventListener("input", function (){
//     word.style.top = wordY.value + "px";
// })

// const wordFont = document.getElementById("word-font");

// wordFont.addEventListener("change", function () {
//     word.style.fontFamily = wordFont.value;
// });


// // const wordColor = document.getElementById("word-color");

// // wordColor.addEventListener("input", function () {
// //     word.style.color = wordColor.value;
// // });



// ===============================
// GET ELEMENTS
// ===============================

const square = document.getElementById("square");
const star = document.getElementById("star");
const northStar = document.getElementById("northStar");
const twinkle = document.getElementById("twinkle");
const word = document.getElementById("word");


// ===============================
// SQUARE IMAGE
// ===============================

// const backgroundImage = document.getElementById("background-image");

// if (backgroundImage) {
//     backgroundImage.addEventListener("change", function () {
//         square.src = backgroundImage.value;
//     });
// }

const backgroundImage = document.getElementById("background-image");

if (backgroundImage) {
    backgroundImage.addEventListener("change", function () {
        square.src = backgroundImage.value;
    });
}


// ===============================
// LEFT EYE X
// ===============================

const starX = document.getElementById("star-x");

if (starX) {
    starX.addEventListener("input", function () {
        star.style.left = starX.value + "px";
    });
}


// ===============================
// LEFT EYE Y
// ===============================

const starY = document.getElementById("star-y");

if (starY) {
    starY.addEventListener("input", function () {
        star.style.top = starY.value + "px";
    });
}


// ===============================
// RIGHT EYE X
// ===============================

const northStarX = document.getElementById("northStar-x");

if (northStarX) {
    northStarX.addEventListener("input", function () {
        northStar.style.left = northStarX.value + "px";
    });
}


// ===============================
// RIGHT EYE Y
// ===============================

const northStarY = document.getElementById("northStar-y");

if (northStarY) {
    northStarY.addEventListener("input", function () {
        northStar.style.top = northStarY.value + "px";
    });
}


// ===============================
// LEFT EYE SCALE
// ===============================

const starScale = document.getElementById("star-scale");

if (starScale) {
    starScale.addEventListener("input", function () {
        star.style.transform = "scale(" + starScale.value + ")";
    });
}


// ===============================
// RIGHT EYE SCALE
// ===============================

const northStarScale = document.getElementById("northStar-scale");

if (northStarScale) {
    northStarScale.addEventListener("input", function () {
        northStar.style.transform = "scale(" + northStarScale.value + ")";
    });
}


// ===============================
// MOUTH SCALE
// ===============================

const twinkleScale = document.getElementById("twinkle-scale");

if (twinkleScale) {
    twinkleScale.addEventListener("input", function () {
        twinkle.style.transform = "scale(" + twinkleScale.value + ")";
    });
}

// ===============================
// MOUTH X
// ===============================

const twinkleX = document.getElementById("twinkle-x");

if (twinkleX) {
    twinkleX.addEventListener("input", function () {
        twinkle.style.left = twinkleX.value + "px";
    });
}


// ===============================
// MOUTH Y
// ===============================

const twinkleY = document.getElementById("twinkle-y");

if (twinkleY) {
    twinkleY.addEventListener("input", function () {
        twinkle.style.top = twinkleY.value + "px";
    });
}


// ===============================
// TEXT INPUT
// ===============================

const wordInput = document.getElementById("word-input");

if (wordInput) {
    wordInput.addEventListener("input", function () {
        word.textContent = wordInput.value;
    });
}

 const wordX = document.getElementById("word-x");
 wordX.addEventListener("input", function (){
     word.style.left = wordX.value + "px";
 })

const wordY = document.getElementById("word-y");
 wordY.addEventListener("input", function (){
     word.style.top = wordY.value + "px";
})


// ===============================
// TEXT SIZE
// ===============================

const wordSize = document.getElementById("word-size");

if (wordSize) {
    wordSize.addEventListener("input", function () {
        word.style.fontSize = wordSize.value + "px";
    });
}


// ===============================
// TEXT FONT
// ===============================

const wordFont = document.getElementById("word-font");

if (wordFont) {
    wordFont.addEventListener("change", function () {
        word.style.fontFamily = wordFont.value;
    });
}


// ===============================
// TEXT COLOR
// ===============================

const wordColor = document.getElementById("word-color");

if (wordColor) {
    wordColor.addEventListener("input", function () {
        word.style.color = wordColor.value;
    });
}



