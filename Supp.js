// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     noLoop(); // We will use draw() for animation instead
//   }

//   function draw() {
//     background(20);
//     let cols = 15;
//     let rows = 10;
//     let w = width / cols;
//     let h = height / rows;
    
//     for (let i = 0; i < cols; i++) {
//       for (let j = 0; j < rows; j++) {
//         let x = i * w;
//         let y = j * h;
//         let c = color(random(100, 15), random(120, 55), random(100, 255));
//         fill(c);
//         stroke(15, 53, 220)
//         rect(x, y, w, h);
//       }
//     }
    
//     animateOverlay();
//   }
  
//   function animateOverlay() {
//     let overlayAlpha = 10;
//     let c = color(random(50), random(20), random(255), overlayAlpha);
//     fill(c);
//     rect(0, 0, width, height);
//     setTimeout(() => redraw(), 500); // Refresh every 500ms for animation effect
//   }
  
//   function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//     redraw();
//   }



// let palette = ["#2c695a", "#4ad6af", "#7facc6", "#4e93cc"];

// function setup() {
//   createCanvas(1500, 1500, WEBGL);
// //   angleMode(DEGREES);
//   background(57, 44, 169);

//   // Scale brushes to adapt to canvas size
//   brush.scaleBrushes(.5);

//   // Activate the flowfield we're going to use
//   brush.field("seabed");
// }

// function draw() {
//   frameRate(5);
//   translate(-width / 2, -height / 2);
  
//   // Draw animated rectangles
//   noFill();
//   stroke("#fffceb"); // Cream stroke for rectangles
//   strokeWeight(1);
  
//   let rectSize = random(10, 20);
//   rect(random(width), random(height), rectSize, rectSize);
  
//   // Brush Rain Effect
//   let available_brushes = brush.box();
//   brush.set(random(available_brushes), random(palette), 10);
//   brush.flowLine(random(width), random(height), random(300, 800), random(0, 360));
// }


// let generatedCaptcha = "";

// function generateCaptcha() {
//     const canvas = document.getElementById('captchaw');
//     const ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous

//     const chars = 'A̶B̶C̶D̶E̶F̶G̶H̶J̶K̶L̶M̶N̶P̶Q̶R̶S̶T̶U̶V̶W̶X̶Y̶Z̶2̶3̶4̶5̶6̶7̶8̶9̶';
//     generatedCaptcha = '';
//     for (let i = 0; i < 6; i++) {
//         generatedCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
//     }

//     // Optional: random text style
//     ctx.font = "30px Helvetica";
//     ctx.fillStyle = "#392ca9";
//     ctx.fillText(generatedCaptcha, 20, 35);
// }

// // Check CAPTCHA input
// function checkCaptcha() {
//     const input = document.getElementById('captchaw-input').value.trim().toUpperCase();
//     const result = document.getElementById('result');
//     if (input === generatedCaptcha) {
//         result.textContent = "CAPTCHA Verified!";
//         result.style.color = "green";
//     } else {
//         result.textContent = "Incorrect CAPTCHA. Try again.";
//         result.style.color = "red";
//         generateCaptcha(); 
//     }
// }


// let palette = ["#2c695a", "#4ad6af", "#7facc6", "#4e93cc"];
// let startTime;
// let isDrawing = true; // A flag to control whether we are drawing or not

// function setup() {
//   createCanvas(1500, 1500, WEBGL);
//   background(57, 44, 169);

//   // Scale brushes to adapt to canvas size
//   brush.scaleBrushes(0.5);

//   // Activate the flowfield we're going to use
//   brush.field("seabed");

//   startTime = millis(); // Record the start time
// }

// function draw() {
//   blendMode(OVERLAY);
//   // Stop drawing after 5 seconds and reset
//   if (millis() - startTime >= 3000) {
//     isDrawing = false; // Stop drawing
//     background(57, 44, 169); // Reset the background
//     startTime = millis(); // Reset the timer
//     isDrawing = true; // Start drawing again
//   }

//   if (isDrawing) {
//     translate(-width / 2, -height / 2);

//     // Draw animated rectangles
//     noFill();
//     stroke("#fffceb"); // Cream stroke for rectangles
//     strokeWeight(1);

//     let rectSize = random(10, 20);
//     rect(random(width), random(height), rectSize, rectSize);

//     // Brush Rain Effect
//     let available_brushes = brush.box();
//     brush.set(random(available_brushes), random(palette), 10);
//     brush.flowLine(random(width), random(height), random(300, 800), random(0, 360));
//   }
// }

const notSound = new Audio('sound/notification-sound-7062.mp3');
let generatedCaptcha = "";

