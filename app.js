const quizData = [
  {
    question: 'Birgülün en sevdiği renk nedir?',
    a: 'Siyah',
    b: 'Pembe',
    c: 'Mavi',
    d: 'Mor',
    e: 'Kırmızı',
    correct: 'a',
  },
  {
    question: 'Birgülün en sevdiği uygulama hangisidir?',
    a: 'Snapchat',
    b: 'Tiktok',
    c: 'İnstagram',
    d: 'X',
    e: 'WhatsApp',
    correct: 'b',
  },
  {
    question: 'Birgülün en sevdiği yemek hangisidir?',
    a: 'Köfte patates',
    b: 'Mantı',
    c: 'Pizza',
    d: 'Sushi',
    e: 'Soslu Makarna',
    correct: 'a',
  },
  {
    question: 'Birgülün en çok gitmek istediği yer?',
    a: 'Amsterdam',
    b: 'New York',
    c: 'Paris',
    d: 'Edinburgh',
    e: 'Tokyo',
    correct: 'd',
  },
  {
    question: 'Birgülün almak istediği araba markası hangisidir?',
    a: 'Porsche',
    b: 'Bmw',
    c: 'Audi',
    d: 'Ferrari',
    e: 'Mercedes',
    correct: 'a',
  },
  {
    question: 'Birgül hangi sporu yapmayı sever?',
    a: 'Pilates',
    b: 'Spor yapmayı sevmez',
    c: 'Yüzme',
    d: 'Basketbol',
    e: 'Futbol',
    correct: 'b',
  },
  {
    question: 'Birgülün en sevdiği mevsim hangisidir?',
    a: 'Kış',
    b: 'İlkbahar',
    c: 'Yaz',
    d: 'Sonbahar',
    e: 'Yaz hariç diğer mevsimler',
    correct: 'e',
  },
  {
    question: 'Birgül hangi tarzda müzik dinlemeyi sever?',
    a: 'Pop',
    b: 'Aşure tarzı',
    c: 'Hip-hop',
    d: 'Klasik',
    e: 'Rock',
    correct: 'b',
  },
  {
    question: 'Birgülün hayalindeki meslek nedir?',
    a: 'Pilot',
    b: 'Emlakcı',
    c: 'Mimar',
    d: 'Yazılımcı',
    e: 'Hostes',
    correct: 'a',
  },
  {
    question: 'Birgül boş zamanlarında ne yapmayı sever?',
    a: 'Film izlemek',
    b: 'Kitap okumak',
    c: 'Arkadaşlarla takılmak',
    d: 'Alışveriş yapmak',
    e: 'Müzik dinlemek',
    correct: 'c',
  },
  {
    question: 'Birgülün en sevdiği hayvan hangisidir?',
    a: 'Köpek',
    b: 'Kedi',
    c: 'Kuş',
    d: 'Balık',
    e: 'Hamster',
    correct: 'b',
  },
  {
    question: 'Birgülün hiç çıkarmadığı takısı nedir?',
    a: 'Küpe',
    b: 'Bileklik',
    c: 'Piercing',
    d: 'Kolye',
    e: 'Yüzük',
    correct: 'c',
  },
  {
    question: 'Birgülün en sevdiği kahve nedir?',
    a: 'Espresso',
    b: 'Latte',
    c: 'Türk kahvesi',
    d: 'Cappuccino',
    e: 'Filtre kahve',
    correct: 'c',
  },
  {
    question: 'Birgülün en sevdiği kitap türü nedir?',
    a: 'Roman',
    b: 'Kişisel gelişim',
    c: 'Bilim kurgu',
    d: 'Tarih',
    e: 'Şiir',
    correct: 'b',
  },
  {
    question: 'Birgülün en sevdiği kitap hangisidir?',
    a: 'Tutunamayanlar',
    b: 'Kardeşimin hikayesi',
    c: 'Şeker Portakalı',
    d: 'Kürk Mantolu Madonna',
    e: 'Saatleri Ayarlama Enstitüsü',
    correct: 'b',
  },
  {
    question: 'Birgülün canı sıkkın olduğunda yemeyi en çok sevdiği şey nedir?',
    a: 'Çikolata',
    b: 'Cips / abur cubur',
    c: 'Ev yapımı bir yemek',
    d: 'Tatlı bir içecek',
    e: 'Dışarıdan söylenen bir şey',
    correct: 'a',
  },
  {
    question: 'Birgül en çok ne zaman düşüncelere dalar?',
    a: 'Gece yatarken',
    b: 'Müzik dinlerken',
    c: 'Yürüyüş yaparken',
    d: 'O hep düşünür',
    e: 'Sessiz kalınca',
    correct: 'd',
  }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')
const backBtn = document.getElementById('back-btn')

let currentQuiz = 0
let score = 0
let userAnswers = [] 
let userName = ''


showWelcomeScreen()

function showWelcomeScreen() {
  document.getElementById('welcome-screen').style.display = 'flex'
  document.getElementById('quiz-screen').style.display = 'none'
  

  document.getElementById('user-name').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      startQuiz()
    }
  })
}

