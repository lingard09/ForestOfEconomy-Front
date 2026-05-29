import { navigateTo } from '../router'
import coinImg from '../assets/coin.png'

export class Namesetting {
  nickname = ''

  render() {
    return `
      <div class="app-page-wrapper namesetting-page">
        <div class="app-content-container">
          <!-- 상단 헤더 영역 (코인 + 타이틀) -->
          <div class="header-section">
            <div class="icon-wrapper">
              <img class="coin-image" src="${coinImg}" alt="도토리 코인" />
            </div>
            <div class="instruction-text global-font-noto">
              앱 내에서 사용할<br />닉네임을 설정해주세요
            </div>
          </div>

          <!-- 중앙 인풋 영역 -->
          <div class="input-container">
            <input
              type="text"
              maxlength="6"
              placeholder="최대 6자"
              class="nickname-input global-font-noto"
              value="${this.nickname}"
            />
          </div>

          <!-- 하단 설정하기 버튼 -->
          <div class="button-wrapper">
            <button class="btn-primary-green btn-submit" disabled>
              설정하기
            </button>
          </div>
        </div>
      </div>
    `
  }

  mount(container) {
    const inputEl = container.querySelector('.nickname-input')
    const submitBtn = container.querySelector('.btn-submit')

    if (inputEl && submitBtn) {
      inputEl.focus()

      inputEl.addEventListener('input', (e) => {
        const val = e.target.value
        this.nickname = val
        submitBtn.disabled = !val.trim()
      })

      submitBtn.addEventListener('click', () => {
        if (this.nickname.trim()) {
          console.log('설정된 닉네임:', this.nickname)
          localStorage.setItem('user-nickname', this.nickname.trim())
          navigateTo('hellosir')
        }
      })
    }
  }
}
