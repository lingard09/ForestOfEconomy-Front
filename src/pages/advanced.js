import { navigateTo } from '../router'
import badgeAdvancedImg from '../assets/badge_advanced.png'
import squirrelAdvancedImg from '../assets/squirrel_advanced.png'

export class Advanced {
  render() {
    return `
      <div class="app-page-wrapper advanced-page">
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
                  <div class="div5">ADVANCED</div>
                </div>
                <div class="div6">${localStorage.getItem('user-level-score') || '600'} Lv</div>
              </div>
              <div class="div7">풍부한 경제지식을 가진 <br>고수 다람쥐예요! <br>어떤 문제도 해결할 준비가 되었어요.</div>
            </div>
            
            <div class="container">
              <div class="div8 btn-confirm">
                <div class="div9">확인하기</div>
              </div>
            </div>
            
            <div class="inner" style="background-image: url(${squirrelAdvancedImg});">
            </div>
            
            <img class="object-icon" src="${badgeAdvancedImg}" alt="고수 훈장" />
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
