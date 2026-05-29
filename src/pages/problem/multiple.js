import { navigateTo } from '../../router'
import acornImg from '../../assets/acorn.png'
import arrowBackImg from '../../assets/arrow_back.png'

export class Multiple {
  selectedOption = 1

  render() {
    return `
      <div class="app-page-wrapper problem-multiple-page">
        <div class="app-content-container" style="padding: 0; min-height: 844px; overflow: hidden; border-radius: 20px;">
          <div class="div">
            <img class="child btn-back" src="${arrowBackImg}" alt="뒤로가기" style="cursor: pointer;" />
            
            <div class="rectangle-parent">
              <div class="frame-child"></div>
              <div class="frame-item"></div>
              <div class="frame-item"></div>
              <div class="frame-item"></div>
              <div class="frame-item"></div>
              <div class="frame-item"></div>
              <div class="frame-item"></div>
              <div class="frame-item"></div>
              <div class="frame-item"></div>
              <div class="frame-item"></div>
            </div>
            
            <div class="instance-parent">
              <div class="ellipse-parent option-item ${this.selectedOption === 1 ? 'is-active' : ''}" data-index="1">
                <div class="instance-child check-circle">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="#0a6e3c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div class="div2">모즈타파</div>
              </div>
              
              <div class="ellipse-parent option-item ${this.selectedOption === 2 ? 'is-active' : ''}" data-index="2">
                <div class="instance-child check-circle">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="#0a6e3c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div class="div2">전공타파</div>
              </div>
              
              <div class="ellipse-parent option-item ${this.selectedOption === 3 ? 'is-active' : ''}" data-index="3">
                <div class="instance-child check-circle">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="#0a6e3c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div class="div2">소나타파</div>
              </div>
              
              <div class="ellipse-parent option-item ${this.selectedOption === 4 ? 'is-active' : ''}" data-index="4">
                <div class="instance-child check-circle">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="#0a6e3c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div class="div2">무스탕파</div>
              </div>
            </div>
            
            <div class="frame-group">
              <div class="group-wrapper">
                <img class="group-icon" src="${acornImg}" alt="도토리" />
              </div>
              <div class="div6">이란의 최고 지도자인 하메네이가 미군의 폭격으로 사망한 이후, 다음 지도자로 선출된 사람은?</div>
            </div>
            
            <div class="wrapper btn-next" style="cursor: pointer;">
              <div class="div2">다음</div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  mount(container) {
    const options = container.querySelectorAll('.option-item')
    const nextBtn = container.querySelector('.btn-next')
    const backBtn = container.querySelector('.btn-back')

    options.forEach((option) => {
      option.addEventListener('click', () => {
        // 모든 옵션에서 활성화 해제
        options.forEach((opt) => {
          opt.classList.remove('is-active')
        })
        // 현재 클릭한 옵션 활성화
        option.classList.add('is-active')
        this.selectedOption = parseInt(option.dataset.index)
      })
    })

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.history.back()
      })
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        console.log('선택된 정답 인덱스:', this.selectedOption)
        navigateTo('today')
      })
    }
  }
}
