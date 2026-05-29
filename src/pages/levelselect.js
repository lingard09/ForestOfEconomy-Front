import { navigateTo } from '../router'
import coinImg from '../assets/coin.png'

export class Levelselect {
  selectedLevel = null

  render() {
    return `
      <div class="app-page-wrapper levelselect-page">
        <div class="app-content-container" style="position: relative; background: white; overflow: hidden; min-height: 100%;">
          
          <!-- 상단 헤더 영역 -->
          <div class="parent">
            <img class="icon" src="${coinImg}" alt="도토리 코인" />
            <div class="group">
              <div class="div3 global-font-noto">본인에게 맞는 레벨을 선택해주세요</div>
              <div class="div4 global-font-noto">누르면 레벨별 상세 설명을 확인할 수 있어요</div>
            </div>
          </div>

          <!-- 레벨 옵션 목록 영역 -->
          <div class="frame-parent">
            <div class="frame-group">
              <!-- 초보 -->
              <div class="frame-container">
                <div class="ellipse-parent level-option-item" data-level="beginner">
                  <div class="frame-child checkbox-box"></div>
                  <div class="lv-200 global-font-noto">초보 (lv. 200)</div>
                </div>
                <div class="div2 global-font-noto">경제 뉴스를 쉽게 이해할 수 있는 수준</div>
              </div>
              
              <!-- 중수 -->
              <div class="frame-container">
                <div class="ellipse-group level-option-item" data-level="intermediate">
                  <div class="frame-item checkbox-box"></div>
                  <div class="lv-400 global-font-noto">중수 (lv. 400)</div>
                </div>
                <div class="div2 global-font-noto">경제 뉴스를 어느 정도 탐독할 수 있는 수준</div>
              </div>
            </div>
            
            <!-- 고수 -->
            <div class="frame-container">
              <div class="ellipse-group level-option-item" data-level="advanced">
                <div class="frame-item checkbox-box"></div>
                <div class="lv-400 global-font-noto">고수 (lv. 600)</div>
              </div>
              <div class="div2 global-font-noto">경제 뉴스를 분석하고, 비판적으로 이해할 수 있는 수준</div>
            </div>
          </div>

          <!-- 하단 다음 버튼 -->
          <div class="wrapper">
            <button class="btn-submit global-font-noto div5" disabled>다음</button>
          </div>

        </div>
      </div>
    `
  }

  mount(container) {
    const listContainer = container.querySelector('.frame-parent')
    const submitBtn = container.querySelector('.btn-submit')

    if (listContainer && submitBtn) {
      listContainer.addEventListener('click', (e) => {
        const item = e.target.closest('.level-option-item')
        if (!item) return

        const level = item.dataset.level
        this.selectedLevel = level

        // 모든 아이템에서 active 제거 및 체크마크 초기화
        listContainer.querySelectorAll('.level-option-item').forEach((el) => {
          el.classList.remove('is-active')
          const checkbox = el.querySelector('.checkbox-box')
          if (checkbox) checkbox.innerHTML = ''
        })

        // 현재 클릭한 아이템 활성화 및 체크마크 추가
        item.classList.add('is-active')
        const checkbox = item.querySelector('.checkbox-box')
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

        // 다음 버튼 활성화
        submitBtn.disabled = !this.selectedLevel
      })

      submitBtn.addEventListener('click', () => {
        if (this.selectedLevel) {
          console.log('선택된 레벨:', this.selectedLevel)
          localStorage.setItem('user-level', this.selectedLevel)
          if (this.selectedLevel === 'beginner') {
            navigateTo('beginner')
          } else if (this.selectedLevel === 'intermediate') {
            navigateTo('intermediate')
          } else if (this.selectedLevel === 'advanced') {
            navigateTo('advanced')
          } else {
            navigateTo('notisuggest')
          }
        }
      })
    }
  }
}
