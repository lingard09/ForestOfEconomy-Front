import { navigateTo } from '../router'
import acornImg from '../assets/acorn.png'
import arrowBackImg from '../assets/arrow_back.png'

const PROBLEMS = [
  {
    type: 'multiple',
    question: '이란의 최고 지도자인 하메네이가 미군의 폭격으로 사망한 이후, 다음 지도자로 선출된 사람은?',
    options: ['모즈타파', '전공타파', '소나타파', '무스탕파'],
    answer: 1
  },
  {
    type: 'word',
    question: '최근 미국의 트럼프 대통령은 0000 해협에 대한 해상 지원을 영국, 독일, 중국, 일본, 한국 5개국에 요청했다.',
    letters: ['아', '요', '갈', '누', '즈', '용', '호', '에', '앙', '이', '루', '르', '무', '헤', '샤'],
    answer: '호르무즈',
    answerLength: 4
  },
  {
    type: 'subjective',
    question: '현재 이스라엘의 총리는 누구일까요?',
    answer: '네티냐후'
  },
  {
    type: 'multiple',
    question: '물가가 지속적으로 상승하여 화폐 가치가 하락하는 현상을 무엇이라고 할까요?',
    options: ['디플레이션', '인플레이션', '스태그플레이션', '리플레이션'],
    answer: 2
  },
  {
    type: 'word',
    question: '기업이 주식을 최초로 대중에게 공개하여 상장하는 절차를 영어 약자로 000이라고 합니다.',
    letters: ['I', 'P', 'O', 'C', 'E', 'O', 'M', 'B', 'A', 'T', 'D', 'K', 'L', 'N', 'V'],
    answer: 'IPO',
    answerLength: 3
  },
  {
    type: 'subjective',
    question: '국가나 지방자치단체가 재정 수입을 조달하기 위해 법률에 따라 국민에게 강제적으로 징수하는 돈은 무엇인가요?',
    answer: '세금'
  },
  {
    type: 'multiple',
    question: '주식시장에서 기업의 가치와 주가가 지나치게 고평가되어 거품이 끼었다가 한 번에 꺼지는 경제적 현상을 비유한 말은?',
    options: ['블랙스완', '버블', '데드캣 바운스', '곰 시장'],
    answer: 2
  },
  {
    type: 'word',
    question: '기술력과 성장성이 높은 벤처기업들이 상장되어 거래되는 한국의 주식시장은 000입니다.',
    letters: ['코', '스', '피', '닥', '스', '다', '넥', '트', '스', '타', '론', '비', '즈', '업', '골'],
    answer: '코스닥',
    answerLength: 3
  },
  {
    type: 'subjective',
    question: '수입품에 부과하여 국내 산업을 보호하고 정부 재정 수입을 늘리기 위해 매기는 세금은 무엇인가요?',
    answer: '관세'
  },
  {
    type: 'multiple',
    question: '경기 침체(Stagnation)와 물가 상승(Inflation)이 동시에 발생하는 현상을 무엇이라고 할까요?',
    options: ['디플레이션', '하이퍼인플레이션', '스태그플레이션', '애그플레이션'],
    answer: 3
  }
]

export class Leveltest {
  constructor() {
    this.currentIndex = 0
    this.answers = Array(PROBLEMS.length).fill(null)
  }

  initCurrentAnswer() {
    const currentProblem = PROBLEMS[this.currentIndex]
    if (this.answers[this.currentIndex] === null) {
      if (currentProblem.type === 'multiple') {
        this.answers[this.currentIndex] = null
      } else if (currentProblem.type === 'word') {
        this.answers[this.currentIndex] = Array(currentProblem.answerLength).fill('')
      } else if (currentProblem.type === 'subjective') {
        this.answers[this.currentIndex] = ''
      }
    }
  }

  calculateScore() {
    let score = 0
    PROBLEMS.forEach((prob, index) => {
      const userAnswer = this.answers[index]
      if (prob.type === 'multiple') {
        if (userAnswer === prob.answer) score++
      } else if (prob.type === 'word') {
        const answerStr = Array.isArray(userAnswer) ? userAnswer.join('') : ''
        if (answerStr === prob.answer) score++
      } else if (prob.type === 'subjective') {
        const trimmedUser = (userAnswer || '').trim().replace(/\s+/g, '')
        const trimmedAns = prob.answer.trim().replace(/\s+/g, '')
        
        if (index === 5) { // 세금 문제 동의어 처리
          if (trimmedUser === '세금' || trimmedUser === '조세') {
            score++
            return
          }
        }
        
        if (trimmedUser === trimmedAns) score++
      }
    })
    return score
  }

