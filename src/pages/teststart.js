import { navigateTo } from '../router'
import coinImg from '../assets/coin.png'

export class Teststart {
  render() {
    return `
      <div class="app-page-wrapper teststart-page">
        <div class="app-content-container" style="padding: 0; min-height: 844px; overflow: hidden; border-radius: 20px;">
          <div class="div">
            <div class="parent">
              <img class="icon" src="${coinImg}" alt="도토리 코인" />
              
              <div class="ai-parent">
                <div class="ai">지금부터 AI 기반<br> 레벨 테스트가 시작됩니다</div>
                <div class="div2"> 총 10문제입니다</div>
              </div>
            </div>
            
            <div class="wrapper">
              <div class="div3 btn-confirm">
                <div class="div4">레벨테스트 시작하기</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  mount(container) {
    const confirmBtn = container.querySelector('.btn-confirm')

    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        navigateTo('leveltest')
      })
    }
  }
}
