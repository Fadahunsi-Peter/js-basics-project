// ==========================================
// PART 1: The Alert Button (Say Hello)
// ==========================================

// 1. Tell JavaScript to search the DOM and grab the button by its ID
const helloBtn = document.querySelector('#hello-button');

// 2. Attach a security guard (Event Listener) to wait for a click
helloBtn.addEventListener('click', () => {
    // 3. The action to take when clicked
        alert('System Online: Welcome to JavaScript!');
        });


        // ==========================================
        // PART 2: The Dark Mode Switcher
        // ==========================================

        // 1. Grab the theme toggle button and the main body of the webpage
        const themeBtn = document.querySelector('#theme-button');
        const pageBody = document.body;

        // 2. Keep track of the current theme using a simple boolean variable
        let isDarkMode = false;

        // 3. Attach the Event Listener to the theme button
        themeBtn.addEventListener('click', () => {
            
                // 4. Toggle the theme based on the current state
                    if (isDarkMode === false) {
                            // Change to Dark Mode
                                    pageBody.style.backgroundColor = '#1a1a1a';
                                            pageBody.style.color = '#ffffff';
                                                    isDarkMode = true; // Update the state
                                                        } else {
                                                                // Change back to Light Mode
                                                                        pageBody.style.backgroundColor = '#f4f4f9';
                                                                                pageBody.style.color = '#333333';
                                                                                        isDarkMode = false; // Update the state
                                                                                            }
                                                                                                
                                                                                                });

                                                                                                // ==========================================
                                                                                                // EXERCISE 1: The Text Changer
                                                                                                // ==========================================

                                                                                                const changeTextBtn = document.querySelector('#change-text-btn');
                                                                                                const mainTitle = document.querySelector('h1');

                                                                                                changeTextBtn.addEventListener('click', () => {
                                                                                                    mainTitle.textContent = 'JavaScript is Awesome!';
                                                                                                    });

                                                                                                    // ==========================================
                                                                                                    // EXERCISE 2: The Title Color Switcher
                                                                                                    // ==========================================

                                                                                                    const colorBtn = document.querySelector('#color-btn');

                                                                                                    colorBtn.addEventListener('click', () => {
                                                                                                        mainTitle.style.color = 'red';
                                                                                                        });

                                                                                                        // ==========================================
                                                                                                        // EXERCISE 3: The Click Counter (Boss Level)
                                                                                                        // ==========================================

                                                                                                        const countBtn = document.querySelector('#count-btn');
                                                                                                        const clickCountDisplay = document.querySelector('#click-count');

                                                                                                        // Initialize the counter variable
                                                                                                        let counter = 0;

                                                                                                        countBtn.addEventListener('click', () => {
                                                                                                            // Increase the counter by 1
                                                                                                                counter++; 
                                                                                                                    
                                                                                                                        // Update the DOM to reflect the new number
                                                                                                                            clickCountDisplay.textContent = counter;
                                                                                                                            });
                                                                                                                    