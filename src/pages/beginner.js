import { navigateTo } from '../router'
import badgeBeginnerImg from '../assets/badge_beginner.png'
import squirrelBeginnerImg from '../assets/squirrel_beginner.png'

export class Beginner {
  render() {
    return `
      <div class="app-page-wrapper beginner-page">
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
                  <div class="div5">BEGINNER</div>
                </div>
                <div class="div6">${localStorage.getItem('user-level-score') || '200'} Lv</div>
              </div>
              <div class="div7">새싹 다람쥐는 이제 막 모험을<br>시작한 초보 다람쥐예요!<br>기본기를 배우고  차근차근 성장해요</div>
            </div>
            
            <img class="object-icon" src="${squirrelBeginnerImg}" alt="새싹 다람쥐" />
            <img class="object-icon2" src="${badgeBeginnerImg}" alt="초보 훈장" />
            
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
