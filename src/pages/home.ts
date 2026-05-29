import { Page, navigateTo } from '../router'
import homeMascotImg from '../assets/home_mascot.png'

export class Home implements Page {
  render(): string {
    return `
      <div class="home-page">
        <div class="app-info">
          <h1 class="app-title">경제의 숲</h1>
          <p class="app-subtitle">매일매일 경제 지식 한토막</p>
        </div>

        <div class="mascot-wrapper">
          <img
            class="mascot-image"
            src="${homeMascotImg}"
            alt="경제의 숲 마스코트"
          />
        </div>

        <div class="social-login-section">
          <hr class="divider" />
          <div class="social-icons">
            <img
              class="social-icon"
              src="https://api.builder.io/api/v1/image/assets/TEMP/aedc79130e07ecc687d42d6aecb85d8fb7f3c074?width=81"
              alt="구글 로그인"
            />
            <img
              class="social-icon naver-icon"
              src="https://api.builder.io/api/v1/image/assets/TEMP/6db46ead6f02484dfd98268044c3c290f1cc93cf?width=81"
              alt="네이버 로그인"
            />
            <img
              class="social-icon kakao-icon"
              src="https://api.builder.io/api/v1/image/assets/TEMP/1aa3797f7c58f7c34b3e4138a4e2bea2aec57fe9?width=81"
              alt="카카오 로그인"
            />
          </div>
        </div>
      </div>
    `
  }

  mount(container: HTMLElement): void {
    const socialIcons = container.querySelectorAll('.social-icon')
    socialIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        navigateTo('greeting')
      })
    })
  }
}
