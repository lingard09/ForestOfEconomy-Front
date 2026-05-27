<template>
  <div class="onboarding-page">
    <div class="app-info">
      <h1 class="app-title">경제의 숲</h1>
      <p class="app-subtitle">매일매일 경제 지식 한토막</p>
    </div>

    <div class="mascot-wrapper">
      <img
        class="mascot-image"
        src="../assets/home_mascot.png"
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
</template>

<style scoped>
.onboarding-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background: #fff;
  padding: 80px 24px 60px;
}

.app-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.app-title {
  font-family:
    'Yde street',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 27px;
  font-weight: 700;
  color: #000;
  text-align: center;
  line-height: normal;
}

.app-subtitle {
  font-family:
    'Noto Sans KR',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  text-align: center;
  line-height: normal;
}

.mascot-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.mascot-image {
  width: 213px;
  height: auto;
  max-width: 60vw;
}

.social-login-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.divider {
  width: 230px;
  border: none;
  border-top: 1px solid #d9d9d9;
  margin: 0;
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 44px;
}

.social-icon {
  width: 41px;
  height: 41px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.social-icon:hover {
  opacity: 0.8;
}

.naver-icon {
  border-radius: 24px;
}

.kakao-icon {
  border-radius: 22px;
}

@media (min-width: 768px) {
  .onboarding-page {
    padding: 120px 24px 80px;
  }

  .app-title {
    font-size: 32px;
  }

  .app-subtitle {
    font-size: 18px;
  }

  .mascot-image {
    width: 280px;
  }
}
</style>