  render() {
    this.initCurrentAnswer()
    const currentProblem = PROBLEMS[this.currentIndex]
    
    let pageClass = ''
    let contentHtml = ''
    
    if (currentProblem.type === 'multiple') {
      pageClass = 'problem-multiple-page'
      const selected = this.answers[this.currentIndex]
      contentHtml = `
        <div class="frame-group">
          <div class="group-wrapper">
            <img class="group-icon" src="${acornImg}" alt="도토리" />
          </div>
          <div class="div6">${currentProblem.question}</div>
        </div>
        <div class="instance-parent">
          ${currentProblem.options.map((option, idx) => {
            const index = idx + 1
            const isActive = selected === index
            return `
              <div class="ellipse-parent option-item ${isActive ? 'is-active' : ''}" data-index="${index}">
                <div class="instance-child check-circle">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="#0a6e3c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div class="div2">${option}</div>
              </div>
            `
          }).join('')}
        </div>
        <div class="wrapper btn-next" style="cursor: pointer;">
          <div class="div2">다음</div>
        </div>
      `
    } else if (currentProblem.type === 'word') {
      pageClass = 'problem-word-page'
      const slots = this.answers[this.currentIndex] || []
      contentHtml = `
        <div class="div2">${currentProblem.question}</div>
        <div class="inner">
          <img class="group-icon" src="${acornImg}" alt="도토리" />
        </div>
        <div class="word-slots-container">
          ${slots.map((char, index) => `
            <div class="word-slot ${char ? 'has-value' : ''}" data-index="${index}">${char}</div>
          `).join('')}
        </div>
        <div class="frame-parent">
          <div class="frame-group">
            ${currentProblem.letters.slice(0, 5).map(char => {
              const isUsed = slots.includes(char)
              return `<div class="wrapper letter-btn ${isUsed ? 'is-used' : ''}" data-char="${char}"><div class="div3">${char}</div></div>`
            }).join('')}
          </div>
          <div class="frame-group">
            ${currentProblem.letters.slice(5, 10).map(char => {
              const isUsed = slots.includes(char)
              return `<div class="wrapper letter-btn ${isUsed ? 'is-used' : ''}" data-char="${char}"><div class="div3">${char}</div></div>`
            }).join('')}
          </div>
          <div class="frame-group">
            ${currentProblem.letters.slice(10, 15).map(char => {
              const isUsed = slots.includes(char)
              return `<div class="wrapper letter-btn ${isUsed ? 'is-used' : ''}" data-char="${char}"><div class="div3">${char}</div></div>`
            }).join('')}
          </div>
        </div>
        <div class="wrapper13 btn-next">
          <div class="div18">다음</div>
        </div>
      `
    } else if (currentProblem.type === 'subjective') {
      pageClass = 'problem-subjective-page'
      const value = this.answers[this.currentIndex] || ''
      contentHtml = `
        <div class="div2">${currentProblem.question}</div>
        <div class="parent">
          <input type="text" class="div3 subjective-input" placeholder="답안 입력" value="${value}" autofocus />
          <div class="frame-child underline-line"></div>
        </div>
        <div class="inner">
          <img class="group-icon" src="${acornImg}" alt="도토리" />
        </div>
        <div class="wrapper13 btn-next">
          <div class="div18">다음</div>
        </div>
      `
    }

    return `
      <div class="app-page-wrapper leveltest-page ${pageClass}">
        <div class="app-content-container" style="padding: 0; min-height: 844px; overflow: hidden; border-radius: 20px;">
          <div class="div">
            <img class="child btn-back" src="${arrowBackImg}" alt="뒤로가기" style="cursor: pointer;" />
            
            <div class="rectangle-parent">
              ${Array.from({ length: 10 }).map((_, index) => {
                let activeClass = ''
                let inactiveClass = ''
                if (currentProblem.type === 'multiple') {
                  activeClass = 'frame-child'
                  inactiveClass = 'frame-item'
                } else if (currentProblem.type === 'word') {
                  activeClass = 'frame-child'
                  inactiveClass = 'frame-inner'
                } else if (currentProblem.type === 'subjective') {
                  activeClass = 'frame-item'
                  inactiveClass = 'frame-child2'
                }
                const isPassed = index <= this.currentIndex
                return `<div class="${isPassed ? activeClass : inactiveClass}"></div>`
              }).join('')}
            </div>
            
            ${contentHtml}
          </div>
        </div>
      </div>
    `
  }

