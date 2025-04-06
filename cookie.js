// const canvas = document.createElement("canvas");
// document.body.appendChild(canvas);
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// document.addEventListener("DOMContentLoaded", () => {
//     // Privacy Settings Button Behavior
//     const settingsButton = document.getElementById("settings-button");
//     const settingsText = document.getElementById("settings-text");
//     let settingsClicked = 0;
    
//     settingsButton.addEventListener("click", () => {
//         settingsClicked++;
//         const messages = [
//             "Your request to decline has been declined.",
//             "Privacy settings updated to our default (which you cannot change).",
//             "Settings saved! (Just kidding, nothing changed.)",
//             "Error: User control not found."
//         ];
//         settingsText.textContent = messages[settingsClicked % messages.length];
//     });

//     // CAPTCHA Challenge
//     const captchaInput = document.getElementById("captcha-input");
//     const captchaSubmit = document.getElementById("captcha-submit");
//     captchaSubmit.addEventListener("click", () => {
//         captchaInput.value = "Wrong. Try Again.";
//         setTimeout(() => { captchaInput.value = ""; }, 1000);
//     });

//     // Random Pop-ups
//     const popupsContainer = document.getElementById("popups");
//     function createPopup() {
//         const popup = document.createElement("div");
//         popup.classList.add("popup");
//         popup.textContent = "Important Message: Click here!";
//         popup.style.top = Math.random() * window.innerHeight + "px";
//         popup.style.left = Math.random() * window.innerWidth + "px";
//         popupsContainer.appendChild(popup);
//         setTimeout(() => popup.remove(), 5000);
//     }
//     setInterval(createPopup, 2000); // Popups appear every 3 seconds
// });



// let circles = [];
// const maxCircles = 20;
// const speed = 3;
// const colors = ["#87CEEB", "#D2B48C", "#8B4513"];

// function createCircle() {
//     return {
//         x: canvas.width / 2,
//         y: canvas.height / 2,
//         radius: 10,
//         color: colors[Math.floor(Math.random() * colors.length)]
//     };
// }

// function drawTunnel() {
//     ctx.fillStyle = "beige";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     circles.forEach((circle, index) => {
//         ctx.beginPath();
//         ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
//         ctx.fillStyle = circle.color;
//         ctx.fill();
//         ctx.closePath();

//         circle.radius += speed;
//         if (circle.radius > canvas.width) {
//             circles.splice(index, 1);
//         }
//     });
    
//     if (circles.length < maxCircles) {
//         circles.push(createCircle());
//     }
    
//     requestAnimationFrame(drawTunnel);
// }
// drawTunnel();

/////RECTANGLES NOT SHRINKING

// let rectangles = [];
// const maxRectangles = 190;
// const speed = 6;
// const colors = ["#5579f8", "#392ca9",];
// const opacity = 0.4

// function createRectangle() {
//     return {
//         x: canvas.width / 2,
//         y: canvas.height / 2,
//         width: 20 + Math.random() * 20, // Varying width for non-square shapes
//         height: 40 + Math.random() * 10, // Varying height for non-square shapes
//         color: colors[Math.floor(Math.random() * colors.length)]
//     };
// }

// function drawTunnel() {
//     ctx.fillStyle = " #392ca9";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     rectangles.forEach((rect, index) => {
//         ctx.fillStyle = rect.color;
//         ctx.fillRect(rect.x - rect.width / 2, rect.y - rect.height / 2, rect.width, rect.height);

//         if (Math.random() >1.5) return; // Introduce glitch effect by skipping frames
//         rect.width += speed * 3.5;
//         rect.height += speed * 2;
        
//         if (rect.width > canvas.width || rect.height > canvas.height) {
//             rectangles.splice(index, 1);
//         }
//     });
    
//     if (rectangles.length < maxRectangles) {
//         rectangles.push(createRectangle());
//     }
    
//     setTimeout(() => requestAnimationFrame(drawTunnel), 130); // Add jittery animation effect
// }
// drawTunnel();