function generateCaptcha() {
    const canvas = document.getElementById('captchaw');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous

    const chars = 'A̷B̴C̶D̵E̴F̵G̷H̸J̴K̴L̷M̶N̷P̸Q̷R̷S̵T̸U̷V̷W̷X̵Y̷Z̸2̶3̶4̶5̷6̵7̷8̶9̸';
    generatedCaptcha = '';
    for (let i = 0; i < 12; i++) {
        generatedCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Optional: random text style
    ctx.font = "30px Helvetica";
    ctx.fillStyle = "#392ca9";
    ctx.fillText(generatedCaptcha, 20, 35);
}

// Check CAPTCHA input
function checkCaptcha() {
    const input = document.getElementById('captchaw-input').value.trim().toUpperCase();
    const result = document.getElementById('result');
    if (input === generatedCaptcha) {
        result.textContent = "Incorrect CAPTCHA. Try again.";
        result.style.color = "red";
        triggerRandomPopups();
    } else {
        result.textContent = "Incorrect CAPTCHA. Try again.";
        result.style.color = "red";
        generateCaptcha();
        triggerRandomPopups(); // Regenerate for retry
    }
}

function triggerRandomPopups() {
  notSound.play();
  const titles = [
    "We Know You",
    "Tracking Enabled",
    "Consent Implied",
    "Behavioral Sync",
  ];

  const messages = [
    "Identity stored in memory cache.",
    "You agreed when you clicked. Trust us.",
    "All actions are monitored.",
    "Personality profile: updated.",
  ];

  const count = Math.floor(Math.random() * 8) + 4;

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      createPopup(
        titles[Math.floor(Math.random() * titles.length)],
        messages[Math.floor(Math.random() * messages.length)]
      );
    }, i * 400);
  }
}

function createPopup(title, message) {
  const popup = document.createElement("div");
  popup.classList.add("popupw-windoww");

  const titleBar = document.createElement("div");
  titleBar.classList.add("popupw-title");
  titleBar.innerText = title;

  const content = document.createElement("div");
  content.classList.add("popupw-content");
  content.innerText = message;

  popup.appendChild(titleBar);
  popup.appendChild(content);
  document.body.appendChild(popup);

  popup.style.top = Math.floor(Math.random() * (window.innerHeight - 100)) + "px";
  popup.style.left = Math.floor(Math.random() * (window.innerWidth - 200)) + "px";

  setTimeout(() => {
    popup.remove();
  }, 7000);
}

triggerRandomPopups();

window.onload = () => {
  generateCaptcha(); 
};

// Show the cookie banner after 1 second






// let palette = ["#2c695a", "#4ad6af", "#7facc6", "#4e93cc"];
// let startTime;
// let isDrawing = true; // A flag to control whether we are drawing or not

// function setup() {
//   createCanvas(120, 150, WEBGL);
//   background(57, 44, 169);

//   // Scale brushes to adapt to canvas size
//   brush.scaleBrushes(0.5);

//   // Activate the flowfield we're going to use
//   brush.field("seabed");

//   startTime = millis(); // Record the start time
// }

// function draw() {
//   blendMode(OVERLAY);
//   // Stop drawing after 5 seconds and reset
//   if (millis() - startTime >= 3000) {
//     isDrawing = false; // Stop drawing
//     background(57, 44, 169); // Reset the background
//     startTime = millis(); // Reset the timer
//     isDrawing = true; // Start drawing again
//   }

//   if (isDrawing) {
//     translate(-width / 2, -height / 2);

//     // Draw animated rectangles
//     noFill();
//     stroke("#fffceb"); // Cream stroke for rectangles
//     strokeWeight(1);

//     let rectSize = random(10, 20);
//     rect(random(width), random(height), rectSize, rectSize);

//     // Brush Rain Effect
//     let available_brushes = brush.box();
//     brush.set(random(available_brushes), random(palette), 10);
//     brush.flowLine(random(width), random(height), random(300, 800), random(0, 360));
//   }
// }

// let palette = ["#2c695a", "#4ad6af", "#7facc6", "#4e93cc"];
// let startTime;
// let isDrawing = true; // A flag to control whether we are drawing or not

// function setup() {
//   createCanvas(1500, 1200, WEBGL);
//   background(57, 44, 169); // Set initial background
//   // Scale brushes to adapt to canvas size
//   brush.scaleBrushes(0.5);
  
//   // Activate the flowfield we're going to use
//   brush.field("seabed");
  
//   startTime = millis(); // Record the start time
// }

// function draw() {
//   // blendMode(OVERLAY);
  
//   // Stop drawing after 3 seconds and reset
//   if (millis() - startTime >= 2000) {
//     isDrawing = false; // Stop drawing
//     background(57, 44, 169); // Reset the background (you can also keep this fixed, if preferred)
//     startTime = millis(); // Reset the timer
//     isDrawing = true; // Start drawing again
//   }
  
//   if (isDrawing) {
//     // Draw on top of the existing content
//     translate(-width / 2, -height / 2); // Center the drawing
    
//     // Draw animated rectangles
//     noFill();
//     stroke("#fffceb"); // Cream stroke for rectangles
//     strokeWeight(1);

//     let rectSize = random(10, 20);
//     rect(random(width), random(height), rectSize, rectSize);
    
//     // Brush Rain Effect
//     let available_brushes = brush.box();
//     brush.set(random(available_brushes), random(palette), 10);
//     brush.flowLine(random(width), random(height), random(100, 200), random(0, 160));
//   }
// }
