let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  let x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "kirim";
  } else {
    document.getElementById("nextBtn").innerHTML = "selanjutnya";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  let x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  let x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("outer-step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  let i, x = document.getElementsByClassName("outer-step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
  
    let step = document.querySelectorAll(".outer-step");
    step.forEach( el => {
        if(el.classList.contains("finish") == true){
            el.firstChild.nextSibling.innerHTML = "✔"    
        }

    } )
}
let outerStep = document.querySelectorAll(".outer-step")
let bar = document.querySelector(".progress-bar");
value = parseInt(bar.ariaValueMax) / outerStep.length
valueStart = JSON.stringify(value)
bar.ariaValueNow = valueStart;
bar.style.width = valueStart + "%"

valueBar = parseInt(bar.ariaValueNow)


let prevBtn = document.getElementById("prevBtn")
let nextBtn = document.getElementById("nextBtn")
let rows = document.querySelectorAll(".tab .row")

// nextBtn.addEventListener("click", function(){
//   rows.forEach( row => {
//     let ch = row.querySelectorAll("input")
//     ch.forEach(el =>{
//       valueBar += value;
//       if(el.style.backgroundColor == "#ffdddd"){
//         valueBar -= value;
//       }
//     })
//   } )
  
//   strValue = JSON.stringify(valueBar)
//   bar.ariaValueNow = strValue;
//   bar.style.width = strValue + "%"
// })


nextBtn.addEventListener("click", function(){
  valueBar += value;
  strValue = JSON.stringify(valueBar)
  bar.ariaValueNow = strValue;
  bar.style.width = strValue + "%"
})
prevBtn.addEventListener("click", function(){
  
  valueBar -= value;
  strValue = JSON.stringify(valueBar)
  bar.ariaValueNow = strValue;
  bar.style.width = strValue + "%"
})








