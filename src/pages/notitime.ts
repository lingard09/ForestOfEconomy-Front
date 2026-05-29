import { Page, navigateTo } from '../router'
import bellImg from '../assets/bell.png'

interface TimeOption {
  label: string
  value: string
}

export class Notitime implements Page {
  private selectedTime: string | null = null
  private timeOptions: TimeOption[] = [
    { label: '아침 (8 AM)', value: 'morning' },
    { label: '점심 (1 PM)', value: 'lunch' },
    { label: '저녁 (8 PM)', value: 'evening' },
    { label: '취침 전 (11 PM)', value: 'night' }
  ]

  render(): string {
    return `
      <div class="app-page-wrapper notitime-page">
        <div class="app-content-container">
          <!-- 상단 질문 영역 (알림 종 아이콘 + 텍스트) -->
          <div class="header-section">
            <img class="bell-icon" src="${bellImg}" alt="알림 종" />
            <div class="header-title global-font-noto">언제 알람을 드릴까요?</div>
          </div>

          <!-- 알림 시간대 목록 영역 (중앙에 유연하게 배치) -->
          <div class="time-options-list">
            ${this.timeOptions.map(option => {
              const isActive = this.selectedTime === option.value
              return `
                <div
                  class="option-item ${isActive ? 'is-active' : ''}"
                  data-value="${option.value}"
                >
                  <div class="circle-checkbox">
                    ${isActive ? `
                      <svg
                        class="check-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0a6e3c"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ` : ''}
                  </div>
                  <span class="option-label global-font-noto">${option.label}</span>
                </div>
              `
            }).join('')}
          </div>

          <!-- 하단 다음 버튼 -->
          <div class="button-wrapper">
            <button
              class="submit-button global-font-noto btn-submit"
              ${!this.selectedTime ? 'disabled' : ''}
            >
              다음
            </button>
          </div>
        </div>
      </div>
    `
  }

  mount(container: HTMLElement): void {
    const listContainer = container.querySelector('.time-options-list')
    const submitBtn = container.querySelector('.btn-submit') as HTMLButtonElement

    if (listContainer && submitBtn) {
      listContainer.addEventListener('click', (e) => {
        const optionItem = (e.target as HTMLElement).closest('.option-item') as HTMLElement | null
        if (!optionItem) return

        const val = optionItem.dataset.value || null
        this.selectedTime = val

        // UI 갱신 (전체 active 해제 후 현재 클릭한 아이템 active 설정)
        listContainer.querySelectorAll('.option-item').forEach(el => {
          el.classList.remove('is-active')
          const checkbox = el.querySelector('.circle-checkbox')
          if (checkbox) checkbox.innerHTML = ''
        })

        optionItem.classList.add('is-active')
        const checkbox = optionItem.querySelector('.circle-checkbox')
        if (checkbox) {
          checkbox.innerHTML = `
            <svg
              class="check-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0a6e3c"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          `
        }

        // 버튼 활성화
        submitBtn.disabled = !this.selectedTime
      })

      submitBtn.addEventListener('click', () => {
        if (this.selectedTime) {
          console.log('선택된 알람 시간:', this.selectedTime)
          localStorage.setItem('noti-time', this.selectedTime)
          navigateTo('noticonfirm')
        }
      })
    }
  }
}
