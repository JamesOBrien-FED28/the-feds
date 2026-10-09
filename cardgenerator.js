// 1. Array storing student data objects with realistic temporary portrait images
const students = [
    { name: "Adam", image: "https://i.pravatar.cc/300?img=67", profileUrl: "./profiles/adam.html", role: "Frontend Dev" },
    { name: "Alex", image: "https://i.pravatar.cc/300?img=11", profileUrl: "./profiles/alex.html", role: "Frontend Dev" },
    { name: "Alma", image: "https://i.pravatar.cc/300?img=5", profileUrl: "./profiles/alma.html", role: "UI/UX Designer" },
    { name: "Amanda", image: "https://i.pravatar.cc/300?img=9", profileUrl: "./profiles/amanda.html", role: "Fullstack Dev" },
    { name: "Anette", image: "https://i.pravatar.cc/300?img=16", profileUrl: "./profiles/anette.html", role: "Backend Dev" },
    { name: "Anna", image: "https://i.pravatar.cc/300?img=20", profileUrl: "./profiles/anna.html", role: "React Developer" },
    { name: "Ayo", image: "https://i.pravatar.cc/300?img=12", profileUrl: "./profiles/ayo.html", role: "Python Developer" },
    { name: "Bonnie", image: "https://i.pravatar.cc/300?img=23", profileUrl: "./profiles/bonnie.html", role: "C# Developer" },
    { name: "Bob", image: "https://i.pravatar.cc/300?img=60", profileUrl: "./profiles/bob.html", role: "Frontend Dev" },
    { name: "Emanuel", image: "https://i.pravatar.cc/300?img=68", profileUrl: "./profiles/emanuel.html", role: "Fullstack Dev" },
    { name: "Faryal", image: "https://i.pravatar.cc/300?img=26", profileUrl: "./profiles/faryal.html", role: "UI/UX Designer" },
    { name: "Filip", image: "https://i.pravatar.cc/300?img=59", profileUrl: "./profiles/filip.html", role: "JS Developer" },
    { name: "Haleema", image: "https://i.pravatar.cc/300?img=32", profileUrl: "./profiles/haleema.html", role: "Frontend Dev" },
    { name: "Hamza", image: "https://i.pravatar.cc/300?img=53", profileUrl: "./profiles/hamza.html", role: "Backend Dev" },
    { name: "James", image: "https://i.pravatar.cc/300?img=15", profileUrl: "./profiles/james.html", role: "Fullstack Dev" },
    { name: "Dina", image: "https://i.pravatar.cc/300?img=44", profileUrl: "./profiles/dina.html", role: "UI/UX Designer" },
    { name: "Mahdi", image: "https://i.pravatar.cc/300?img=33", profileUrl: "./profiles/mahdi.html", role: "Python Developer" },
    { name: "Oksana", image: "https://i.pravatar.cc/300?img=69", profileUrl: "./profiles/oksana.html", role: "Frontend Dev" },
    { name: "Rita", image: "https://i.pravatar.cc/300?img=47", profileUrl: "./profiles/rita.html", role: "React Developer" },
    { name: "Ruby", image: "https://i.pravatar.cc/300?img=3", profileUrl: "./profiles/ruby.html", role: "Frontend Dev" },
    { name: "Parisa", image: "https://i.pravatar.cc/300?img=22", profileUrl: "./profiles/parisa.html", role: "Frontend Dev" },
    { name: "Masal", image: "https://i.pravatar.cc/300?img=21", profileUrl: "./profiles/masal.html", role: "Frontend Dev" },
    { name: "Abdullah", image: "https://i.pravatar.cc/300?img=56", profileUrl: "./profiles/abdullah.html", role: "Backend Dev" },
    { name: "Sara", image: "https://i.pravatar.cc/300?img=66", profileUrl: "./profiles/sara.html", role: "Frontend Dev" },
    { name: "Shazma", image: "https://i.pravatar.cc/300?img=49", profileUrl: "./profiles/shazma.html", role: "Fullstack Dev" },
    { name: "Taiane", image: "https://i.pravatar.cc/300?img=38", profileUrl: "./profiles/taiane.html", role: "UI/UX Designer" }
];

// 2. Fisher-Yates Shuffle Function to randomize array order
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 3. Function to generate and render cards into the HTML container
function renderStudentCards(studentList) {
    const container = document.getElementById('card-container'); //[cite: 3]
    container.innerHTML = ''; //[cite: 3]

    studentList.forEach(student => { //[cite: 3]
        const cardLink = document.createElement('a'); //[cite: 3]
        cardLink.href = student.profileUrl || '#'; //[cite: 3]
        cardLink.className = 'glass-card-link'; //[cite: 3]

        // Only set the variable --card-bg in JS
        cardLink.innerHTML = `
          <div class="glass-card" style="--card-bg: url('${student.image}');">
            <p class="card-name">${student.name}</p>
            <span class="card-role">${student.role || ''}</span>
          </div>
        `;

        container.appendChild(cardLink); //[cite: 3]
    });
}

// 4. Initialize on page load: shuffle data first, then render cards
document.addEventListener('DOMContentLoaded', () => {
    const randomizedStudents = shuffleArray([...students]);
    renderStudentCards(randomizedStudents);
});