// document.addEventListener("DOMContentLoaded", () => {
//     const popupsContainer = document.getElementById("popups");
//     const videoPopup = document.getElementById("video-popup");
//     const closeVideo = document.getElementById("close-video");
//     const videoPopup1 = document.getElementById("video-popup1");
//     const closeVideo1 = document.getElementById("close-video1");

//     function createPopup() {
//         // 50% chance of showing a text pop-up, 50% for video
//         if (Math.random() > 0.2) {
//             const popup = document.createElement("div");
//             popup.classList.add("popup");
//             popup.textContent = "Important Message: Click here!";
//             popup.style.top = Math.random() * window.innerHeight + "px";
//             popup.style.left = Math.random() * window.innerWidth + "px";
//             popupsContainer.appendChild(popup);
//             // setTimeout(() => popup.remove(), 5500);
//         } else {
//             // Show video popup
//             videoPopup.style.display = "block"; 
//             videoPopup1.style.display = "block";
           
//         }
//     }
//     // Close video popup
//     closeVideo.addEventListener("click", () => {
//         videoPopup.style.display = "none";
//     });
//     closeVideo1.addEventListener("click", () => {
//         videoPopup1.style.display = "none";
//     });

//      // Popups appear every 3 seconds

//     setTimeout(() => {
//         document.getElementById("video-popup").style.display = "flex";
//     }, 5000);
//     setTimeout(() => {
//         document.getElementById("video-popup1").style.display = "flex";
//     }, 1000);

//     setInterval(createPopup, 1000)
// });



const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-7";
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

//POP UP BETTER
setTimeout(function() {
    const banner = document.getElementById('cookie-policy-banner');
    banner.style.display = 'block';
  }, 1000);  // 10000 milliseconds = 1 second
  
  document.getElementById('learn-more').addEventListener('click', function() {
    const popup = document.getElementById('text-popup4');
    popup.style.display = 'block'; // Show the pop-up
  
    popupSound.currentTime = 0; 
    popupSound.play();
    
    setTimeout(function() {
        popup.style.display = 'none'; // Hide the pop-up
    }, 1000); 
  });
  
  document.getElementById('accept-cookie').addEventListener('click', function() {
    const popup = document.getElementById('text-popup3');
    const banner = document.getElementById('cookie-policy-banner');

    popup.style.display = 'block';
    banner.style.display = 'none';

    popupSound.currentTime = 0; 
    popupSound.play();

    // Hide the pop-up after 2.2 seconds
    setTimeout(function() {
        popup.style.display = 'none';
    }, 1000);

    document.getElementById('cookie-policy-banner').style.display = 'none';

    setTimeout(function() {
        banner.style.display = 'block';
    }, 4000); 

});
  

const popupSound = new Audio('sound/popnotification.wav'); 

const clickSound = new Audio('sound/mouse-click-290204.mp3');

const userSound = new Audio('sound/notification-sound-7062.mp3');

