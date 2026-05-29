import { navigateTo } from '../router'
import coinImg from '../assets/coin.png'

export class Leveloption {
  render() {
    return `
      <div class="app-page-wrapper leveloption-page">
        <div class="app-content-container">
          <div class="div">
            <div class="parent">
              <img class="icon" src="${coinImg}" alt="도토리 코인" />
              
              <div class="group">
                <div class="div2 global-font-noto">시사/경제 상식 정도에 따라 <br>문제의 난이도가 달라져요</div>
                <div class="div3 global-font-noto">원하는 시작 방법을 선택해주세요</div>
              </div>
            </div>
            
            <div class="container">
              <div class="div4 select-direct-btn">
                <div class="div5 global-font-noto">직접 선택하기</div>
              </div>
              <div class="ai level-test-btn">
                <div class="div5 global-font-noto">레벨 테스트로 시작하기</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  mount(container) {
    const selectDirectBtn = container.querySelector('.select-direct-btn')
    const levelTestBtn = container.querySelector('.level-test-btn')

    if (selectDirectBtn) {
      selectDirectBtn.addEventListener('click', () => {
        console.log('직접 선택하기 클릭')
        navigateTo('levelselect')
      })
    }

    if (levelTestBtn) {
      levelTestBtn.addEventListener('click', () => {
        console.log('레벨 테스트로 시작하기 클릭')
        navigateTo('teststart')
      })
    }
  }
}
