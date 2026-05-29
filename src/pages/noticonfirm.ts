import { Page, navigateTo } from '../router'
import notiConfirmImg from '../assets/noti_confirm.png'

export class Noticonfirm implements Page {
  private notiTime: string = 'morning'

  constructor() {
    this.notiTime = localStorage.getItem('noti-time') || 'morning'
  }

  private formatTimeText(time: string): string {
    switch (time) {
      case 'morning':
        return '아침 8시'
      case 'lunch':
        return '낮 1시'
      case 'evening':
        return '저녁 8시'
      case 'night':
        return '취침 전 11시'
      default:
        return '아침 8시'
    }
  }

  render(): string {
    return `
      <div class="app-page-wrapper noticonfirm-page">
        <div class="app-content-container">
          <!-- 상단 알림 확인 마스코트 일러스트 (반응형) -->
          <div class="mascot-wrapper">
            <img class="mascot-confirm-image" src="${notiConfirmImg}" alt="알림 설정 완료" />
          </div>

          <!-- 안내 문구 영역 -->
          <div class="message-section">
            <h1 class="confirm-title global-font-yde">알겠어요!</h1>
            <p class="confirm-subtitle global-font-noto">
              매일 ${this.formatTimeText(this.notiTime)}에 알림을 드릴게요<br />
              알림은 나중에 설정에서 변경할 수 있어요
            </p>
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
        // 최종 온보딩 완료 처리
        localStorage.setItem('onboarding-completed', 'true')
        navigateTo('')
      })
    }
  }
}
