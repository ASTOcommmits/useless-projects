// Application data
const appData = {
  "pointless_school_subjects": [
    {
      "name": "Physical Education",
      "description": "Running around in uncomfortable clothes while a teacher judges your athletic ability",
      "why_useless": "The entire purpose of school is educating the mind, not the body",
      "fun_fact": "PE teachers are either super fit or have obvious belly bulges - there's no in-between"
    },
    {
      "name": "Latin",
      "description": "Learning a dead language that literally no one speaks",
      "why_useless": "It's a dead language! When will you ever use 'Et tu, Brute?' in real life?",
      "fun_fact": "Teachers claim it helps with vocabulary, but it really doesn't help with French or Spanish"
    },
    {
      "name": "Art History",
      "description": "Memorizing when some old dude painted a picture",
      "why_useless": "Unless you're becoming an art appraiser, this won't help pay the bills",
      "fun_fact": "You'll never need to know the difference between Baroque and Rococo at your day job"
    },
    {
      "name": "Religious Studies",
      "description": "Studying various religions whether you believe in them or not",
      "why_useless": "Religion shouldn't be studied for exams - it's about faith, not grades",
      "fun_fact": "Forces atheists to study about God, which just makes them hate religion more"
    },
    {
      "name": "Dance",
      "description": "Mandatory dancing lessons for people with two left feet",
      "why_useless": "When will anyone ever need to dance other than if they want to be a dancer?",
      "fun_fact": "You wouldn't go to a job interview and be asked to dance to get the job"
    }
  ],
  "ridiculous_university_degrees": [
    {
      "name": "Surf Science and Technology",
      "school": "Cornwall College (University of Plymouth)",
      "description": "The study of surfing, posing as a science degree",
      "duration": "3 years",
      "fun_fact": "Sadly, practical surfing is not part of the course",
      "real": true
    },
    {
      "name": "Underwater Basket Weaving",
      "school": "Reed College, Oregon",
      "description": "Weaving baskets while submerged underwater",
      "duration": "Non-credit class",
      "fun_fact": "Part of their Paideia festival celebrating creativity through unconventional learning",
      "real": true
    },
    {
      "name": "Harry Potter Literature",
      "school": "Ohio State University",
      "description": "Fantasy Literature course dedicated to J.K. Rowling's magical books",
      "duration": "1 semester",
      "fun_fact": "Students are required to read all seven books plus articles about the series",
      "real": true
    },
    {
      "name": "Zombies in Popular Media",
      "school": "Columbia College Chicago",
      "description": "Analyzing the portrayal of zombies in literature, film, and popular culture",
      "duration": "1 semester",
      "fun_fact": "Examines sociocultural implications and symbolic representations of zombies",
      "real": true
    },
    {
      "name": "The Science of Decision Making",
      "school": "Various Universities",
      "description": "Teaching students to be experts in quantitative methods of making decisions",
      "duration": "PhD level",
      "fun_fact": "Salary range: $53,315 to $122,313 annually - not so useless after all!",
      "real": true
    },
    {
      "name": "Cannabis Cultivation",
      "school": "Oaksterdam University",
      "description": "Learning the best techniques to cultivate cannabis",
      "duration": "Various programs",
      "fun_fact": "The university's motto is literally just 'Cannabis'",
      "real": true
    }
  ],
  "useless_college_majors": [
    {
      "name": "Dance",
      "average_salary": "$25,453",
      "payback_period": "151.28 years",
      "why_useless": "Dancers find success through training and auditions, not formal education",
      "alternative": "Focus on developing skills, going to auditions, and building your network"
    },
    {
      "name": "Drama/Theater",
      "average_salary": "$27,468",
      "payback_period": "41.40 years",
      "why_useless": "You don't need a degree to become an actor",
      "alternative": "Go for auditions and get experience behind the scenes"
    },
    {
      "name": "Philosophy",
      "average_salary": "$32,116",
      "payback_period": "14.04 years",
      "why_useless": "Focuses on abstract concepts while the job market prioritizes practical skills",
      "alternative": "Consider Medical Ethics, Political Science, or Liberal Arts instead"
    },
    {
      "name": "Anthropology",
      "average_salary": "$30,581",
      "payback_period": "15.48 years",
      "why_useless": "A bachelor's degree doesn't pave a viable career path",
      "alternative": "You need a PhD, and even then options are extremely limited"
    },
    {
      "name": "Music",
      "average_salary": "$29,592",
      "payback_period": "22.15 years",
      "why_useless": "Stage experience, practice, and luck help musicians more than a degree",
      "alternative": "Focus on getting into the world's best music schools and forming a band"
    }
  ],
  "useless_trivia": [
    "Finland has the most heavy metal bands per capita in the world",
    "The world record for most T-shirts worn at once is 260",
    "The lighter was invented three years before the match",
    "A jiffy is about one trillionth of a second",
    "The number of dimples on a regulation golf ball is 336",
    "More Monopoly money is printed in a year than real money in the United States",
    "Rubber bands last longer when refrigerated",
    "A piece of paper can be folded in half no more than 7 times",
    "The footprints made on the Moon can last up to 100 million years",
    "The King of Hearts is the only king in a deck of cards without a mustache",
    "The inventor of Pringles is buried in a Pringles can",
    "Alaska is the only state whose name is on one row of a keyboard",
    "The opposite sides of a die will always add up to seven",
    "Dolphins give each other names",
    "Sloths can hold their breath longer than dolphins",
    "A giraffe can clean its ears with its 21-inch tongue",
    "Ravens know when someone is spying on them",
    "Flamingos can only eat with their heads upside down",
    "Honey doesn't go bad (as long as it's stored properly)",
    "Strawberries are not technically considered berries, but bananas are",
    "SPAM is short for 'spiced ham'",
    "The fear of beards is called pogonophobia",
    "The dot over the letter 'i' is called a tittle",
    "Spoonfeed is the longest English word with letters in reverse alphabetical order",
    "The word 'set' has 430+ different definitions",
    "A group of hippos is called a 'bloat'",
    "A group of crows is called a 'murder'",
    "The infinity sign is called a lemniscate",
    "Barbie and Ken broke up in 2004 but got back together in 2011",
    "Bob Ross was introduced to painting via the U.S. Air Force",
    "A dentist invented the electric chair",
    "It's illegal in Switzerland to own just one guinea pig",
    "Human eyeballs grow very little after birth",
    "Women blink almost twice as much as men",
    "Men hiccup more than women",
    "There are 293 ways to make change for a dollar",
    "Venus is the only planet that rotates clockwise",
    "Jupiter is twice as large as all other planets combined",
    "Nuclear scientist Lonnie Johnson invented the Super Soaker",
    "The word 'nerd' was invented by Dr. Seuss"
  ]
};

