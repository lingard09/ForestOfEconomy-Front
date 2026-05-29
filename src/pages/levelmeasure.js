import { navigateTo } from '../router'
import levelMeasureMascot from '../assets/level_measure.png'

export class Levelmeasure {
  render() {
    return `
      <div class="app-page-wrapper levelmeasure-page">
        <div class="app-content-container" style="padding: 0; min-height: 844px; overflow: hidden; border-radius: 20px;">
          <div class="div">
            <div class="div2">
              <div class="div3"></div>
              <div class="div4">로고</div>
            </div>
            <div class="parent">
              <div class="div5">잠시만 기다려주세요</div>
              <div class="div6">테스트 결과를 토대로 레벨을 측정하고 있어요</div>
            </div>
            <img class="child" src="${levelMeasureMascot}" alt="레벨 측정 마스코트" />
          </div>
        </div>
      </div>
    `
  }

  mount(container) {
    // 2초 대기 후 결과 페이지로 이동하여 AI 분석 연출 효과 극대화
    setTimeout(() => {
      const level = localStorage.getItem('user-level') || 'beginner'
      navigateTo(level)
    }, 2000)
  }
}
