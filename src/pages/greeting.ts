import { Page, navigateTo } from '../router'

export class Greeting implements Page {
  render(): string {
    return `
      <div class="app-page-wrapper greeting-page">
        <div class="app-content-container">
          <!-- 상단 타이틀 영역 -->
          <div class="greeting-text-section">
            <div class="greeting-title">
              <span class="global-font-noto">안녕하세요! 경제의 숲에 오신<br />여러분들을 환영합니다 :)</span>
            </div>
            <div class="greeting-subtitle">
              <span class="global-font-noto">매일매일 시사 경제 공부를 통해<br />열심히 성장해봅시다!</span>
            </div>
          </div>

          <!-- 중앙 마스코트 캐릭터 -->
          <div class="mascot-wrapper">
            <img
              class="greeting-mascot"
              src="https://api.builder.io/api/v1/image/assets/TEMP/a107d5a935522d44c6bc4205c76df2406a25c54e?width=410"
              alt="Forest of Economy mascot squirrel"
            />
          </div>

          <!-- 하단 시작하기 버튼 -->
          <div class="button-wrapper">
            <button class="btn-primary-green btn-start">시작하기</button>
          </div>
        </div>
      </div>
    `
  }

  mount(container: HTMLElement): void {
    const startBtn = container.querySelector('.btn-start')
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        navigateTo('namesetting')
      })
    }
  }
}
