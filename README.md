# HTML-CSS-Javascript-Tutorial-Work
HTML/CSS/JavaScript Tutorial Mini Projects and Lessons made in VSCode Editor

[**How to Download and Run the Code:**]

- Clone the repository using git command tools [git clone (name of repository link at the top)]
- Open the whole repository with all the HTML files, scripts, images and styles in a text editor (Preferably VSCode)
- Enable Live Server in the extensions to be able to open the code and manipulate any of the code to change, etc.

**First Project:** [Cart Quantity Button Website]

**Description:** This was the first project that I completed that involved making 10 buttons that add or remove items into a Cart Quantity variable and displaying it on the HTML document. 

https://github.com/metoajagu/HTML-CSS-Javascript-Tutorial-Work/assets/157914585/aa39def3-1e76-448c-8373-a20f8562d916

**Lesson Takeaways:**

- This project focused on displaying html components on the page using querySelector as well as using the onclick attribute to button elements on the document
- This project was where I was first introduced to JavaScript functions and how they can be called and used in button html elements
- The use of JavaScript specific string syntax with string interpolation and tick mark string [`${}`] and using that to directly change the innerHTML attribute of specific buttons selected by querySelector

**Bugs/Things that Need to be Fixed**
- The -2 and -3 buttons make the Cart Quantity go into the negative. This is most likely due to the logic in the code that will be fixed and updated.

**Second Project:** [iPhone Calculator Replica]

**Description:** This project utilized all three languages and showed me the core foundation of implementing efficient CSS code along with displaying resulting calculation into empty html elements in the document.

https://github.com/metoajagu/HTML-CSS-Javascript-Tutorial-Work/assets/157914585/74065bf3-6476-4f2c-a0b2-8c0c125be17e

**Lesson Takeaways:**

- This project focused on using function with specific parameters set in each of them. Each operation button calls the updateCalculation with a specific string parameter corresponding to the operation symbol.
- A big emphasis of this project was using JavaScript localStorage object to store values in memory and retrieving it later. In the updateCalculation function after each operator or number was added to the calculation variable, it saves that to a localStorage memory using the setItem() function whilst stringifying the calculation string using the JSON object
- Using the DOM to modify the calculation and displaying it on the HTML
- The use of the eval() function to evaluate the calculation being done, this was relieving seeing as though I thought I would have to manually hard code each type of operation based on what the operator was
- CSS-wise, I learned some quick tactics about rgb values, how to get a perfect symmetrical circle by setting the width and the height the same and setting the border-radius by half of that.

**Bugs/Things that Need to Be Fixed:**

- In terms of CSS, not much here I think everything looks pretty solid
- In terms of JavaScript, the logic for my updateCalculation function can probably be simplified and coded a lot cleaner
- Instead of using the onclick attribute on the buttons I could have added an addEventListener to the buttons and when the button is clicked run the function there, it would make the HTML code look cleaner.

**Third Project:** [Rock Paper Scissors Game:]

**Description:** This project focused on making efficient JavaScript using the built in functions like setInterval(), fucntions short cuts like () => {}, function () {}, etc. The use of event listeners, creating JavaScript objects and using/changing/displaying them on the HTML document, making an auto playing feature using the DOM and event listeners and storing the local score using localStorage object and parsing it using JSON object's method parse()


https://github.com/metoajagu/HTML-CSS-Javascript-Tutorial-Work/assets/157914585/58a012c2-78b8-4717-ba89-2d1d34af2145

**Lessons/Takeaways:**

- This project was pretty cool to make, it built off using the DOM with inserting HTML code specifically into HTML elements using specifc class names. The moves selected by both the player and the computer were displayed in the DOM using html code in string format and setting the innerHTML of an empty <p> element with a class name to a picture of the button and used string interpolation with the playerMove and computerMove to show what move was chosen
- Logic was really important in this code for example when and where you update the score of the games you've played, once the logic for the game was completed, the score was updated.
- This project also introduced and taught me about JavaScript objects and how they work. The score seen on the game is an imprint of the score object values and the reset button actually directly resets the score attributes by using an eventListener and selecting the reset button class and setting the score object wins, ties and losses back to 0 while removing the previous saved score in the localStorage out.
- Advanced functions like the setInterval were also important for the autoplaying button feature, this showed me how each interval has a specific id that is saved while the interval of time is going and running the code each time.
- Calling functions within functions was also a major component of how the game works, after the game is played and a winner is shown, the updateScoreElement function is called right after to update the shown score on the document.
- Understanding JSON and how it can turn objects into JSON code was an emphasis in this project, when the score object is updated the object is then set in localStorage using the setItem() function where the score object is turned into JSON code using stringify(), likewise, the getItem() function in localStorage is used to along with JSON.parse() to retrieve the saved score in the local memory.
- A final feature that was implemented in the is game is being able to play the game using the keyboard. This feature emphasized the use of addEventListener with the 'keydown' attribute. This logic involved using an event parameter in the function that is ran in the addEventListene function. Conditional if statements were used to check if event.key was a specific letter and running the game with the corresponding player move. I also added a event.key branch to autoplay the game using a.

**How to Play:**

- Press R key to select 'Rock', P key to select 'Paper', S key to select 'Scissors', A key to Autoplay and Enter to reset the score

**Bugs/Things to BE Fixed:**

- I don't think there is really much to be fixed per say.
- Maybe the logic for the JavaScript can be simplified down to be less code or at least cleaner code.



**Fourth Project:** [To Do List:]

**Description:** This project is a quick To-Do list that focused on understanding arrays and setting/using JavaScript Objects


https://github.com/metoajagu/HTML-CSS-Javascript-Tutorial-Work/assets/157914585/325d07f6-7e18-4876-811d-fbe23e6d44df



**Lessons/Takeaways:**
- This project introduced me to how arrays work in JavaScript, pushing values onto the array and removing values as well
- Input elements and how to get the values out of them using the DOM [.value instead of .innerHTML]
- Looping through arrays using forEach() functions and running a function for each index and value in the array. In  this case in the todoList array after a task object is added to the array from the addTodo() function, the renderTodoList() function takes each object element in the array and sets constant variables name and dueDate into from the object it is on in the iteration. Using this an html variable is built using string interpolation and this variable is then added to the DOM using querySelector and an empty <div> element that is a CSS grid
- This also emphasized the use of CSS grid and setting up the columns in the grid
- Introduced the input with type = "date" to get a date selector
- The delete button logic showed the use of the splice() function in selecting a specific index and slicing a select number of elements as well as using forEach to loop through all elements with a specific class name [querySelectorAll()] and adding eventListeners to generate the button when the todolist task is added to the grid
- The delete button also showed how whole html buttons can be added to a the DOM and this actually how the delete button is generated
- For each To Do added to the DOM, a delete button is generated with each entry, this delete button is directly entered to each 

**Bugs/Things to BE Fixed:**

- I don't think there is really much to be fixed per say.
- Similarly the logic for the JavaScript here can be simplified down to be less code or at least cleaner code.





