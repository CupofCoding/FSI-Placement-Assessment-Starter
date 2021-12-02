// The +1 and –1 buttons are clickable for each cookie. This means that clicking them executes code and produces a noticable result of some kind. There are six buttons total.
// The +1 button for each cookie adds one to the appropriate cookie count.
// The –1 button for each cookie subtracts one from the appropriate cookie count.
// The table updates the appropriate table cell for the specific cookie when each cookie's +1 or -1 button is clicked.
// The table updates the total cell in the table footer that tallies all the cookie

// The Created By h2 element above the footer says Created By [YOUR NAME] instead of Created By Jane Doe, where [YOUR NAME] represents your real name. (Hint: You will be able to change this via JavaScript in your script.js file!)
// First, tell us your name
let yourName = "Anne Van" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type //added Queries
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let totals = gb + cc + sugar

let menu = document.querySelector('.menu')
const gbAdd = document.querySelector('#add-gb')
const gbSub = document.querySelector('#minus-gb')
const ccAdd = document.querySelector('#add-cc')
const ccSub = document.querySelector('#minus-cc')
const sugarAdd = document.querySelector('#add-sugar')
const sugarSub = document.querySelector('#minus-sugar')

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function () {
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons
// for (let i = 0; i < 1; i++) {

//Item One Gingerbread
gbAdd.addEventListener('click', function () {
    gb += 1
    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

gbSub.addEventListener('click', function () {
    if (gb > 0) { //condition to limit going past 0
        gb -= 1
        document.getElementById('qty-gb').textContent = gb
        document.getElementById('qty-total').textContent = gb + cc + sugar
    }
})

//Item Two Chocolate Chip
ccAdd.addEventListener('click', function () {
    cc += 1
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

ccSub.addEventListener('click', function () {
    if (cc > 0) {
        cc -= 1
        document.getElementById('qty-cc').textContent = cc
        document.getElementById('qty-total').textContent = gb + cc + sugar
    }
})

//Item Three Sugar Sprinkle
sugarAdd.addEventListener('click', function () {
    sugar += 1
    document.getElementById('qty-sugar').textContent = sugar
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

sugarSub.addEventListener('click', function () {
    if (sugar > 0) {
        sugar -= 1
        document.getElementById('qty-sugar').textContent = sugar
        document.getElementById('qty-total').textContent = gb + cc + sugar
    }
})