function startQuiz() {
  const nameInput = document.getElementById('user-name')
  userName = nameInput.value.trim()
  
  if (userName === '') {
    alert('Lütfen adını gir! 😊')
    nameInput.focus()
    return
  }
  

  document.getElementById('welcome-screen').style.display = 'none'
  document.getElementById('quiz-screen').style.display = 'flex'
  

  document.getElementById('quiz-title').innerText = `Merhaba ${userName}! 👋`
  

  document.getElementById('total-questions').innerText = quizData.length
  currentQuiz = 0
  score = 0
  userAnswers = []
  
  loadQuiz()
}

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]

  deselectedAnswers()

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
  e_text.innerText = currentQuizData.e
  

  updateProgress()
}

function updateProgress() {
  const progressEl = document.getElementById('progress')
  const currentQuestionEl = document.getElementById('current-question')
  
  if (progressEl && currentQuestionEl) {
    const progressPercentage = ((currentQuiz + 1) / quizData.length) * 100
    progressEl.style.width = progressPercentage + '%'
    currentQuestionEl.innerText = currentQuiz + 1
  }
  

  if (backBtn) {
    backBtn.disabled = currentQuiz === 0
  }
  

  if (userAnswers[currentQuiz]) {
    const selectedAnswer = userAnswers[currentQuiz]
    const answerEl = document.getElementById(selectedAnswer)
    if (answerEl) {
      answerEl.checked = true
    }
  }
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
  let answer

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  if (answer) {

    userAnswers[currentQuiz] = answer
    

    submitBtn.style.backgroundColor = '#4CAF50'
    submitBtn.innerText = 'Doğru! ✓'
    
    if (answer === quizData[currentQuiz].correct) {
      score++
      submitBtn.style.backgroundColor = '#4CAF50'
      submitBtn.innerText = 'Doğru! ✓'
    } else {
      submitBtn.style.backgroundColor = '#f44336'
      submitBtn.innerText = 'Yanlış ✗'
    }
    
    submitBtn.disabled = true
    
    setTimeout(() => {
      currentQuiz++
      
      if (currentQuiz < quizData.length) {
        submitBtn.style.backgroundColor = '#e97fc0'
        submitBtn.innerText = 'Evet'
        submitBtn.disabled = false
        loadQuiz()
      } else {
        showResults()
      }
    }, 1000)
  }
})

function goBack() {
  if (currentQuiz > 0) {

    if (userAnswers[currentQuiz - 1] && userAnswers[currentQuiz - 1] === quizData[currentQuiz - 1].correct) {
      score--
    }
    
    currentQuiz--
    
            
    submitBtn.style.backgroundColor = '#e97fc0'
    submitBtn.innerText = 'Evet'
    submitBtn.disabled = false
    
    loadQuiz()
  }
}

function showResults() {
  const percentage = Math.round((score / quizData.length) * 100)
  let message = ''
  
  
  if (percentage >= 90) {
    message = 'Mükemmel! Birgülü çok iyi tanıyorsun!'
   
  } else if (percentage >= 70) {
    message = 'Çok iyi! Birgül hakkında epey bilgin var!'
   
  } else if (percentage >= 50) {
    message = 'Fena değil! Birgülü daha yakından tanımalısın!'
    
  } else {
    message = 'Ups! Birgül hakkında daha çok şey öğrenmelisin!'
  
  }

  quiz.innerHTML = `
    <div class="result-container">
      <h2>${userName}, testini tamamladın!</h2>
      <h3>${resultTitle}</h3>
      <div class="score-display">
        <div class="score-number">${score}/${quizData.length}</div>
        <div class="score-percentage">%${percentage}</div>
      </div>
      <p class="result-message">${message}</p>
      <div class="personal-message">
        <p><strong>${userName}</strong>, Birgül hakkında <strong>${score} soruyu</strong> doğru bildin!</p>
      </div>
      <div class="result-stats">
        <div class="stat">
          <span class="stat-label">Doğru:</span>
          <span class="stat-value">${score}</span>
        </div>
        <div class="stat">
          <span class="stat-label">Yanlış:</span>
          <span class="stat-value">${quizData.length - score}</span>
        </div>
      </div>
      <button class="submit" onclick="restartQuiz()">
        Tekrar Dene
      </button>
    </div>
  `
}

function restartQuiz() {

  document.getElementById('quiz-screen').style.display = 'none'
  document.getElementById('welcome-screen').style.display = 'flex'
  

  document.getElementById('user-name').value = ''
  document.getElementById('user-name').focus()
  

  currentQuiz = 0
  score = 0
  userAnswers = []
  userName = ''
}
