// js/canvas_drawing.js - Chinese Character Handwriting & Stroke Practice Canvas
(function() {
  class HanziCanvas {
    constructor(canvasId, options = {}) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.options = {
        gridColor: '#e2e8f0',
        strokeColor: '#1e293b',
        lineWidth: 6,
        modelColor: 'rgba(203, 213, 225, 0.45)',
        ...options
      };

      this.isDrawing = false;
      this.strokes = [];
      this.currentStroke = [];
      this.modelChar = '';
      this.showModel = true;

      this.initEvents();
      this.resize();
      this.draw();
    }

    setModelChar(char, show = true) {
      this.modelChar = char;
      this.showModel = show;
      this.clear();
    }

    toggleModel(show) {
      this.showModel = typeof show === 'boolean' ? show : !this.showModel;
      this.draw();
    }

    resize() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      this.width = rect.width || 280;
      this.height = rect.height || 280;
      
      this.canvas.width = this.width * dpr;
      this.canvas.height = this.height * dpr;
      this.ctx.scale(dpr, dpr);
      this.draw();
    }

    clear() {
      this.strokes = [];
      this.currentStroke = [];
      this.draw();
    }

    undo() {
      if (this.strokes.length > 0) {
        this.strokes.pop();
        this.draw();
      }
    }

    getPos(e) {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    }

    initEvents() {
      const startDraw = (e) => {
        e.preventDefault();
        this.isDrawing = true;
        const pos = this.getPos(e);
        this.currentStroke = [pos];
        this.draw();
      };

      const moveDraw = (e) => {
        if (!this.isDrawing) return;
        e.preventDefault();
        const pos = this.getPos(e);
        this.currentStroke.push(pos);
        this.draw();
      };

      const endDraw = (e) => {
        if (!this.isDrawing) return;
        e.preventDefault();
        this.isDrawing = false;
        if (this.currentStroke.length > 0) {
          this.strokes.push([...this.currentStroke]);
          this.currentStroke = [];
          this.draw();
        }
      };

      this.canvas.addEventListener('mousedown', startDraw);
      this.canvas.addEventListener('mousemove', moveDraw);
      window.addEventListener('mouseup', endDraw);

      this.canvas.addEventListener('touchstart', startDraw, { passive: false });
      this.canvas.addEventListener('touchmove', moveDraw, { passive: false });
      window.addEventListener('touchend', endDraw, { passive: false });
      window.addEventListener('resize', () => this.resize());
    }

    drawGrid() {
      const { ctx, width, height } = this;
      ctx.save();
      ctx.strokeStyle = this.options.gridColor;
      ctx.lineWidth = 1;

      // Outer border
      ctx.strokeRect(1, 1, width - 2, height - 2);

      // Dash style for internal guides (米字格)
      ctx.setLineDash([4, 4]);

      // Horizontal & vertical center lines
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);

      // Diagonal lines
      ctx.moveTo(0, 0);
      ctx.lineTo(width, height);
      ctx.moveTo(width, 0);
      ctx.lineTo(0, height);
      ctx.stroke();

      ctx.restore();
    }

    drawModel() {
      if (!this.modelChar || !this.showModel) return;
      const { ctx, width, height } = this;
      ctx.save();
      ctx.fillStyle = this.options.modelColor;
      ctx.font = `bold ${Math.floor(height * 0.72)}px "Kaiti", "STKaiti", "KaiTi_GB2312", "Microsoft YaHei", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.modelChar, width / 2, height / 2 + height * 0.05);
      ctx.restore();
    }

    drawStrokes() {
      const { ctx } = this;
      ctx.save();
      ctx.strokeStyle = this.options.strokeColor;
      ctx.lineWidth = this.options.lineWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const all = [...this.strokes];
      if (this.currentStroke.length > 0) all.push(this.currentStroke);

      for (const stroke of all) {
        if (stroke.length < 2) {
          if (stroke.length === 1) {
            ctx.beginPath();
            ctx.arc(stroke[0].x, stroke[0].y, this.options.lineWidth / 2, 0, Math.PI * 2);
            ctx.fillStyle = this.options.strokeColor;
            ctx.fill();
          }
          continue;
        }
        ctx.beginPath();
        ctx.moveTo(stroke[0].x, stroke[0].y);
        for (let i = 1; i < stroke.length; i++) {
          ctx.lineTo(stroke[i].x, stroke[i].y);
        }
        ctx.stroke();
      }

      ctx.restore();
    }

    draw() {
      if (!this.canvas || !this.ctx) return;
      const { ctx, width, height } = this;
      ctx.clearRect(0, 0, width, height);

      this.drawGrid();
      this.drawModel();
      this.drawStrokes();
    }
  }

  window.HanziCanvas = HanziCanvas;
})();
