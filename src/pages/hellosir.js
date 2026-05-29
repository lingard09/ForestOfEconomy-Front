import { navigateTo } from '../router'
import coinImg from '../assets/coin.png'
import mascotImg from '../assets/mascot.png'

export class Hellosir {
  nickname = '사용자'
  timerId = null

  constructor() {
    const storedNickname = localStorage.getItem('user-nickname')
    if (storedNickname) {
      this.nickname = storedNickname
    }
  }

  render() {
    return `
      <div class="app-page-wrapper hellosir-page">
        <div class="app-content-container">
          <!-- 상단 헤더 영역 (코인 + 웰컴텍스트) -->
          <div class="parent-section">
            <img class="coin-icon" src="${coinImg}" alt="도토리 코인" />
            <div class="welcome-text-wrapper">
              <div class="welcome-text global-font-noto">
                <span>반가워요<br /></span>
                <span class="user-nickname">${this.nickname} </span>
                <span>님!</span>
              </div>
            </div>
          </div>

          <!-- 중앙 다람쥐 캐릭터 (반응형) -->
          <div class="mascot-wrapper">
            <img class="mascot-character" src="${mascotImg}" alt="다람쥐 마스코트" />
          </div>
        </div>
      </div>
    `
  }

  mount(container) {
    // 3초 뒤에 난이도 선택 화면(/leveloption)으로 자동 이동
    this.timerId = window.setTimeout(() => {
      navigateTo('leveloption')
    }, 3000)
  }

  unmount() {
    if (this.timerId) {
      clearTimeout(this.timerId)
      this.timerId = null
    }
  }
}
