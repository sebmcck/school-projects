# Pong AI

Hugo Aragon Franchi and I placed 2nd overall in the University of Toronto EngSci Pong AI Tournament in 2025. This repository features our bot (pong_ai.py), a demonstration bot that simply chases the ball (chaser_ai.py), and the game environment (PongAIvAI.py).

## How it works

- Tracks the ball position, velocity, and wall positions.
- If ball is moving away, centre the paddle.
- If ball is moving towards paddle, hit the ball into the corner which is farthest from the opponents paddle.

## How to run

```bash

python PongAIvAI.py
```