  mount(container) {
    const currentProblem = PROBLEMS[this.currentIndex]
    const backBtn = container.querySelector('.btn-back')
    const nextBtn = container.querySelector('.btn-next')
    
    const handleNext = () => {
      if (!this.isCurrentAnswerFilled()) return

      if (this.currentIndex < PROBLEMS.length - 1) {
        this.currentIndex++
        this.rerender(container)
      } else {
        const finalScore = this.calculateScore()
        const computedLevel = 200 + finalScore * 60 // 200 ~ 800
        console.log('레벨테스트 완료! 최종 맞춘 문제 수:', finalScore, '계산된 레벨:', computedLevel)
        
        let level = 'beginner'
        if (computedLevel >= 620) {
          level = 'advanced'
        } else if (computedLevel >= 440) {
          level = 'intermediate'
        } else {
          level = 'beginner'
        }
        
        localStorage.setItem('user-level', level)
        localStorage.setItem('user-level-score', computedLevel.toString())
        navigateTo('levelmeasure')
      }
    }

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (this.currentIndex > 0) {
          this.currentIndex--
          this.rerender(container)
        } else {
          navigateTo('teststart')
        }
      })
    }

    if (currentProblem.type === 'multiple') {
      const options = container.querySelectorAll('.option-item')
      
      const updateButtonState = () => {
        if (this.answers[this.currentIndex] !== null) {
          nextBtn.classList.add('is-active')
        } else {
          nextBtn.classList.remove('is-active')
        }
      }

      options.forEach(option => {
        option.addEventListener('click', () => {
          options.forEach(opt => opt.classList.remove('is-active'))
          option.classList.add('is-active')
          this.answers[this.currentIndex] = parseInt(option.dataset.index)
          updateButtonState()
        })
      })

      if (nextBtn) {
        nextBtn.addEventListener('click', handleNext)
      }
      updateButtonState()

    } else if (currentProblem.type === 'word') {
      const letterBtns = container.querySelectorAll('.letter-btn')
      const slots = container.querySelectorAll('.word-slot')
      
      const updateUI = () => {
        const currentSlots = this.answers[this.currentIndex]
        slots.forEach((slot, idx) => {
          const val = currentSlots[idx] || ''
          slot.textContent = val
          if (val) {
            slot.classList.add('has-value')
          } else {
            slot.classList.remove('has-value')
          }
        })

        const isComplete = currentSlots.every(val => val !== '')
        if (isComplete) {
          nextBtn.classList.add('is-active')
        } else {
          nextBtn.classList.remove('is-active')
        }
      }

      letterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.classList.contains('is-used')) return
          const currentSlots = this.answers[this.currentIndex]
          const emptyIndex = currentSlots.indexOf('')
          if (emptyIndex !== -1) {
            const char = btn.dataset.char
            currentSlots[emptyIndex] = char
            btn.classList.add('is-used')
            updateUI()
          }
        })
      })

      slots.forEach((slot, idx) => {
        slot.addEventListener('click', () => {
          const currentSlots = this.answers[this.currentIndex]
          const char = currentSlots[idx]
          if (!char) return

          currentSlots[idx] = ''
          const matchedBtn = Array.from(letterBtns).find(
            btn => btn.dataset.char === char && btn.classList.contains('is-used')
          )
          if (matchedBtn) {
            matchedBtn.classList.remove('is-used')
          }
          updateUI()
        })
      })

      if (nextBtn) {
        nextBtn.addEventListener('click', handleNext)
      }
      updateUI()

    } else if (currentProblem.type === 'subjective') {
      const input = container.querySelector('.subjective-input')
      
      const updateButtonState = () => {
        const val = input.value.trim()
        this.answers[this.currentIndex] = val
        if (val) {
          nextBtn.classList.add('is-active')
        } else {
          nextBtn.classList.remove('is-active')
        }
      }

      if (input) {
        input.addEventListener('input', updateButtonState)
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            const val = input.value.trim()
            if (val) {
              this.answers[this.currentIndex] = val
              handleNext()
            }
          }
        })
        
        input.focus()
        const valLen = input.value.length
        input.setSelectionRange(valLen, valLen)
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', handleNext)
      }
      updateButtonState()
    }
  }

  isCurrentAnswerFilled() {
    const currentProblem = PROBLEMS[this.currentIndex]
    const userAnswer = this.answers[this.currentIndex]
    if (currentProblem.type === 'multiple') {
      return userAnswer !== null
    } else if (currentProblem.type === 'word') {
      return userAnswer && userAnswer.every(val => val !== '')
    } else if (currentProblem.type === 'subjective') {
      return userAnswer && userAnswer.trim() !== ''
    }
    return false
  }

  rerender(container) {
    container.innerHTML = this.render()
    this.mount(container)
  }
}
