import { navigateTo } from '../../router'
import acornImg from '../../assets/acorn.png'
import arrowBackImg from '../../assets/arrow_back.png'

export class Word {
  slots = ['', '', '', '']

  render() {
    return `
      <div class="app-page-wrapper problem-word-page">
        <div class="app-content-container" style="padding: 0; min-height: 844px; overflow: hidden; border-radius: 20px;">
          <div class="div">
            <img class="child btn-back" src="${arrowBackImg}" alt="뒤로가기" style="cursor: pointer;" />
            
            <div class="rectangle-parent">
              <div class="frame-child"></div>
              <div class="frame-child"></div>
              <div class="frame-inner"></div>
              <div class="frame-inner"></div>
              <div class="frame-inner"></div>
              <div class="frame-inner"></div>
              <div class="frame-inner"></div>
              <div class="frame-inner"></div>
              <div class="frame-inner"></div>
              <div class="frame-inner"></div>
            </div>
            
            <div class="div2">최근 미국의 트럼프 대통령은 0000 해협에 대한 해상 지원을 영국, 독일, 중국, 일본, 한국 5개국에 요청했다.</div>
            
            <div class="inner">
              <img class="group-icon" src="${acornImg}" alt="도토리" />
            </div>

            <!-- 동적 단어 입력 슬롯 영역 (원래 .item 이미지 대체) -->
            <div class="word-slots-container">
              <div class="word-slot" data-index="0"></div>
              <div class="word-slot" data-index="1"></div>
              <div class="word-slot" data-index="2"></div>
              <div class="word-slot" data-index="3"></div>
            </div>
            
            <div class="frame-parent">
              <div class="frame-group">
                <div class="wrapper letter-btn" data-char="아"><div class="div3">아</div></div>
                <div class="wrapper letter-btn" data-char="요"><div class="div3">요</div></div>
                <div class="wrapper letter-btn" data-char="갈"><div class="div3">갈</div></div>
                <div class="wrapper letter-btn" data-char="누"><div class="div3">누</div></div>
                <div class="wrapper letter-btn" data-char="즈"><div class="div3">즈</div></div>
              </div>
              <div class="frame-group">
                <div class="wrapper letter-btn" data-char="용"><div class="div3">용</div></div>
                <div class="wrapper letter-btn" data-char="호"><div class="div3">호</div></div>
                <div class="wrapper letter-btn" data-char="에"><div class="div3">에</div></div>
                <div class="wrapper letter-btn" data-char="앙"><div class="div3">앙</div></div>
                <div class="wrapper letter-btn" data-char="이"><div class="div3">이</div></div>
              </div>
              <div class="frame-group">
                <div class="wrapper letter-btn" data-char="루"><div class="div3">루</div></div>
                <div class="wrapper letter-btn" data-char="르"><div class="div3">르</div></div>
                <div class="wrapper letter-btn" data-char="무"><div class="div3">무</div></div>
                <div class="wrapper letter-btn" data-char="헤"><div class="div3">헤</div></div>
                <div class="wrapper letter-btn" data-char="샤"><div class="div3">샤</div></div>
              </div>
            </div>
            
            <div class="wrapper13 btn-next">
              <div class="div18">다음</div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  mount(container) {
    const letterBtns = container.querySelectorAll('.letter-btn')
    const slots = container.querySelectorAll('.word-slot')
    const nextBtn = container.querySelector('.btn-next')
    const backBtn = container.querySelector('.btn-back')

    const updateUI = () => {
      // 슬롯 값 갱신
      slots.forEach((slot, index) => {
        const value = this.slots[index]
        slot.textContent = value
        if (value) {
          slot.classList.add('has-value')
        } else {
          slot.classList.remove('has-value')
        }
      })

      // 모든 슬롯이 다 찼는지 검증
      const isComplete = this.slots.every((val) => val !== '')
      if (isComplete) {
        nextBtn.classList.add('is-active')
      } else {
        nextBtn.classList.remove('is-active')
      }
    }

    letterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('is-used')) return

        // 첫 번째 빈 슬롯 찾기
        const emptyIndex = this.slots.indexOf('')
        if (emptyIndex !== -1) {
          const char = btn.dataset.char
          this.slots[emptyIndex] = char
          btn.classList.add('is-used')
          updateUI()
        }
      })
    })

    slots.forEach((slot, index) => {
      slot.addEventListener('click', () => {
        const char = this.slots[index]
        if (!char) return

        // 슬롯 비우기
        this.slots[index] = ''

        // 문자 버튼 원상복귀
        const matchedBtn = Array.from(letterBtns).find(
          (btn) => btn.dataset.char === char && btn.classList.contains('is-used'),
        )
        if (matchedBtn) {
          matchedBtn.classList.remove('is-used')
        }

        updateUI()
      })
    })

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.history.back()
      })
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const isComplete = this.slots.every((val) => val !== '')
        if (isComplete) {
          console.log('입력한 답변:', this.slots.join(''))
          navigateTo('today') // 데일리 메인 화면으로 이동
        }
      })
    }

    updateUI()
  }
}
