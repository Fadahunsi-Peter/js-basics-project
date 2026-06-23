# Practice Exercises

I hope you have fun doing this!
Remember the 1% rule: do not rush. Take your time, consult the documentation, and don't be scared to break and fix the code. 
---

## Exercise 1: The Text Changer
Right now, the `<h1>` tag at the top of our page says "JavaScript Basics". Your first mission is to use a button to change that text dynamically.

**Your Tasks:**
1. Add a new `<button>` to your `index.html` file with the ID `change-text-btn`. Give it the text "Change Title".
2. In your `script.js`, use `document.querySelector` to grab both your new button and the `<h1>` element.
3. Add a `click` event listener to the button.
4. Inside the event listener, change the text of the `<h1>` to say "JavaScript is Awesome!". 
   * *Hint: Look up how to use the `.textContent` property in JavaScript!*

---

## Exercise 2: The Title Color Switcher
We already know how to change the background color of the entire page. Now, let's practice targeting the specific style of a single element.

**Your Tasks:**
1. Add another `<button>` to your HTML with the ID `color-btn`. Give it the text "Make Title Red".
2. In your `script.js`, grab this new button using `document.querySelector`.
3. Add a `click` event listener to it.
4. Inside the event listener, reach into the `style` property of your `<h1>` element and change its `color` to `red`.

---

## Exercise 3: The Click Counter (Boss Level)
This one requires you to combine DOM manipulation with a basic JavaScript variable. Let's track how many times a user clicks a button!

**Your Tasks:**
1. Add a new paragraph `<p>` to your HTML that says: `Total Clicks: <span id="click-count">0</span>`.
2. Add a `<button>` with the ID `count-btn` and the text "Click Me!".
3. In your `script.js`, create a new variable using `let` called `counter` and set its starting value to `0`.
4. Grab both your `count-btn` and your `click-count` span using `document.querySelector`.
5. Add a `click` event listener to the button.
6. Inside the event listener, do two things:
   * Increase your `counter` variable by 1 (e.g., `counter = counter + 1;` or `counter++;`).
   * Update the `.textContent` of your span element to display the new number.

---

### A Note on Getting Stuck
If your code isn't working, **do not panic**. 
* Did you forget a quotation mark?
* Did you misspell `querySelector`?
* Did you remember to save your file before refreshing the browser?

Open your browser's Developer Console (Right Click -> Inspect -> Console) to look for red error messages. Debugging is exactly what real software engineers do all day long.  

---
## SUBMISSION
You can share your repo link via mail (timilehinolajolo) or just fork and pull request directly on this repo