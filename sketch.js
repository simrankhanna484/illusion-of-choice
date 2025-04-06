// function generateQR() {
//   const input = document.getElementById("qr-input").value;
//   const container = document.getElementById("qr-container");

//   // Clear old QR
//   container.innerHTML = "";

//   // Create canvas
//   const canvas = document.createElement("canvas");
//   container.appendChild(canvas);

//   // Generate QR
//   const qr = new QRious({
//     element: canvas,
//     value: input,
//     size: 200, // Chunky bits
//     level: 'H'
//   });
// }

// function generateQR() {
//     let input = document.getElementById("qr-input").value;
//     if (!input) return;
//     document.getElementById("qrcode").innerHTML = "";
//     new QRCode(document.getElementById("qrcode"), {
//         text: input,
//         width: 128,
//         height: 128
//     });
//     triggerRandomPopups();
// }

// function triggerRandomPopups() {
//     const titles = [
//         "User Tracking Alert",
//         "Consent Required",
//         "Cookies Enabled",
//         "Marketing Data Access",
//         "Background Sync Running"
//     ];

//     const messages = [
//         "You're being watched. Smile!",
//         "By clicking anywhere, you accept everything.",
//         "Cookies enabled. Chocolate chip? No, spyware.",
//         "Behavioral patterns synced to cloud.",
//         "Mic and camera permissions granted. Wait... what?"
//     ];

//     const count = Math.floor(Math.random() * 4) + 2; // 2 to 5 popups

//     for (let i = 0; i < count; i++) {
//         setTimeout(() => {
//             createPopup(
//                 titles[Math.floor(Math.random() * titles.length)],
//                 messages[Math.floor(Math.random() * messages.length)]
//             );
//         }, i * 300);
//     }
// }

// function createPopup(title, message) {
//     const popup = document.createElement("div");
//     popup.classList.add("popup-window");

//     const titleBar = document.createElement("div");
//     titleBar.classList.add("popup-title");
//     titleBar.innerText = title;

//     const content = document.createElement("div");
//     content.classList.add("popup-content");
//     content.innerText = message;

//     popup.appendChild(titleBar);
//     popup.appendChild(content);

//     document.body.appendChild(popup);

//     popup.style.top = Math.floor(Math.random() * (window.innerHeight - 100)) + "px";
//     popup.style.left = Math.floor(Math.random() * (window.innerWidth - 200)) + "px";

//     setTimeout(() => {
//         popup.remove();
//     }, 7000);
// }



// let currentCaptcha = '';

// window.onload = generateCaptcha;

// function generateCaptcha() {
//   const canvas = document.getElementById('captcha');
//   const ctx = canvas.getContext('2d');
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Generate random captcha string
//   const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
//   currentCaptcha = '';
//   for (let i = 0; i < 6; i++) {
//     currentCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
//   }

//   // Draw distorted text
//   ctx.font = '28px Courier New';
//   ctx.setTransform(1, 0.1, 0.3, 1, 0, 0); // Skew
//   ctx.fillText(currentCaptcha, 20, 35);
// }

// function checkCaptcha() {
//   const userInput = document.getElementById('captcha-input').value.toUpperCase();
//   const result = document.getElementById('result');
//   if (userInput === currentCaptcha) {
//     result.textContent = '✓ Verified (but are you really you?)';
//     triggerRandomPopups();
//   } else {
//     result.textContent = '✗ Failed. Try again.';
//     generateCaptcha();
//   }
// }

const notSound = new Audio('sound/notification-sound-7062.mp3');

let generatedCaptcha = "";

function generateCaptcha() {
    const canvas = document.getElementById('captchaw');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous

    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    generatedCaptcha = '';
    for (let i = 0; i < 6; i++) {
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
        result.textContent = "CAPTCHA Verified!";
        result.style.color = "green";
    } else {
        result.textContent = "Incorrect CAPTCHA. Try again.";
        result.style.color = "red";
        generateCaptcha(); // Regenerate for retry
    }
}


function triggerRandomPopups() {
  notSound.play();
  const titles = [
    "We Know You",
    "Tracking Enabled",
    "Consent Implied",
    "Behavioral Sync",
    "Echo Detected"
  ];

  const messages = [
    "Identity stored in memory cache.",
    "You agreed when you clicked. Trust us.",
    "All actions are monitored.",
    "Personality profile: updated.",
    "Your shadow has been cloned."
  ];

  const count = Math.floor(Math.random() * 4) + 2;

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
  popup.classList.add("popup-window");

  const titleBar = document.createElement("div");
  titleBar.classList.add("popup-title");
  titleBar.innerText = title;

  const content = document.createElement("div");
  content.classList.add("popup-content");
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