// Emoji mappings for different subjects
const subjectEmojis = {
  'Physical Education': '🏃‍♂️',
  'Latin': '🏛️',
  'Art History': '🎨',
  'Religious Studies': '⛪',
  'Dance': '💃',
  'Surf Science and Technology': '🏄‍♂️',
  'Underwater Basket Weaving': '🧺',
  'Harry Potter Literature': '⚡',
  'Zombies in Popular Media': '🧟',
  'The Science of Decision Making': '🤔',
  'Cannabis Cultivation': '🌿',
  'Drama/Theater': '🎭',
  'Philosophy': '🤯',
  'Anthropology': '🦴',
  'Music': '🎵'
};

// DOM elements - will be set after DOM loads
let generateFactBtn, randomFactDisplay, modal, modalBody, modalClose;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements after DOM is loaded
    generateFactBtn = document.getElementById('generate-fact-btn');
    randomFactDisplay = document.getElementById('random-fact');
    modal = document.getElementById('detail-modal');
    modalBody = document.getElementById('modal-body');
    modalClose = document.querySelector('.modal-close');
    
    // Render content
    renderSchoolSubjects();
    renderUniversityDegrees();
    renderCollegeMajors();
    renderTriviaShowcase();
    
    // Setup event listeners
    setupEventListeners();
    
    console.log('Application initialized');
});

// Event listeners
function setupEventListeners() {
    if (generateFactBtn) {
        generateFactBtn.addEventListener('click', generateRandomFact);
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

// Random fact generator
function generateRandomFact() {
    console.log('Generating random fact...');
    const randomIndex = Math.floor(Math.random() * appData.useless_trivia.length);
    const fact = appData.useless_trivia[randomIndex];
    
    if (randomFactDisplay) {
        // Add animation effect
        randomFactDisplay.style.opacity = '0';
        randomFactDisplay.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            randomFactDisplay.textContent = fact;
            randomFactDisplay.style.opacity = '1';
            randomFactDisplay.style.transform = 'translateY(0)';
        }, 200);
    }
}

// Render school subjects
function renderSchoolSubjects() {
    const container = document.getElementById('school-subjects');
    if (!container) return;
    
    appData.pointless_school_subjects.forEach((subject, index) => {
        const card = createSubjectCard(subject, 'school-subject', index);
        container.appendChild(card);
    });
}

// Render university degrees
function renderUniversityDegrees() {
    const container = document.getElementById('university-degrees');
    if (!container) return;
    
    appData.ridiculous_university_degrees.forEach((degree, index) => {
        const card = createDegreeCard(degree, index);
        container.appendChild(card);
    });
}

// Render college majors
function renderCollegeMajors() {
    const container = document.getElementById('college-majors');
    if (!container) return;
    
    appData.useless_college_majors.forEach((major, index) => {
        const card = createMajorCard(major, index);
        container.appendChild(card);
    });
}