//CONSTANT ADS
const adVariants = [
    {
      title: "🔥 Grandma's Tech Support™",
      message: "Now with more yelling and less fixing!",
      button: "GET",
      image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGNiZWVjenJhem9raXY1b21oaTE2ZmU0bXhqYXFpc3Z1bDNmanVmZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zeQrxoqsBDhVoASka5/giphy.gif"
    },
    {
      title: "💘 YOU WON!",
      message: "You’ve won a lifetime supply of Birth Control!",
      button: "Claim",
      image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXRsa244eDQwaDdsd3Nlazh3Z2c5bzBwNHp5d3dmNnBxaDJ4M2tnciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AAsj7jdrHjtp6/giphy.gif"
    },
    {
      title: "⚠️ SECURITY ALERT",
      message: "Get our Privacy Extension.",
      button: "Install Now",
      image: "https://media.giphy.com/media/l0MYEWpv7Ue0RFVaE/giphy.gif"
    },
    {
      title: "💸 Make $500/day!",
      message: "Earn easy money at our Casino!",
      button: "Learn How",
      image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzFpb2psMmx4YTJuY3Njc2VpczJsM2J5azlzdHRwNmV2bHlzdHk0aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/06ALiNzdf3yJYvTxEQ/giphy.gif"
    
    },
    {
        title: "🤯 BrainBooster 3000™",
        message: "Enhance your Overthinking!",
        button: "Learn How",
        image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTJ0bmhyOXllZzV6Z2huNzhzZGo3NDhrNGc5eDRteGZpNm0wM2Q2dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cJMlR1SsCSkUjVY3iK/giphy.gif"
      
      },
      {
        title: "🇺🇸 TRUMP- NOW WITH MORE ORANGE",
        message: "You’ve been randomly selected to vote",
        button: "Vote Now",
        image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnd1ejJoM284YjA0cm8wZ3p0a2tlYXNvYzI3a2pxbHg1MDRqN3oyaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JhIUyUs8KDCCf3W/giphy.gif"
      
      },
    {
        title: " 🍔 Get FREE Burgers!",
        message: "Like to Eat?",
        button: "NOM NOM",
        image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNngwdTM5eXg5dW44cjFtaHpqamVsMHowaWxwazRvdW1hMzFyMzZldCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ktEQJvz6AhuSr2Xc87/giphy.gif"
      },
      {
        title: "HATE YOURSELF??",
        message: "Get a Personality NOW",
        button: "YES",
        image: "IDCO ad4.jpg"
      
      }
      

  ];
  
  function spawnAdPopup() {
    popupSound.play();
    const template = document.getElementById('ad-template');
    const newAd = template.cloneNode(true);
    newAd.style.display = 'block';
  
    // Random position
    const randX = Math.floor(Math.random() * (window.innerWidth - 300));
    const randY = Math.floor(Math.random() * (window.innerHeight - 180));
    newAd.style.left = randX + 'px';
    newAd.style.top = randY + 'px';
  
    // Random content
    const variant = adVariants[Math.floor(Math.random() * adVariants.length)];
    newAd.querySelector('.ad-title').textContent = variant.title;
    newAd.querySelector('.ad-message').textContent = variant.message;
    newAd.querySelector('.ad-btn').textContent = variant.button;
    newAd.querySelector('.ad-img').src = variant.image;
  
    // Shake it sometimes
    if (Math.random() < 0.5) {
      newAd.classList.add('shake');
    }
  
    // Close on 'x' click
    newAd.querySelector('.close-btn').addEventListener('click', () => {
        clickSound.play();
      newAd.remove();
    });
  
    // Also close on button click
    newAd.querySelector('.ad-btn').addEventListener('click', () => {
      newAd.remove();
    });
  
    // Append to body
    document.body.appendChild(newAd);
  
    // Auto-remove after 3 seconds
    setTimeout(() => {
      newAd.remove();
    }, 4000);
  
    // Spawn another one randomly in 4–10 seconds
    setTimeout(spawnAdPopup, Math.floor(Math.random() * 6000) + 4000);
  }
  
  // Start after 5 seconds
  setTimeout(() => {
    for (let i = 0; i < 2; i++) {
      setTimeout(spawnAdPopup, i * 1500);
    }
  }, 3000);
  

//THE TERMS AND CONDITIONS

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popuptc");

    
    const closeButton = document.querySelector(".close-btn");


    function showPopup() {
        popup.style.display = "block"; // Show the popup
    }
    function closePopup() {
        clickSound.play();
        popup.style.display = "none";
        setTimeout(showPopup, 4000); // Reopen after 10 seconds
    }
    function acceptTerms() {
        userSound.play();
        customAlert("You have accepted the terms.");
        closePopup();
    }
    function declineTerms() {
        userSound.play();
        customAlert("You have declined the terms. Think Again.");
        popup.style.display = "block";
        // window.location.href = "https://www.example.com"; // Change as needed
    }
    // Attach event listeners
    closeButton.addEventListener("click", closePopup);
    window.acceptTerms = acceptTerms;
    window.declineTerms = declineTerms;

    // Show the popup when the page loads
    showPopup();
});
function customAlert(message, callback) {
    const alertBox = document.getElementById("custom-alert");
    const alertMessage = document.getElementById("custom-alert-message");
    const alertOkButton = document.getElementById("custom-alert-ok");
  
    alertMessage.textContent = message;
    alertBox.classList.remove("hidden");
  
    alertOkButton.onclick = function () {
      alertBox.classList.add("hidden");
      if (callback) callback(); // Optional action after OK
    };
  }

  
