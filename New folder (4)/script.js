const heartsData = [
    "I love how you smile.",
    "You’re my safe place.",
    "You make everything better.",
    "You’re my favorite person.",
    "I adore your laugh.",
    "You’re my peace.",
    "You’re the reason I believe in magic.",
    "You’re my moon and stars.",
    "Your love is my biggest gift.",
    "You complete me."
  ];
  
  const heartContainer = document.getElementById('hearts-container');
  const welcome = document.getElementById('welcome');
  const game = document.getElementById('game');
  const final = document.getElementById('final');
  const bgMusic = document.getElementById('bg-music');
  
  let found = 0;
  
  function startGame() {
    welcome.style.display = 'none';
    game.style.display = 'block';
    bgMusic.play();
  
    heartsData.forEach((message, index) => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.top = `${Math.random() * 80 + 10}%`;
      heart.style.left = `${Math.random() * 80 + 10}%`;
      heart.title = "Click me!";
      heart.addEventListener('click', () => revealMessage(heart, message));
      heartContainer.appendChild(heart);
    });
  }
  
  function revealMessage(heart, message) {
    heart.remove();
    found++;
  
    const msg = document.createElement('div');
    msg.className = 'love-message';
    msg.textContent = message;
    game.appendChild(msg);
  
    setTimeout(() => msg.remove(), 2000);
  
    if (found === heartsData.length) {
      setTimeout(() => {
        game.style.display = 'none';
        final.style.display = 'flex';
        bgMusic.pause();
      }, 1000);
    }
  }
  