// Create subject card
function createSubjectCard(subject, cardClass, index) {
    const card = document.createElement('div');
    card.className = `subject-card ${cardClass}`;
    card.style.animationDelay = `${index * 0.1}s`;
    
    const emoji = subjectEmojis[subject.name] || '📖';
    
    card.innerHTML = `
        <h3 class="card-title">${emoji} ${subject.name}</h3>
        <p class="card-description">${subject.description}</p>
        <div class="card-meta">
            <strong>Why it's "useless":</strong> ${subject.why_useless}
        </div>
        <div class="click-hint">Click for more →</div>
    `;
    
    card.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Subject card clicked:', subject.name);
        showSubjectDetails(subject);
    });
    
    return card;
}

// Create degree card
function createDegreeCard(degree, index) {
    const card = document.createElement('div');
    card.className = 'subject-card university-degree';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const emoji = subjectEmojis[degree.name] || '🎓';
    
    card.innerHTML = `
        <h3 class="card-title">${emoji} ${degree.name}</h3>
        <p class="card-description">${degree.description}</p>
        <div class="card-meta">
            <strong>School:</strong> ${degree.school}<br>
            <strong>Duration:</strong> ${degree.duration}
        </div>
        <div class="click-hint">Click for more →</div>
    `;
    
    card.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Degree card clicked:', degree.name);
        showDegreeDetails(degree);
    });
    
    return card;
}

// Create major card
function createMajorCard(major, index) {
    const card = document.createElement('div');
    card.className = 'subject-card college-major';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const emoji = subjectEmojis[major.name] || '💼';
    
    card.innerHTML = `
        <h3 class="card-title">${emoji} ${major.name}</h3>
        <p class="card-description">Average salary: ${major.average_salary}</p>
        <div class="card-meta">
            <strong>Payback period:</strong> ${major.payback_period}<br>
            <strong>Why it's challenging:</strong> ${major.why_useless}
        </div>
        <div class="click-hint">Click for more →</div>
    `;
    
    card.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Major card clicked:', major.name);
        showMajorDetails(major);
    });
    
    return card;
}

// Show subject details in modal
function showSubjectDetails(subject) {
    console.log('Showing subject details for:', subject.name);
    const emoji = subjectEmojis[subject.name] || '📖';
    
    if (modalBody) {
        modalBody.innerHTML = `
            <h3>${emoji} ${subject.name}</h3>
            <p><strong>Description:</strong> ${subject.description}</p>
            <div class="highlight">
                <p><strong>Why some consider it "useless":</strong></p>
                <p>${subject.why_useless}</p>
            </div>
            <p><strong>Fun Fact:</strong> ${subject.fun_fact}</p>
            <p><em>Remember: Every subject has value! This is just for fun. 😄</em></p>
        `;
        showModal();
    }
}

// Show degree details in modal
function showDegreeDetails(degree) {
    console.log('Showing degree details for:', degree.name);
    const emoji = subjectEmojis[degree.name] || '🎓';
    
    if (modalBody) {
        modalBody.innerHTML = `
            <h3>${emoji} ${degree.name}</h3>
            <p><strong>School:</strong> ${degree.school}</p>
            <p><strong>Duration:</strong> ${degree.duration}</p>
            <p><strong>Description:</strong> ${degree.description}</p>
            <div class="highlight">
                <p><strong>Fun Fact:</strong> ${degree.fun_fact}</p>
            </div>
            <p><strong>Is this real?</strong> ${degree.real ? 'Yes, this is a real course!' : 'This might be fictional'}</p>
            <p><em>These unusual courses show how creative education can be! 🌟</em></p>
        `;
        showModal();
    }
}

// Show major details in modal
function showMajorDetails(major) {
    console.log('Showing major details for:', major.name);
    const emoji = subjectEmojis[major.name] || '💼';
    
    if (modalBody) {
        modalBody.innerHTML = `
            <h3>${emoji} ${major.name}</h3>
            <p><strong>Average Salary:</strong> ${major.average_salary}</p>
            <p><strong>Payback Period:</strong> ${major.payback_period}</p>
            <div class="highlight">
                <p><strong>The Challenge:</strong></p>
                <p>${major.why_useless}</p>
            </div>
            <p><strong>Alternative Approach:</strong> ${major.alternative}</p>
            <p><em>Follow your passion, but also consider practical aspects! 💪</em></p>
        `;
        showModal();
    }
}

// Modal functions
function showModal() {
    console.log('Showing modal');
    if (modal) {
        modal.classList.remove('hidden');
        // Use a small delay to ensure the display change takes effect
        requestAnimationFrame(() => {
            modal.classList.add('show');
        });
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    console.log('Closing modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 250);
    }
}

// Render trivia showcase
function renderTriviaShowcase() {
    const container = document.getElementById('trivia-showcase');
    if (!container) return;
    
    // Show first 12 trivia items
    const triviaToShow = appData.useless_trivia.slice(0, 12);
    
    triviaToShow.forEach((trivia, index) => {
        const triviaItem = document.createElement('div');
        triviaItem.className = 'trivia-item';
        triviaItem.textContent = trivia;
        triviaItem.style.animationDelay = `${index * 0.05}s`;
        container.appendChild(triviaItem);
    });
}