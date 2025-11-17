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


// ---------- EVENT DATA WITH SEPARATE REGISTER LINKS ----------
const eventData = {
  "Code Jiggle": {
    img: "codejiggleposter.jpg",
    description: "CodeJiggle is a two-round coding event — a 25-minute quiz on programming and aptitude, followed by a 1-hour coding round to design functional solutions testing logic and implementation skills.",
    register: "https://forms.gle/tdq4Kn75ZhWL9Q6VA",  // CHANGE HERE
    guidelines: [
       " Be honest — no malpractice.",
	" Submit within the time limit.",
	" Follow organizer instructions.",
	" Use only approved tools.",
	" Write original, requirement-based code."
    ],
    faculty: [
      { name: "Mr.T.Jagadeesh", Coordinator: "Assistant Professor", img: "jagadeeshsir.jpg" },
      { name: "Mr.S.S.V.S.Kumar", Coordinator: "Assistant Professor", img: "santosh.jpg" }
    ],
    students: [
      { name: "S.Deepti Shalika", roll: "23A31A4383", phone: "82975 57788", img: "deepti.jpg" },
      { name: "M.Navaneeth Veer", roll: "23A31A43B2", phone: "95530 98726", img: "navaneeth.jpg" },
      { name: "M.Sai Jyothi", roll: "23A31A4372", phone: "81259 06061", img: "jyothi.jpg" }
    ]
  },

  "Code Golf": {
    img: "codegolfposter.jpg",
    description: "Code Golf is a fun C coding contest where participants solve tasks using the shortest possible code. Correct output is mandatory, and creativity with concise solutions wins.",
    register: "https://forms.gle/UHk4eMwbtoW4otsf9",  // CHANGE HERE
    guidelines: [
      " Use only C language.",
	" Write the shortest working code.",
	" Shortest valid code wins.",
	" Judges’ decision is final."
    ],
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
    description: "Participants view an image and write the most accurate AI prompt to recreate it using tools like DALL·E, Midjourney, or Leonardo AI.",
    register: "https://forms.gle/msMBvczpcTSDchoGA",   // YOUR LINK ✔
    guidelines: [
      " A tool will be provided no other tool is used.",
	" Laptop is required."
    ],
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
    description: "Escape the Lab is a story-based tech challenge where participants solve puzzles, debug clues, and decode messages to unlock rounds and escape the virtual lab.",
    register: "https://forms.gle/rAH2Z9wpNmXYmubS7",  // CHANGE HERE
    guidelines: [
      " Teams of up to 3 members.",
	" Solve logical, technical, and decoding challenges to progress.",
	" Each level has puzzles, debugging tasks, and clues tied to the story.",
	" No phones, internet, or external help allowed.",
	" Follow the storyline closely — rounds are connected.",
	" First to escape (finish all rounds) wins.",
	" Report 15 minutes early for briefing and verification."
    ],
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
    const data = eventData[name];

    if (!data) {
      alert("No event data found!");
      return;
    }

    modalName.textContent = name;

    modalText.innerHTML = `
      <div class="popup-event-img">
        <img src="${data.img}" alt="${name}">
      </div>

      <h3 style="text-align:center; color:cyan;">Description</h3>
      <p style="text-align:left; color:white;">${data.description}</p>

      <h3 style="text-align:center; color:cyan; margin-top:15px;">Guidelines</h3>
      <ul style="text-align:left; color:white; margin-left:20px;">
        ${data.guidelines.map(g => `<li>${g}</li>`).join('')}
      </ul>

      <!-- REGISTER BUTTON RIGHT AFTER GUIDELINES -->
      <div style="text-align:center; margin:20px 0;">
        <a href="${data.register}" class="register-btn" target="_blank">Register Now</a>
      </div>

      <h3 class="popup-coord-title">Faculty Coordinators</h3>
      <div class="popup-coord-row">
        ${data.faculty.map(f => `
          <div class="popup-coord-card">
            <img src="${f.img}">
            <p>${f.name}<br>${f.Coordinator}</p>
          </div>
        `).join('')}
      </div>

      <h3 class="popup-coord-title">Student Coordinators</h3>
      <div class="popup-coord-row">
        ${data.students.map(s => `
          <div class="popup-coord-card">
            <img src="${s.img}">
            <p>${s.name}<br>${s.roll}<br>${s.phone}</p>
          </div>
        `).join('')}
      </div>
    `;

    modal.style.display = 'flex';
  });
});


closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});
