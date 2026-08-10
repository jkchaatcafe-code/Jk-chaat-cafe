import { useEffect, useRef } from 'react';
import logo from '../assets/img/jk-chaat-cafe-logo.png';

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasEl = canvas;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D | null;
    if (!ctx) return;
    // Narrow ctx for inner classes to avoid possible 'null' checks inside methods
    const ctxNonNull = ctx as CanvasRenderingContext2D;
    let animationId: number;
    let particles = [];
    let steamParticles = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      const rect = parent ? parent.getBoundingClientRect() : canvas.getBoundingClientRect();
      canvas.width = rect.width || window.innerWidth;
      canvas.height = rect.height || window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Steam particles
    class SteamParticle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedY: number = 0;
      speedX: number = 0;
      opacity: number = 0;
      life: number = 0;
      decay: number = 0;
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * (canvasEl ? canvasEl.width : 0);
        this.y = (canvasEl ? canvasEl.height : 0) + 20;
        this.size = 15 + Math.random() * 30;
        this.speedY = 0.3 + Math.random() * 0.4;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.opacity = 0.15 + Math.random() * 0.15;
        this.life = 1;
        this.decay = 0.002 + Math.random() * 0.003;
      }
      update() {
        this.y -= this.speedY;
        this.x += this.speedX + Math.sin(this.y / 50) * 0.2;
        this.life -= this.decay;
        if (this.life <= 0 || this.y < -50) {
          this.reset();
          this.y = (canvasEl ? canvasEl.height : 0) + 20;
          this.life = 1;
        }
      }
      draw() {
        const opacity = this.opacity * this.life;
        const gradient = ctxNonNull.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(230, 230, 230, ${opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(200, 200, 200, 0)`);
        ctxNonNull.fillStyle = gradient;
        ctxNonNull.beginPath();
        ctxNonNull.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctxNonNull.fill();
      }
    }

    // Floating food particles
    class FoodParticle {
      size: number;
      angle: number;
      speed: number;
      rotation: number;
      rotationSpeed: number;
      oscillationSpeed: number;
      phase: number;
      driftX: number;
      x: number = 0;
      y: number = 0;
      type: number = 0;
      opacity: number = 1;
      scale: number = 1;
      constructor() {
        this.reset();
        this.size = 20 + Math.random() * 25;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 0.3 + Math.random() * 0.4;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.oscillationSpeed = 0.01 + Math.random() * 0.02;
        this.phase = Math.random() * Math.PI * 2;
        this.driftX = (Math.random() - 0.5) * 0.3;
      }
      reset() {
        this.x = 50 + Math.random() * (canvasEl.width - 100);
        this.y = 50 + Math.random() * (canvasEl.height - 100);
        this.type = Math.floor(Math.random() * 6);
        this.opacity = 0.5 + Math.random() * 0.4;
        this.scale = 0.8 + Math.random() * 0.4;
      }
      update() {
        this.phase += this.oscillationSpeed;
        this.y += Math.sin(this.phase) * 0.2;
        this.x += this.driftX;
        this.rotation += this.rotationSpeed;
        if (this.x < -50) this.x = canvasEl.width + 50;
        if (this.x > canvasEl.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvasEl.height + 50;
        if (this.y > canvasEl.height + 50) this.y = -50;
      }
      draw() {
        ctxNonNull.save();
        ctxNonNull.translate(this.x, this.y);
        ctxNonNull.rotate(this.rotation);
        ctxNonNull.scale(this.scale, this.scale);
        ctxNonNull.globalAlpha = this.opacity;
        this.drawFood(ctxNonNull);
        ctxNonNull.restore();
      }
      drawFood(ctx: CanvasRenderingContext2D) {
        const size = this.size;
        ctx.fillStyle = this.getColor();
        ctx.strokeStyle = this.getBorderColor();
        ctx.lineWidth = 1.5;

        switch(this.type) {
          case 0: // Coffee/Tea Cup
            ctx.beginPath();
            ctx.moveTo(-size*0.5, size*0.3);
            ctx.quadraticCurveTo(-size*0.6, -size*0.1, -size*0.3, -size*0.5);
            ctx.quadraticCurveTo(0, -size*0.7, size*0.3, -size*0.5);
            ctx.quadraticCurveTo(size*0.6, -size*0.1, size*0.5, size*0.3);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            // Steam from cup
            ctx.strokeStyle = 'rgba(200,200,200,0.5)';
            ctx.lineWidth = 2;
            for(let i = -2; i <= 2; i++) {
              ctx.beginPath();
              ctx.moveTo(i*4, -size*0.5);
              ctx.quadraticCurveTo(i*4 - 2, -size*0.8, i*4 + 3, -size*1.1);
              ctx.stroke();
            }
            break;
          case 1: // Burger
            ctx.fillStyle = '#D4A574';
            ctx.beginPath();
            ctx.ellipse(0, size*0.2, size*0.6, size*0.15, 0, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#4B7F52';
            ctx.beginPath();
            ctx.ellipse(0, size*0.05, size*0.55, size*0.12, 0, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#D4735E';
            ctx.beginPath();
            ctx.ellipse(0, -size*0.1, size*0.5, size*0.12, 0, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#F2A93B';
            ctx.beginPath();
            ctx.ellipse(0, -size*0.25, size*0.5, size*0.12, 0, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#D4A574';
            ctx.beginPath();
            ctx.ellipse(0, -size*0.4, size*0.6, size*0.15, 0, 0, Math.PI*2);
            ctx.fill();
            break;
          case 2: // Pizza slice
            ctx.fillStyle = '#F2A93B';
            ctx.beginPath();
            ctx.moveTo(0, size*0.5);
            ctx.lineTo(-size*0.5, -size*0.3);
            ctx.lineTo(size*0.5, -size*0.3);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            // Toppings
            ctx.fillStyle = '#D4735E';
            ctx.beginPath();
            ctx.arc(-size*0.15, -size*0.05, size*0.08, 0, Math.PI*2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(size*0.15, -size*0.1, size*0.07, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#4B7F52';
            ctx.beginPath();
            ctx.arc(0, -size*0.2, size*0.06, 0, Math.PI*2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(-size*0.2, -size*0.25, size*0.05, 0, Math.PI*2);
            ctx.fill();
            break;
          case 3: // Chaat (bowl)
            ctx.fillStyle = '#8C2A1E';
            ctx.beginPath();
            ctx.ellipse(0, size*0.1, size*0.5, size*0.15, 0, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#F2A93B';
            ctx.beginPath();
            ctx.arc(0, size*0.1, size*0.4, 0, Math.PI);
            ctx.fill();
            ctx.fillStyle = '#D4735E';
            ctx.beginPath();
            ctx.arc(0, size*0.1, size*0.25, 0, Math.PI);
            ctx.fill();
            // Chaat items
            for(let i = 0; i < 6; i++) {
              const angle = (i / 6) * Math.PI;
              const r = size*0.15 + Math.random()*size*0.15;
              ctx.fillStyle = Math.random() > 0.5 ? '#4B7F52' : '#F2A93B';
              ctx.beginPath();
              ctx.arc(
                Math.cos(angle) * r, 
                size*0.1 + Math.sin(angle) * r * 0.5, 
                size*0.04, 0, Math.PI*2
              );
              ctx.fill();
            }
            break;
          case 4: // Dosa/plate
            ctx.fillStyle = '#E8622A';
            ctx.beginPath();
            ctx.ellipse(0, 0, size*0.5, size*0.35, 0, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#F2A93B';
            ctx.beginPath();
            ctx.ellipse(0, -size*0.05, size*0.4, size*0.25, 0, 0, Math.PI*2);
            ctx.fill();
            // Chutney dots
            ctx.fillStyle = '#4B7F52';
            ctx.beginPath();
            ctx.arc(size*0.2, -size*0.1, size*0.05, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#D4735E';
            ctx.beginPath();
            ctx.arc(-size*0.2, -size*0.05, size*0.04, 0, Math.PI*2);
            ctx.fill();
            break;
          case 5: // Samosa
            ctx.fillStyle = '#D4A574';
            ctx.beginPath();
            ctx.moveTo(0, -size*0.5);
            ctx.quadraticCurveTo(-size*0.5, -size*0.1, -size*0.3, size*0.5);
            ctx.quadraticCurveTo(0, size*0.6, size*0.3, size*0.5);
            ctx.quadraticCurveTo(size*0.5, -size*0.1, 0, -size*0.5);
            ctx.fill();
            ctx.stroke();
            // Inside filling
            ctx.fillStyle = '#8C2A1E';
            ctx.beginPath();
            ctx.arc(0, size*0.1, size*0.15, 0, Math.PI*2);
            ctx.fill();
            break;
        }
      }
      getColor() {
        const colors = ['#F2A93B', '#D4735E', '#4B7F52', '#E8622A', '#8C2A1E', '#D4A574'];
        return colors[this.type % colors.length];
      }
      getBorderColor() {
        const colors = ['#D4902A', '#B8634E', '#3A6F42', '#C8521A', '#6C1A0E', '#B89564'];
        return colors[this.type % colors.length];
      }
    }

    // Initialize particles
    const numParticles = 18;
    const numSteam = 12;

    for (let i = 0; i < numParticles; i++) {
      const p = new FoodParticle();
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
      particles.push(p);
    }

    for (let i = 0; i < numSteam; i++) {
      const s = new SteamParticle();
      s.x = Math.random() * canvas.width;
      s.y = Math.random() * canvas.height;
      s.life = Math.random();
      steamParticles.push(s);
    }

    // Animation loop
    const animate = () => {
      ctxNonNull.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle background
      const bgGrad = ctxNonNull.createRadialGradient(
        canvas.width/2, canvas.height/2, 0,
        canvas.width/2, canvas.height/2, canvas.width/1.5
      );
      bgGrad.addColorStop(0, 'rgba(255, 248, 240, 0.5)');
      bgGrad.addColorStop(1, 'rgba(255, 240, 230, 0)');
      ctxNonNull.fillStyle = bgGrad;
      ctxNonNull.fillRect(0, 0, canvas.width, canvas.height);

      // Draw steam
      steamParticles.forEach(s => { s.update(); s.draw(); });

      // Draw food particles
      particles.forEach(p => { p.update(); p.draw(); });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="hero-visual">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="center-logo">
        <img src={logo} alt="JK Chaat Cafe logo" />
      </div>
    </div>
  );
}