import { navigateTo } from '../../router'
import acornImg from '../../assets/acorn.png'
import arrowBackImg from '../../assets/arrow_back.png'

export class Subjective {
  render() {
    return `
      <div class="app-page-wrapper problem-subjective-page">
        <div class="app-content-container" style="padding: 0; min-height: 844px; overflow: hidden; border-radius: 20px;">
          <div class="div">
            <img class="child btn-back" src="${arrowBackImg}" alt="뒤로가기" style="cursor: pointer;" />
            
            <div class="rectangle-parent">
              <div class="frame-item"></div>
              <div class="frame-item"></div>
              <div class="frame-item"></div>
              <div class="frame-child2"></div>
              <div class="frame-child2"></div>
              <div class="frame-child2"></div>
              <div class="frame-child2"></div>
              <div class="frame-child2"></div>
              <div class="frame-child2"></div>
              <div class="frame-child2"></div>
            </div>
            
            <div class="div2">현재 이스라엘의 총리는?</div>
            
            <div class="parent">
              <input type="text" class="div3 subjective-input" placeholder="답안 입력" autofocus />
              <div class="frame-child underline-line"></div>
            </div>
            
            <div class="inner">
              <img class="group-icon" src="${acornImg}" alt="도토리" />
            </div>
          </div>
        </div>
      </div>
    `
  }

  mount(container) {
    const input = container.querySelector('.subjective-input')
    const nextBtn = container.querySelector('.btn-next')
    const backBtn = container.querySelector('.btn-back')

    const updateButtonState = () => {
      const value = input.value.trim()
      if (value) {
        nextBtn.classList.add('is-active')
      } else {
        nextBtn.classList.remove('is-active')
      }
    }

    if (input) {
      input.addEventListener('input', updateButtonState)
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const value = input.value.trim()
          if (value) {
            console.log('입력한 답변:', value)
            navigateTo('today')
          }
        }
      })
    }

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.history.back()
      })
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const value = input.value.trim()
        if (value) {
          console.log('입력한 답변:', value)
          navigateTo('today')
        }
      })
    }

    updateButtonState()
  }
}
