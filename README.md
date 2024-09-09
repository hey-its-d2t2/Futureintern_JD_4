# Snake Game

**Snake Game** is a classic game developed as part of **Task 4** for my **Future Intern internship**. This project implements the classic Snake Game using HTML, CSS, JavaScript, and Spring Boot. The game is designed to be engaging and easy to play directly from a web browser.

## Tech Stack

- **Frontend**:
  - HTML
  - CSS (Custom Styling)
  - JavaScript

- **Backend**:
  - Java
  - Spring Boot

- **Others**:
  - Maven (for project management)

## Features

- **Classic Gameplay**: Implementing the traditional Snake game mechanics with smooth and responsive controls.
- **Score Tracking**: Real-time score display and updates as the game progresses.
- **Game Over Handling**: Shows a popup with the final score and the option to restart the game.
- **Responsive Design**: Ensures the game interface is functional and visually appealing on various device sizes.
- **Sound Effects**: Audio cues for eating food and game over events.

## Usage

1. **Play the Game**
   - Access the game by navigating to `http://localhost:8080/` in your web browser.
   - Use the arrow keys to control the direction of the snake.

2. **Restart the Game**
   - When the game is over, a popup will appear with the final score and a "Restart" button. Click "Restart" to play the game again.

3. **Score Display**
   - The score is updated live on the game screen as the snake eats food.

## UI Screenshot
- **Game**
  ![Game](https://github.com/user-attachments/assets/4fddcba3-eded-4b8f-b8c1-b3975a11f2f3)
- **Game Over**
  ![Game Over](https://github.com/user-attachments/assets/368060a5-55c2-41be-94ab-e9957c05a196)

## API Endpoints

The Snake Game does not utilize traditional API endpoints but is served as a static HTML file with associated assets. The game logic and assets are all handled client-side with JavaScript and server-side with Spring Boot for serving the static content.

## Installation

- **1. Clone the Repository**

  ```bash
  git clone https://github.com/hey-its-d2t2/Snake-Game.git
  cd Snake-Game
  
- **2. Set Up the Backend**

  Navigate to the backend directory and build the Spring Boot application.

  ```bash
  cd backend
  ./mvnw spring-boot:run
  ```
- **3. Access the Game**

  Open the following URL in your browser to play the game.
  
  ```bash
  http://localhost:8080/
  ```
### Development
To contribute to this project or make modifications, please follow these guidelines:

- Ensure code adheres to project standards.
- Include appropriate tests for new features.
- submit pull requests with detailed descriptions of changes.
#### Acknowledgements
- Spring Boot: For providing a robust framework to serve static content.
- HTML/CSS/JavaScript: For implementing the game’s interface and functionality.
## Contact
For any questions or feedback, please contact me at deepsinghkumar01@gmail.com.
