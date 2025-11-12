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

// Coordinator data for each event
const eventData = {
  "Code Jiggle": {
    img: "codejiggleposter.jpg",
    faculty: [
      { name: "Mr.T.Jagadeesh", Coordinator: "Assistant Professor", img: "jagadeeshsir.jpg" },
      { name: "Mr.S.S.V.S.Kumar", Coordinator: "Assistant Professor", img: "santosh.jpg" }
    ],
    students: [
      { name: "S.Deepti Shalika", roll: "23A31A4383", phone: "82975 57788", img: "deepti.jpg" },
      { name: "M.Navaneeth Veer", roll: "23A31A43B2", phone: "95530 98726", img: "navaneeth.jpg" },
      { name: "M.Sai Jyothi", roll: "23A31A4372", phone: "81259 06061 ", img: "jyothi.jpg" },
    ]
  },

  "Code Golf": {
    img: "codegolfposter.jpg",
    faculty: [
      { name: "Mrs.T.Tejasvi", Coordinator: "Assistant Professor", img: "teju.jpg" },
      { name: "Mr.D.Ramesh", Coordinator: "Assistant Professor", img: "ramesh.jpg" }
    ],
    students: [
      { name: "B.Srija", roll: "23A31A43D4", phone: "78539 45101", img: "srija.jpg" },
      { name: "N.P.Raghawendra", roll: "23A31A43I1", phone: "91774 26530", img: "raghawendra.jpg" },
      { name: "P.N.D.Akshaya", roll: "23A31A43F8", phone: "63010 96145", img: "akshaya.jpg" },
      { name: "K.Bala Murali Krishna", roll: "23A31A43A5", phone: "63014 23681", img: "bala.jpg" }
    ]
  },

  "Promptopia": {
    img: "promptopiaposter.jpg",
    faculty: [
      { name: "Mr.P.Krishna Chaitanya", Coordinator: "Assistant Professor", img: "kc.jpg" },
      { name: "Mr.M.Veerababu", Coordinator: "Assistant Professor", img: "veerababu.jpg" }
    ],
    students: [
      { name: "P.Akshaya", roll: "23A31A4381", phone: "93906 56725", img: "pakshaya.jpg" },
      { name: "D.Devi Priya", roll: "23A31A4368", phone: "96371 33777", img: "priya.jpg" },
      { name: "Sk.Asma", roll: "23A31A4384", phone: "75699 42784", img: "asma.jpg" },
      { name: "T.Kranthi Sri", roll: "23A31A4385", phone: "76709 14226", img: "kranthi.jpg" }
    ]
  },

  "Escape the Lab": {
    img: "escapethelabposter.jpg",
    faculty: [
      { name: "Mrs.P.Seshu Kumari", Coordinator: "Assistant Professor", img: "skumari.jpg" },
      { name: "Mrs.P.Devi Sravanthi", Coordinator: "Assistant Professor", img: "sravanthi.jpg" }
    ],
    students: [
      { name: "S.Naveen Kumar", roll: "23A31A4357", phone: "70133 96156", img: "naveen.jpg" },
      { name: "R.Karteek", roll: "23A31A4354", phone: "99485 49321", img: "karteek.jpg" },
      { name: "M.Tejaswi", roll: "23A31A4318", phone: "79819 25662", img: "tejaswi.jpg" },
      { name: "P.Lavanya", roll: "23A31A4319", phone: "93906 92334", img: "lavanya.jpg" }
    ]
  }
};


// ---------- OPEN POPUP ----------
events.forEach(event => {
  event.addEventListener('click', () => {
    const name = event.textContent.trim();
    const description = event.dataset.description;
    const data = eventData[name];

    if (!data) {
      alert("No coordinator data found for this event!");
      return;
    }

    // Build popup HTML dynamically
    modalName.textContent = name;
    modalText.innerHTML = `
      <div class="popup-event-img">
        <img src="${data.img}" alt="${name}">
      </div>

      <h3 style="text-align:center; color:cyan; margin-bottom:10px;">Description</h3>
      <p style="text-align:left; color:white;">${description}</p>

      <div class="popup-coord-section">
        <h3 class="popup-coord-title">Faculty Coordinators</h3>
        <div class="popup-coord-row">
          ${data.faculty.map(f => `
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
          ${data.students.map(s => `
            <div class="popup-coord-card">
              <img src="${s.img}" alt="${s.name}">
              <p>${s.name}<br>${s.roll}<br>${s.phone}</p>
            </div>
          `).join('')}
        </div>
      </div>

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

window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
