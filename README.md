# ❌ ⭕️ Tic Tac Toe

#### Overview

Tic Tac Toe is a classic children's game involving two players alternatively marking squares on a three-by-three grid. While the game play can be considered relatively simple for humans, creating the logic in code is considerably more challenging.

#### Learning Objectives

- can create a logic component to handle the game play
- can pass data and behavior from a parent component to a nested component with props
- can effectively work within a team to achieve a desired outcome

#### Additional Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Render](https://render.com/docs/deploy-create-react-app)

#### Process

- One person on the team accepts the group assignment from GitHub classroom
- Create a team name
- Add additional team members via GitHub handle
- Clone the newly created repository
- `cd` into the repository
- Run $ `yarn` to install the React dependencies
- Create a new branch following the naming instructions described below
- Open the repository in a text editor
- Code!

#### Useful Commands

- $ `yarn start`
- control + c (stops the server)
- command + t (opens a new terminal tab)

#### Troubleshooting Tips

- Is your server running?
- Are your components exported?
- Inspect the page and look for errors in the console tab.
- Always look at the first error message in the list.

---

### Tic Tac Toe

This is a web game for two players who are taking turns on one device. You will have to use the component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React as well as be an exercise in creating good user experiences.

When creating a project, it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. `App.js` controls of all the data in state, renders the other components, and performs the game logic.

### Win Condition

The win condition is one of the most challenging aspects of coding Tic Tac Toe. Take some time with your team to discuss the different possibilities. It can be helpful to define the logic by writing it out in regular English words.

There is an interesting approach to the [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840) here. However, this code should NOT be used as is. It must be refactored. The tools used in this example are not current best practices in React. It is provided here as inspiration.

---

### 📚 User Stories

- As a user, I can see a three by three grid game board on the page.
    - we created a map function inside a div container and styled it to make it look like a grid
- As a user, I can click on a square to mark it.
    - we added an onClick method and a function that handle the marking of the squares  
- As a user, my partner can click on a square after me and see their mark.
    - we refactored the handleClick function so that there were turns and a different mark in each turn
    - we create a conditional that evaluate if the "value" was false then to put an x and if the value was true to put a zero and, in each conditional statement we updated the set squares and updated the set value back to false or true to be able to have an interactive app.  
- As a user, I can't click on a square that has already been marked.
     - first we checked if the square is not already marked and that also ensures that if its marked then nothing happens and so the player cant click on it twice, then we created a nested if statement that checked if the value was false or true to assign it the right symbol and then we updated it in the board.   
- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally), I can see a notice telling me which player won.
    -We started by noting which indexes have been clicked
    -We create a variable with the winning array of indexes 
    -We create a function that checks if 3 of the x's or 3 of the o's are lined up horizontally, vertically or diagonally
    -We used a for loop to iterate through all the arrays and if one of those arrays matches the user input, then its a winner. 
    -We create conditional statements that checked if the o's or the x's match one of the array combinations, and declare a winner   
- As a user, I can't play the game after the game has been won. 
    -We added a condition to the handleclick function so that you can only click if there is no winner 
- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
    -We added another if statement that checked if the lenght of the selected X and selected O was equal to 9 meaning that all squares are clicked and return a message saying that the game has ended, no winners
- As a user, I can click on a restart button that will clear the game board.
    -We created a button that when onclick, it triggers the function and restarts the game
    -We created a function that sets all the states to their original value 
    -We added the button in the Square.js and call it in the App.js
    

### 🏔 Stretch Goals

- As a user, I can see pleasant stylings on the application.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).