//
document.addEventListener("DOMContentLoaded", () => {
    
    const settingsButton = document.getElementById("settings-button");
    const settingsText = document.getElementById("settings-text");
    let settingsClicked = 0;
    
    
    settingsButton.addEventListener("click", () => {
        settingsClicked++;
        const messages = [
            "Your request to decline has been declined.",
            "Privacy settings updated to our default (which you cannot change).",
            "Settings saved! (Just kidding, nothing changed.)",
            "Error: User control not found."
        ];
        settingsText.textContent = messages[settingsClicked % messages.length];
    });

    setInterval(function() {
        document.getElementById('privacy-settings').style.display = 'block';
    }, 3000);
    // CAPTCHA Challenge
    // const captchaInput = document.getElementById("captcha-input");
    // const captchaSubmit = document.getElementById("captcha-submit");
    // captchaSubmit.addEventListener("click", () => {
    //     captchaInput.value = "Wrong. Try Again.";
    //     setTimeout(() => { captchaInput.value = ""; }, 1000);
    // });

    // Random Pop-ups
    const popupsContainer = document.getElementById("popups");
    function createPopup() {
        const popup = document.createElement("div");
        popup.classList.add("popup");
        // popup.textContent = "Important Message: Click here!";
        popup.innerHTML = 'Important Message: <span style="text-decoration: underline; cursor: pointer;">Click here!</span>';
        popup.style.top = Math.random() * window.innerHeight + "px";
        popup.style.left = Math.random() * window.innerWidth + "px";
        popupsContainer.appendChild(popup);
        setTimeout(() => popup.remove(), 5000);
    }
    setInterval(createPopup, 1000); // Popups appear every 3 seconds
});



document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("grid-container");
    const message = document.getElementById("captcha-message");

    const imageURL = "cloud.jpeg"; // Your full image here
    const gridSize = 3; // 3x3 grid
    const correctTile = 4; // Index of the saddest cloud (change as needed)

    let selectedTile = null;

    // Create grid tiles
    for (let i = 0; i < gridSize * gridSize; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.style.backgroundImage = `url(${imageURL})`;

        // Position each tile to show the correct part of the image
        let row = Math.floor(i / gridSize);
        let col = i % gridSize;
        tile.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;

      
        tile.addEventListener("click", function () {
            if (selectedTile) {
                selectedTile.classList.remove("selected");
            }
            selectedTile = tile;
            tile.classList.add("selected");
            
            if (i === correctTile) {
                message.textContent = "❌ WRONG.Try again";
                message.style.color = "red";
            } else {
                message.textContent = "YOU'RE NOT HUMAN";
                message.style.color = "red";
            }
        });
        gridContainer.appendChild(tile);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const popupsContainer = document.getElementById("popups");
    const videoPopup = document.getElementById("video-popup");
    const closeVideo = document.getElementById("close-video");
    const videoPopup1 = document.getElementById("video-popup1");
    const closeVideo1 = document.getElementById("close-video1");

    

    function createPopup() {
        if (Math.random() > 0.5) { 
            // 50% chance of a text pop-up
            const popup = document.createElement("div");
            popup.classList.add("popup");
            // popup.textContent = "Important Message: Click here!";
            popup.innerHTML = 'Important Message: <span style="text-decoration: underline; cursor: pointer;">Click here!</span>';
            popup.style.top = Math.random() * window.innerHeight + "px";
            popup.style.left = Math.random() * window.innerWidth + "px";
            popupsContainer.appendChild(popup);
            setTimeout(() => popup.remove(), 5500);
           
        } else {
            // Show first video popup
            videoPopup.style.display = "block"; 
            
            // Show the second video popup 2 seconds later
            setTimeout(() => {
                videoPopup1.style.display = "block";
            }, 1000);
        }
    }
    

    // Close video popups
    closeVideo.addEventListener("click", () => {
        clickSound.play();
        videoPopup.style.display = "none";
    });
    closeVideo1.addEventListener("click", () => {
        clickSound.play();
        videoPopup1.style.display = "none";
    });

    // Start popups with an interval
    setInterval(createPopup, 5500); // Popups appear every 3 seconds
});


