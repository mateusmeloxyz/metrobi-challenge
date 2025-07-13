/* alextade.me | All Rights Reserved. */

document.addEventListener("DOMContentLoaded", function () {
  // Variables for calculations
  let u1 = 50; // Achilles speed
  let u2 = 10; // Turtle speed
  let d1 = 10; // Initial distance
  let d2 = 12.5; // Total distance Achilles will travel
  let d2r = 12.5; // Rounded total distance
  let d3 = 80; // Percentage for initial turtle position
  let d3per = "80%"; // Percentage for initial turtle position as string
  let t = 0; // Time
  let l = 0; // Ratio of speeds

  // DOM Elements
  const calc = document.querySelector(".calc");
  const d2Output = document.querySelector(".d2-output > p > span");
  const turtle = document.querySelector(".turtle");
  const achilles = document.querySelector(".achilles");
  const both = document.querySelector(".both");
  const point2 = document.querySelector(".point2");
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");
  const hoursVal = document.querySelector(".hours > span");
  const minutesVal = document.querySelector(".minutes > span");
  const secondsVal = document.querySelector(".seconds > span");

  // Animation state
  let animationInProgress = false;
  let progressInterval;

  // Add animation controls to the page
  const graphicEl = document.querySelector(".graphic");
  const controlsHTML = `
    <div class="animation-controls">
      <button id="startAnimation" class="btn">Animate Paradox</button>
      <button id="resetAnimation" class="btn" disabled>Reset Animation</button>
    </div>
    <div class="animation-progress">
      <div class="path-markers">
        <span>Start</span>
        <span>End</span>
      </div>
      <div class="animation-progress-bar"></div>
    </div>
  `;

  // Insert the controls after the graphic element
  graphicEl.insertAdjacentHTML("afterend", controlsHTML);

  // Get references to the new elements
  const startButton = document.getElementById("startAnimation");
  const resetButton = document.getElementById("resetAnimation");
  const progressBar = document.querySelector(".animation-progress-bar");

  // Main calculation function
  function calcs() {
    calc.classList.remove("hey1");
    calc.classList.remove("hey2");

    if (u1 > 0 && u2 > 0 && d1 > 0) {
      if (u1 > u2) {
        l = u2 / u1;
        t = d1 / ((1 - l) * u1);
        d2 = d1 / (1 - l);

        d2r = Math.round(d2 * 10000) / 10000;
        d2Output.textContent = d2r;

        let decimalTime = t * 60 * 60;
        let hoursTime = Math.floor(decimalTime / (60 * 60));
        decimalTime = decimalTime - hoursTime * 60 * 60;
        let minutesTime = Math.floor(decimalTime / 60);
        decimalTime = decimalTime - minutesTime * 60;
        let secondsTime = Math.round(decimalTime);

        if (hoursTime > 0) {
          hours.classList.remove("hideit");
          hoursVal.textContent = hoursTime;
        } else {
          hours.classList.add("hideit");
        }

        if (minutesTime > 0) {
          minutes.classList.remove("hideit");
          minutesVal.textContent = minutesTime;
        } else {
          minutes.classList.add("hideit");
        }

        if (secondsTime > 0) {
          seconds.classList.remove("hideit");
          secondsVal.textContent = secondsTime;
        } else {
          seconds.classList.add("hideit");
        }

        /* For the graphic */
        d3 = (100 / d2) * d1;
        d3per = d3 + "%";
        turtle.style.left = d3per;
        point2.style.left = d3per;

        // Update animation duration based on calculated time
        // Cap between 2 and 10 seconds for user experience
        const animationDuration = Math.max(2, Math.min(10, t * 60));
        document.documentElement.style.setProperty(
          "--animation-duration",
          animationDuration + "s",
        );

        // Reset animation
        resetAnimation();

        // Enable animation button
        startButton.disabled = false;
      } else {
        calc.classList.add("hey2");
        startButton.disabled = true;
      }
    } else {
      calc.classList.add("hey1");
      startButton.disabled = true;
    }
  }

  // Animation functions
  function startAnimation() {
    if (animationInProgress) return;

    animationInProgress = true;

    // Disable start button, enable reset button
    startButton.disabled = true;
    resetButton.disabled = false;

    // Set initial positions
    turtle.style.left = d3per;
    achilles.style.left = "0%";
    both.style.left = "100%";
    both.style.opacity = "0";

    // Add animation classes
    achilles.classList.add("animate-achilles");
    turtle.classList.add("animate-turtle");
    both.classList.add("animate-both");

    // Get the computed animation duration
    const style = getComputedStyle(document.documentElement);
    const animDuration =
      parseFloat(style.getPropertyValue("--animation-duration")) * 1000;

    // Update progress bar
    let startTime = Date.now();

    progressInterval = setInterval(function () {
      let elapsedTime = Date.now() - startTime;
      let progress = Math.min(100, (elapsedTime / animDuration) * 100);
      progressBar.style.width = progress + "%";

      if (progress >= 100) {
        clearInterval(progressInterval);
      }
    }, 50);

    // Animation end event
    setTimeout(function () {
      animationInProgress = false;
      clearInterval(progressInterval);
      progressBar.style.width = "100%";
    }, animDuration);
  }

  function resetAnimation() {
    // Remove animation classes
    achilles.classList.remove("animate-achilles");
    turtle.classList.remove("animate-turtle");
    both.classList.remove("animate-both");

    // Reset positions
    achilles.style.left = "0%";
    turtle.style.left = d3per;
    both.style.left = "100%";
    both.style.opacity = "0";

    // Reset progress bar
    progressBar.style.width = "0%";

    // Reset button states
    startButton.disabled = false;
    resetButton.disabled = true;

    // Clear any running intervals
    if (progressInterval) {
      clearInterval(progressInterval);
    }

    animationInProgress = false;
  }

  // Event listeners for form inputs
  const inputs = document.querySelectorAll(".calc input");
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      u1 = Number(document.getElementById("u1").value);
      u2 = Number(document.getElementById("u2").value);
      d1 = Number(document.getElementById("d1").value);
      calcs();
    });
  });

  // Event listeners for animation buttons
  startButton.addEventListener("click", startAnimation);
  resetButton.addEventListener("click", resetAnimation);

  // Initialize calculations
  calcs();
});
