import React, { useRef, useEffect } from 'react';

const PI = Math.PI;

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const colors = [  '#0D47A1',  '#1565C0',  '#1976D2',  '#1E88E5',  '#2196F3',];

function branch(ctx, props) {
  let {
    x,
    y,
    thickness,
    width,
    loss,
    direction,
    angle,
    color,
  } = props;

  const proba = 0.9;
  const amp = 0.025;

  // draw
  ctx.beginPath();
  ctx.moveTo(x, y);

  x += Math.cos(angle) * width;
  y += -Math.sin(angle) * width;

  ctx.strokeStyle = color;
  ctx.lineWidth = thickness;
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();

  thickness *= loss;
  width *= loss;

  if (direction) {
    angle -= amp;
  } else {
    angle += amp;
  }

  if (Math.random() >= proba) {
    branch(ctx, {
      x,
      y,
      thickness,
      width: 1.4 * width,
      loss,
      direction: !direction,
      angle,
      color,
    });
  }

  if (width > 1) {
    setTimeout(() => {
      branch(ctx, {
        x,
        y,
        thickness,
        width,
        loss,
        direction,
        angle,
        color,
      });
    }, 24);
  }
}

function Tree() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const cw = canvas.width = window.innerWidth;
    const ch = canvas.height = window.innerHeight;

    function draw(ci = 0) {
      branch(ctx, {
        x: cw / 2,
        y: ch + 10,
        thickness: 20,
        width: 35,
        loss: 0.9,
        direction: randInt(0, 1),
        angle: randInt(0, 16) * PI / 16,
        color: colors[ci],
      });

      setTimeout(() => {
        if (ci === colors.length) draw();
        else draw(++ci);
      }, 500);
    }

    draw();

    return () => {
      clearTimeout();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default Tree;