let rectangles = [];
const maxRectangles = 140;
const speed = 8;
const colors = ["#3ca9","#398ca1","#392ca9", "#5579f8","#392ca9"];
// const opacity = ;

let growing = true; // Start with rectangles growing

// Toggle growth/shrink state every 5 seconds
setInterval(() => {
    growing = !growing;
}, 6000);

// function createRectangle() {
//     return {
//         x: canvas.width / 2,
//         y: canvas.height / 2,
//         width: 10 + Math.random() * 20, // Varying width
//         height: 30 + Math.random() * 10, // Varying height
//         color: colors[Math.floor(Math.random() * colors.length)]
//     };
// }

// function createRectangle() {
//     let base = 20 + Math.random() * 5;
//     return {
//         x: canvas.width / 2,
//         y: canvas.height / 2,
//         width: base + Math.random() * 5,
//         height: base + Math.random() * 5,
//         color: colors[Math.floor(Math.random() * colors.length)]
//     };
// }

function createRectangle() {
    let size = 20 + Math.random() * 10;
    return {
        x: canvas.width / 2,
        y: canvas.height / 2,
        width: size,
        height: size,
        color: colors[Math.floor(Math.random() * colors.length)],
    };
}


function drawTunnel() {
    
    ctx.fillStyle = "rgba(57, 44, 169, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    

    rectangles.forEach((rect, index) => {
        ctx.fillStyle = rect.color;
        ctx.fillRect(rect.x - rect.width / 2, rect.y - rect.height / 2, rect.width, rect.height);

        if (growing) {
            rect.width += speed * 4.5;
            rect.height += speed * 2.5;
        } else {
            rect.width -= speed * 4.5;
            rect.height -= speed * 2;
        }

        // Remove rectangles if they shrink too small
        if (rect.width <= 8 || rect.height <= 5) {
            rectangles.splice(index, 1);
        }

        // Remove rectangles if they grow too large
        if (rect.width > canvas.width || rect.height > canvas.height) {
            rectangles.splice(index, 1);
        }
    });

    // Add new rectangles when growing
    // if (growing && rectangles.length < maxRectangles) {
    //     rectangles.push(createRectangle());
    // }
    
// if (rectangles.length < maxRectangles) {
//     const addCount = growing ? 4 : 1; // More when growing, fewer when shrinking
//     for (let i = 0; i < addCount; i++) {
//         rectangles.push(createRectangle());
//     }
// }



if (rectangles.length < maxRectangles) {
    if (growing || Math.random() > 0.6) { // 30% chance to add during shrinking
        rectangles.push(createRectangle());
    }
}


    addGrain();


    setTimeout(() => requestAnimationFrame(drawTunnel), 110); // Jittery animation effect
}

drawTunnel();

function addGrain() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 9) {
        const rand = (Math.random() - 0.5) * 20;
        data[i] += rand;     // Red
        data[i] += rand;   // Green
        data[i] += rand;   // Blue
    }
    ctx.putImageData(imageData, 0, 0);
}


function closePrivacySettings() {
    clickSound.play();
    document.getElementById("privacy-settings").style.display = "none"; // Hide the popup
}

// To open the pop-up (you can trigger it based on some condition like a button click)
function openPrivacySettings() {
    document.getElementById("privacy-settings").style.display = "block"; // Show the popup
}



