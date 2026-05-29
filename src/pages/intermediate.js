import { navigateTo } from '../router'
import badgeIntermediateImg from '../assets/badge_intermediate.png'
import squirrelIntermediateImg from '../assets/squirrel_intermediate.png'

export class Intermediate {
  render() {
    return `
      <div class="app-page-wrapper intermediate-page">
        <div class="app-content-container" style="padding: 0; min-height: 844px; overflow: hidden; border-radius: 20px;">
          <div class="div">
            <div class="div2">
              <div class="div3"></div>
              <div class="div4">로고</div>
            </div>
            
            <div class="child"></div>
            <div class="item"></div>
            
            <div class="frame-parent">
              <div class="frame-group">
                <div class="wrapper">
                  <div class="div5">INTERMEDIATE</div>
                </div>
                <div class="div6">${localStorage.getItem('user-level-score') || '400'} Lv</div>
              </div>
              <div class="div7">열심히 경험을 쌓은 중수 다람쥐예요! <br>응용력을 키우고 더 넓은 세상을 <br>탐험할 준비가 되었어요.</div>
            </div>
            
            <img class="object-icon" src="${badgeIntermediateImg}" alt="중수 훈장" />
            <img class="object-icon2" src="${squirrelIntermediateImg}" alt="중수 다람쥐" />
            
            <div class="container">
              <div class="div8 btn-confirm">
                <div class="div9">확인하기</div>
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
        navigateTo('notisuggest')
      })
    }
  }
}
