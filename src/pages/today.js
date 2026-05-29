import { navigateTo } from '../router'
import childImg from '../assets/child.png'

export class Today {
  render() {
    return `
      <div class="today-page">
        <div class="today-parent">
          <div class="today-title">경제 쌓기</div>
          <div class="today-subtitle">오늘의 학습</div>
        </div>
        <div class="today-btn-wrapper">
          <button class="today-btn btn-confirm">
            확인하기
          </button>
        </div>
        <img class="today-child-img" alt="child" src="${childImg}" />
      </div>
    `
  }

  mount(container) {
    const confirmBtn = container.querySelector('.btn-confirm')
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        navigateTo('')
      })
    }
  }
}
