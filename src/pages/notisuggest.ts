import { Page, navigateTo } from '../router'
import bellImg from '../assets/bell.png'

export class Notisuggest implements Page {
  render(): string {
    return `
      <div class="app-page-wrapper notisuggest-page">
        <div class="app-content-container">
          <!-- 상단 질문 영역 (알림 종 아이콘 + 텍스트) -->
          <div class="question-container">
            <img class="bell-icon" src="${bellImg}" alt="알림 종" />
            <div class="question-text global-font-noto">
              매일매일 놓치지 않게<br />알림을 받아보시겠어요?
            </div>
          </div>

          <!-- 하단 버튼 영역 -->
          <div class="button-container">
            <button class="btn-primary-green btn-round-shape btn-accept">네, 해주세요!</button>
            <button class="decline-button global-font-noto btn-decline">아니요, 괜찮아요</button>
          </div>
        </div>
      </div>
    `
  }

  mount(container: HTMLElement): void {
    const acceptBtn = container.querySelector('.btn-accept')
    const declineBtn = container.querySelector('.btn-decline')

    if (acceptBtn) {
      acceptBtn.addEventListener('click', async () => {
        console.log('알림 허용')
        
        if (!('Notification' in window)) {
          alert('이 브라우저는 시스템 알림을 지원하지 않습니다.')
          navigateTo('notitime')
          return
        }

        try {
          const permission = await Notification.requestPermission()
          if (permission === 'granted') {
            console.log('알림 권한 허용됨')
            localStorage.setItem('noti-agreement', 'true')
          } else {
            console.log('알림 권한 거부됨')
            localStorage.setItem('noti-agreement', 'false')
          }
        } catch (error) {
          console.error('알림 권한 요청 중 에러:', error)
        }

        navigateTo('notitime')
      })
    }

    if (declineBtn) {
      declineBtn.addEventListener('click', () => {
        console.log('알림 거부')
        localStorage.setItem('noti-agreement', 'false')
        navigateTo('')
      })
    }
  }
}
