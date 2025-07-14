function createShootingStar() {
  const shootingStar = document.createElement('div');
  shootingStar.className = 'shooting-star';
  
  
  shootingStar.style.left = Math.random() * 120 + '%';
  shootingStar.style.top = Math.random() * 80 + '%';
  
  
  const size = Math.random() * 3 + 1;
  shootingStar.style.width = size + 'px';
  shootingStar.style.height = size + 'px';
  
  
  const colors = [
    'rgba(255, 255, 255, 0.9)',
    'rgba(200, 150, 255, 0.8)',
    'rgba(150, 100, 255, 0.7)',
    'rgba(255, 200, 255, 0.6)',
    'rgba(180, 120, 255, 0.8)'
  ];
  shootingStar.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Traînée plus longue et colorée
  const trail = document.createElement('div');
  trail.className = 'shooting-trail';
  trail.style.position = 'absolute';
  trail.style.top = '0';
  trail.style.left = '0';
  trail.style.width = (Math.random() * 100 + 80) + 'px';
  trail.style.height = '2px';
  trail.style.background = `linear-gradient(to right, ${shootingStar.style.backgroundColor}, transparent)`;
  trail.style.transform = 'translateX(-' + trail.style.width + ')';
  trail.style.borderRadius = '50%';
  shootingStar.appendChild(trail);
  

  const animationDuration = Math.random() * 2 + 2; // 2-4 secondes
  const animationDelay = Math.random() * 1;
  
  shootingStar.style.animationDuration = animationDuration + 's';
  shootingStar.style.animationDelay = animationDelay + 's';
  

  const directions = [
    'shootingStarDiagonal',
    'shootingStarHorizontal',
    'shootingStarVertical',
    'shootingStarCurved'
  ];
  shootingStar.style.animationName = directions[Math.floor(Math.random() * directions.length)];
  
  document.querySelector('.shooting-stars').appendChild(shootingStar);
  
  // Ajouter un effet de scintillement
  setTimeout(() => {
    shootingStar.style.boxShadow = `0 0 ${size * 3}px ${shootingStar.style.backgroundColor}`;
  }, animationDelay * 1000);
  
  setTimeout(() => {
    shootingStar.remove();
  }, (animationDuration + animationDelay) * 1000 + 1000);
}


function createMultipleShootingStars() {
  const count = Math.floor(Math.random() * 3) + 1; // 1-3 étoiles à la fois
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      createShootingStar();
    }, i * 200); 
  }
}


const style = document.createElement('style');
style.textContent = `
  .shooting-star {
    position: absolute;
    border-radius: 50%;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
  }
  
  .shooting-trail {
    filter: blur(0.5px);
  }
  
  @keyframes shootingStarDiagonal {
    0% {
      transform: translateX(0) translateY(0) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
      transform: scale(1);
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateX(400px) translateY(300px) scale(0.3);
      opacity: 0;
    }
  }
  
  @keyframes shootingStarHorizontal {
    0% {
      transform: translateX(0) translateY(0) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
      transform: scale(1);
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateX(500px) translateY(50px) scale(0.3);
      opacity: 0;
    }
  }
  
  @keyframes shootingStarVertical {
    0% {
      transform: translateX(0) translateY(0) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
      transform: scale(1);
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateX(100px) translateY(400px) scale(0.3);
      opacity: 0;
    }
  }
  
  @keyframes shootingStarCurved {
    0% {
      transform: translateX(0) translateY(0) scale(0) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
      transform: scale(1) rotate(15deg);
    }
    50% {
      transform: translateX(200px) translateY(100px) scale(1) rotate(30deg);
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateX(450px) translateY(350px) scale(0.3) rotate(45deg);
      opacity: 0;
    }
  }
  
  
  .space-background {
    background: radial-gradient(ellipse at center top, 
      rgba(40, 20, 60, 0.9) 0%, 
      rgba(30, 15, 50, 0.95) 30%, 
      rgba(20, 8, 40, 0.98) 60%, 
      rgb(10, 0, 20) 100%) !important;
    animation: spaceShiftPurple 20s ease-in-out infinite !important;
  }
  
  @keyframes spaceShiftPurple {
    0%, 100% {
      background: radial-gradient(ellipse at center top, 
        rgba(40, 20, 60, 0.9) 0%, 
        rgba(30, 15, 50, 0.95) 30%, 
        rgba(20, 8, 40, 0.98) 60%, 
        rgb(10, 0, 20) 100%);
    }
    50% {
      background: radial-gradient(ellipse at center top, 
        rgba(60, 25, 80, 0.9) 0%, 
        rgba(45, 20, 65, 0.95) 30%, 
        rgba(30, 10, 50, 0.98) 60%, 
        rgb(15, 0, 30) 100%);
    }
  }
  
  
  .horizon-curve::before {
    background: radial-gradient(circle at center, 
      rgba(200, 150, 255, 0.15) 0%, 
      rgba(150, 100, 255, 0.12) 10%, 
      rgba(100, 50, 200, 0.08) 20%, 
      rgba(80, 40, 150, 0.04) 30%, 
      transparent 40%) !important;
    border-color: rgba(200, 150, 255, 0.3) !important;
  }
  
  @keyframes horizonPulsePurple {
    0%, 100% {
      border-color: rgba(200, 150, 255, 0.3);
      box-shadow: 0 0 20px rgba(200, 150, 255, 0.2);
    }
    50% {
      border-color: rgba(255, 200, 255, 0.5);
      box-shadow: 0 0 40px rgba(255, 200, 255, 0.3);
    }
  }
  
  
  .star-field {
    background-image: 
      radial-gradient(1px 1px at 20px 30px, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(1px 1px at 40px 70px, rgba(200, 150, 255, 0.6), transparent),
      radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.7), transparent),
      radial-gradient(1px 1px at 130px 80px, rgba(150, 100, 255, 0.5), transparent),
      radial-gradient(1px 1px at 160px 30px, rgba(255, 200, 255, 0.8), transparent),
      radial-gradient(1px 1px at 200px 60px, rgba(255, 255, 255, 0.6), transparent),
      radial-gradient(1px 1px at 250px 90px, rgba(180, 120, 255, 0.7), transparent),
      radial-gradient(1px 1px at 300px 20px, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(2px 2px at 50px 120px, rgba(200, 150, 255, 0.4), transparent),
      radial-gradient(2px 2px at 180px 150px, rgba(255, 200, 255, 0.5), transparent) !important;
    opacity: 0.6 !important;
  }
`;
document.head.appendChild(style);


setInterval(() => {
  createMultipleShootingStars();
}, Math.random() * 2000 + 1000);


setTimeout(() => {
  createMultipleShootingStars();
}, 1000);


setInterval(() => {
  if (Math.random() < 0.3) { 
    createShootingStar();
  }
}, 500);

// one day i will integrate you when i am better at memory management 🥹