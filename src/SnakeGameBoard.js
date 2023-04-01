import React, { useState, useEffect, useRef } from 'react';
import './SnakeGameBoard.css';
import SpeedButtons from './SpeedButtons';

const BOARD_SIZE = 12;
const CELL_SIZE = 50;

const SnakeGameBoard = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 2, y: 2 }]);
  const [direction, setDirection] = useState('right');
  const [speed, setSpeed] = useState(2000)
  const [isGameStarted, setIsGameStarted] = useState(false); // Add this state
  const [apple, setApple] = useState({ x: Math.floor(Math.random() * BOARD_SIZE), y: Math.floor(Math.random() * BOARD_SIZE) });

  const drawCell = (context, x, y, color) => {
    context.fillStyle = color;
    context.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    context.strokeStyle = '#ccc';
    context.strokeRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  };

  const generateNewApple = () => {
    let newApple = { x: Math.floor(Math.random() * BOARD_SIZE), y: Math.floor(Math.random() * BOARD_SIZE) };
    while (snake.some(segment => segment.x === newApple.x && segment.y === newApple.y)) {
      newApple = { x: Math.floor(Math.random() * BOARD_SIZE), y: Math.floor(Math.random() * BOARD_SIZE) };
    }
    setApple(newApple);
  };

  const checkAppleCollision = (newHead) => {
    return newHead.x === apple.x && newHead.y === apple.y;
  };

  const drawBoard = (context) => {
    for (let x = 0; x < BOARD_SIZE; x++) {
      for (let y = 0; y < BOARD_SIZE; y++) {
        drawCell(context, x, y, 'white');
      }
    }
  };

  const drawSnake = (context) => {
    snake.forEach((segment) => drawCell(context, segment.x, segment.y, 'black'));
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        setDirection('up');
        break;
      case 'ArrowDown':
        setDirection('down');
        break;
      case 'ArrowLeft':
        setDirection('left');
        break;
      case 'ArrowRight':
        setDirection('right');
        break;
      default:
        break;
    }
  };
  const checkCollision = (newHead) => {
    // Check for wall collision
    if (
      newHead.x < 0 ||
      newHead.x >= BOARD_SIZE ||
      newHead.y < 0 ||
      newHead.y >= BOARD_SIZE
    ) {
      return true;
    }

    // Check for self-collision
    for (const segment of snake) {
      if (segment.x === newHead.x && segment.y === newHead.y) {
        return true;
      }
    }

    return false;
  };

  const moveSnake = () => {
    const newHead = { ...snake[0] };
    switch (direction) {
      case 'up':
        newHead.y -= 1;
        break;
      case 'down':
        newHead.y += 1;
        break;
      case 'left':
        newHead.x -= 1;
        break;
      case 'right':
        newHead.x += 1;
        break;
      default:
        break;
    }

    if (checkCollision(newHead)) {
      setIsGameStarted(false);
      setSnake([{ x: 2, y: 2 }]);
      setDirection('right');
      return;
    }

    if (checkAppleCollision(newHead)) {
        generateNewApple();
      } else {
        // Remove the tail only if the snake did not eat the apple
        snake.pop();
      }

    // Add the new head to the snake and remove the tail
    setSnake((prevSnake) => [newHead, ...prevSnake]);
  };

  useEffect(() => {
    if (!isGameStarted) return; // Add this line to prevent the snake from moving if the game hasn't started

    const intervalId = setInterval(moveSnake, speed);
    return () => clearInterval(intervalId);
  }, [snake, direction, speed, isGameStarted]); // Add 'isGameStarted' to the dependencies array

  const handleSpeedButtonClick = (newSpeed) => {
    if (!isGameStarted) {
      setIsGameStarted(true);
    }
    setSpeed(newSpeed);
  };
  const drawApple = (context) => {
    drawCell(context, apple.x, apple.y, 'red');
  };


  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    drawBoard(context);
    drawSnake(context);
    drawApple(context);
  }, [snake]);


  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="snake-game-container">
      <SpeedButtons setSpeed={handleSpeedButtonClick} />
      <canvas
        className="snake-game-board"
        ref={canvasRef}
        width={BOARD_SIZE * CELL_SIZE}
        height={BOARD_SIZE * CELL_SIZE}
      />
    </div>
  );
};


export default SnakeGameBoard;
