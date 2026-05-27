<template>
  <div class="greeting-page">
    <div class="greeting-content">
      <div class="greeting-text-section">
        <div class="greeting-title">
          <span>안녕하세요! 경제의 숲에 오신<br />여러분들을 환영합니다 :)</span>
        </div>
        <div class="greeting-subtitle">
          <span>매일매일 시사 경제 공부를 통해<br />열심히 성장해봅시다!</span>
        </div>
      </div>

      <img
        class="greeting-mascot"
        src="https://api.builder.io/api/v1/image/assets/TEMP/a107d5a935522d44c6bc4205c76df2406a25c54e?width=410"
        alt="Forest of Economy mascot squirrel"
      />

      <button class="greeting-button">시작하기</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.greeting-page {
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.greeting-content {
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #fff;
  box-sizing: border-box;
}

.greeting-text-section {
  position: absolute;
  top: 170px;
  left: 32px;
  width: 326px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.greeting-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
}

.greeting-title span {
  font-family: "Noto Sans KR", -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
  text-align: center;
  align-self: stretch;
}

.greeting-subtitle {
  width: 326px;
  height: 52px;
}

.greeting-subtitle span {
  font-family: "Noto Sans KR", -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
  text-align: center;
  display: block;
}

.greeting-mascot {
  position: absolute;
  top: 407px;
  left: 87px;
  width: 205px;
  height: 236px;
  aspect-ratio: 86/99;
}

.greeting-button {
  position: absolute;
  bottom: 715px;
  left: 32px;
  width: 325px;
  height: 50px;
  padding: 15px 120px;
  border: none;
  border-radius: 30px;
  background: var(--Color-3, #0a6e3c);
  color: #fff;
  font-family: "Noto Sans KR", -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.greeting-button:hover {
  opacity: 0.9;
}

.greeting-button:active {
  opacity: 0.8;
}
</style>
