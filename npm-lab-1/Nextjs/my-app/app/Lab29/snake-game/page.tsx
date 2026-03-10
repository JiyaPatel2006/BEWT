"use client";

import { useEffect, useState } from "react";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 8, y: 8 }];
const INITIAL_FOOD = { x: 5, y: 5 };

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [gameOver, setGameOver] = useState(false);

  const moveSnake = () => {
    if (gameOver) return;

    const newSnake = [...snake];
    const head = {
      x: newSnake[0].x + direction.x,
      y: newSnake[0].y + direction.y,
    };

    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= GRID_SIZE ||
      head.y >= GRID_SIZE
    ) {
      setGameOver(true);
      return;
    }

    if (newSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      });
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const restartGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection({ x: 1, y: 0 });
    setGameOver(false);
  };

  return (
    <div className="container">
      <h1>🐍 Snake Game</h1>

      {gameOver && (
        <div className="gameOverBox">
          <h2>Game Over</h2>
          <button onClick={restartGame}>Start Game</button>
        </div>
      )}

      <div
        className="board"
        style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 26px)` }}
      >
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
          const x = i % GRID_SIZE;
          const y = Math.floor(i / GRID_SIZE);

          const snakeIndex = snake.findIndex(
            (segment) => segment.x === x && segment.y === y
          );

          const isHead = snakeIndex === 0;
          const isSnake = snakeIndex !== -1;
          const isFood = food.x === x && food.y === y;

          return (
            <div key={i} className="cell">
              {isSnake && (
                <div className={`snake ${isHead ? "head" : ""}`}>
                  {isHead && (
                    <>
                      <div className="eye left"></div>
                      <div className="eye right"></div>
                    </>
                  )}
                </div>
              )}

              {isFood && <div className="food"></div>}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 40px;
          font-family: Arial;
        }

        .board {
          display: grid;
          background: #141515;
          padding: 8px;
          border-radius: 12px;
          border: 2px solid #0f0f0f;
        }

        .cell {
          width: 26px;
          height: 26px;
          position: relative;
          border: 1px solid #4d4a4a;
          box-sizing: border-box;
        }

        .snake {
          width: 100%;
          height: 100%;
          background: #4caf50;
          border-radius: 8px;
        }

        .head {
          background: #2e7d32;
          position: relative;
        }

        .eye {
          width: 5px;
          height: 5px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 7px;
        }

        .eye.left {
          left: 6px;
        }

        .eye.right {
          right: 6px;
        }

        .food {
          width: 100%;
          height: 100%;
          background: #ff4d4d;
          border-radius: 50%;
        }

        .gameOverBox {
          margin-bottom: 15px;
          text-align: center;
        }

        button {
          margin-top: 10px;
          padding: 8px 16px;
          font-size: 16px;
          border: none;
          background: #4caf50;
          color: white;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #388e3c;
        }
      `}</style>
    </div>
  );
}