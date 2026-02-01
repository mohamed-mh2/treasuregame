# 🗺️ Treasure Hunt Game (JavaScript)

A simple **Treasure Hunt** game built using **pure JavaScript**.  
The game runs entirely in the **console** (no HTML, no UI), as part of a learning exercise.

---

## 📌 Description

The game represents a straight line map with numbered positions.  
The player moves **left** or **right** trying to find a hidden treasure before running out of moves.

This project was built to practice:
- Variables
- Functions
- Conditions (`if / else`)
- Loops
- Arrays
- Basic game logic

---

## 🎮 How the Game Works

- The map is a one-dimensional array.
- The player starts at a chosen position.
- A treasure is placed randomly on the map (not on the player).
- Each move:
  - Updates the player position
  - Decreases the remaining steps
- The game ends when:
  - ✅ The player finds the treasure
  - ❌ The player runs out of steps

All results are printed in the **console**.

---

## 🕹️ Controls

The game accepts the following moves:
- `"right"`
- `"left"`

Any invalid move is ignored and does not crash the program.

---

## 🧠 Game Rules

- The player cannot move outside the map.
- Each valid move consumes one step.
- Once the game is over, no more moves are allowed.
- A message is printed when the game ends.

---

## ▶️ How to Run

1. Open the project in **VS Code**
2. Make sure you have **Node.js** installed
3. Run the file from the terminal:

```bash
node game.js
