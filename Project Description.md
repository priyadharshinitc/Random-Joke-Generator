# Random Joke Generator

## Description
The **Random Joke Generator** is a fun and interactive website where users can view jokes based on a specific category. Users can enter a category (e.g., `animal`, `travel`, etc.) in the input field, and upon clicking the button, a joke from the selected category is displayed. The application uses the Chuck Norris API to fetch jokes.

If a specific category is not available, an error message will be displayed:

```
No jokes for category "<category>" found. Available lists are animal, career, celebrity, dev, explicit, fashion, food, history, money, movie, music, political, religion, science, sport, travel.
```

## Features
- **Dynamic Joke Fetching**: Fetch jokes based on user-input categories.
- **Error Handling**: Displays a helpful message if the entered category is invalid or unavailable.
- **Responsive Design**: Optimized for use on all devices, including desktops, tablets, and mobile phones.

## Tech Stack
- **Frontend**: React
- **State Management**: Redux Toolkit, React-Redux
- **HTTP Requests**: Axios

## Deployment
The website is deployed on **Vercel** for seamless access and usage.

## How to Use
1. Enter a category (e.g., `animal`, `travel`) in the input field.
2. Click the button to fetch a joke.
3. If the category is valid, a joke will appear. If not, an error message will guide you.

## Available Categories
- `animal`
- `career`
- `celebrity`
- `dev`
- `explicit`
- `fashion`
- `food`
- `history`
- `money`
- `movie`
- `music`
- `political`
- `religion`
- `science`
- `sport`
- `travel`

## Installation and Setup
1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd random-joke-generator
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open your browser and navigate to `http://localhost:3000`.

## Deployment Link
[Random Joke Generator on Vercel][https://random-joke-generator-mu-swart.vercel.app/]

---

### Contributions
Contributions are welcome! Feel free to fork the project and submit a pull request.

## Error Makes Clever
This project was developed while learning Full-stack web development through Error Makes Clever.

Thank you for visiting my website. Enjoy the jokes and happy coding! 🎉
