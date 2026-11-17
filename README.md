# 🎰 Slot Machine | JavaScript Game

An interactive slot machine game project focused on **JavaScript programming, game logic, DOM manipulation, and user interaction**.

Originally developed as part of the **Resilient Coders Week 5 Bootcamp Challenge**, this project explores the logic behind a three-reel slot machine, including symbol matching, betting controls, and balance management.

Live Link: https://rkslotmachine.netlify.app

## 🎯 Project Overview

<img width="944" height="502" alt="image" src="https://github.com/user-attachments/assets/382771fd-7590-4bed-ba33-e0de031d54b2" />

The objective is to build a browser-based slot machine that allows players to place virtual bets, spin three reels, and track their remaining balance.

Each reel must contain at least five possible symbols. Players should be able to select minimum or maximum bets, with their total balance updating based on the results.

The project focuses on implementing interactive game mechanics using frontend programming concepts.

## ✨ Planned Features

- **Three spinning reels:** Each reel contains at least five possible symbols.
- **Randomized results:** Generate random symbols for each spin.
- **Minimum and maximum bets:** Allow players to choose between two betting amounts.
- **Balance tracking:** Update the player's virtual balance after each spin.
- **Interactive controls:** Use buttons to place bets and spin the reels.
- **Game logic:** Evaluate spin results and determine whether the player wins.
- **Dynamic interface:** Display reel results and updated totals on the webpage.

## 🛠️ Intended Technologies

| Technology | Purpose |
|---|---|
| HTML5 | Structure the slot machine interface |
| CSS3 | Style the reels, buttons, and layout |
| JavaScript | Implement randomization, betting, and game logic |
| DOM API | Update results and balances dynamically |
| Git & GitHub | Version control and project management |


## 🎮 How the Game Is Intended to Work

1. The player starts with a virtual balance.
2. The player selects either a minimum or maximum bet.
3. The player clicks the Spin button.
4. The application randomly selects a symbol for each of the three reels.
5. The game evaluates the resulting combination.
6. The player's balance updates according to the outcome.
7. The player can continue spinning while sufficient virtual credits remain.

The game uses simulated credits rather than real money.

## 🧠 Game Logic

### Reel Randomization

Each reel is represented by a collection of at least five symbols.

JavaScript can use `Math.random()` to generate random reel positions and select symbols.

### Betting System

The game tracks the player's available credits and selected bet amount.

Before each spin, the application should verify that the player has sufficient credits.

### Winning Conditions

The application compares the three reel results to determine whether the spin produces a winning combination.

A potential implementation could award credits for three matching symbols.

### Balance Management

After each spin, the application calculates the updated balance and displays it in the interface.
