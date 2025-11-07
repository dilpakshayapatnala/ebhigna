// ---------- ANIMATED BACKGROUND ----------
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

let w, h, particles;

function init() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  particles = [];

  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      r: Math.random() * 2 + 1
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, w, h);
  for (let p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
    ctx.fillStyle = "cyan";
    ctx.fill();
  }
  requestAnimationFrame(animate);
}

window.addEventListener('resize', init);
init();
animate();

// ---------- EVENT MODAL ----------
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const modalName = document.getElementById('modal-name');
const closeBtn = document.querySelector('.close');
const events = document.querySelectorAll('.event');

// Faculty coordinators (common for all events)
const facultyCoordinators = [
  { name: "M Veerababu", Coordinator: "Faculty Coordinator", img: "veerababu.jpg" },
  { name: "D Ramesh", Coordinator: "Faculty Coordinator", img: "ramesh.jpg" }
];

// Student coordinators (common for all events)
const studentCoordinators = [
  { name: "Umanjani", phone: "📞 9182173933", img: "umanjani.jpg" },
  { name: "Rajesh", phone: "📞 8919485402", img: "rajesh.jpg" },
  { name: "Suresh", phone: "📞 9876543210", img: "suresh.jpg" },
  { name: "Ramu", phone: "📞 9876501234", img: "ramu.jpg" }
];

events.forEach(event => {
  event.addEventListener('click', () => {
    const name = event.textContent;
    const description = event.dataset.description;
    

    // Popup HTML layout
    modalName.textContent = name;
    modalText.innerHTML = `
      <h3 style="text-align:center; color:cyan; margin-bottom:10px;">Description</h3>
      <p style="text-align:left; color:white;">${description}</p>

      
      <div class="popup-coord-section">
        <h3 class="popup-coord-title">Faculty Coordinators</h3>
        <div class="popup-coord-row">
          ${facultyCoordinators.map(f => `
            <div class="popup-coord-card">
              <img src="${f.img}" alt="${f.name}">
              <p>${f.name}<br>${f.Coordinator}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="popup-coord-section">
        <h3 class="popup-coord-title">Student Coordinators</h3>
        <div class="popup-coord-row">
          ${studentCoordinators.map(s => `
            <div class="popup-coord-card">
              <img src="${s.img}" alt="${s.name}">
              <p>${s.name}<br>${s.phone}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Register Button -->
      <div style="text-align:center; margin-top:20px;">
        <a href="register.html" class="register-btn" target="_blank">Register Now</a>
      </div>
    `;

    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
