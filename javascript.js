var innerSpan = document.querySelector(".ticker-span");

const messages = [
    "Brady NE @ KC W 37-31",
    "Rayzor WV @ CV W 99-1",
    "WWE: Rayzor vs. Mark Henry @ 7:30PM"
];

function displayMessages(messages) {
    index = 1;

    innerSpan.addEventListener("animationiteration", () => {
        innerSpan.innerText = messages[index];
        index++;
        if (index === messages.length) {
            index = 0;
        }
    });
}

// function changeText(message) {

//     console.log(message);
// }

displayMessages(messages);

// var footer = document.querySelector("#ticker");

// function doSpan(message, i) {
//     console.log("this is the message " + message + " " + i);
//     let span = footer.getElementsByTagName("span")[0];
//     span.innerHTML = message;
//     span.style.animation = "scroll 7s infinite linear";
//     alert(message);
// }

// for (var i = 0; i < tickerMessages.length; i++) {
//     let message = tickerMessages[i];
//     setInterval(doSpan(message, i), 7000);
//     console.log(i);
// }
