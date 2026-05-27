<template>
  <div class="app-page-wrapper">
    <div class="app-content-container">
      <!-- 상단 타이틀 영역 -->
      <div class="greeting-text-section">
        <div class="greeting-title">
          <span class="global-font-noto">안녕하세요! 경제의 숲에 오신<br />여러분들을 환영합니다 :)</span>
        </div>
        <div class="greeting-subtitle">
          <span class="global-font-noto">매일매일 시사 경제 공부를 통해<br />열심히 성장해봅시다!</span>
        </div>
      </div>

      <!-- 중앙 마스코트 캐릭터 -->
      <div class="mascot-wrapper">
        <img
          class="greeting-mascot"
          src="https://api.builder.io/api/v1/image/assets/TEMP/a107d5a935522d44c6bc4205c76df2406a25c54e?width=410"
          alt="Forest of Economy mascot squirrel"
        />
      </div>

      <!-- 하단 시작하기 버튼 -->
      <div class="button-wrapper">
        <button class="btn-primary-green" @click="goToNamesetting">시작하기</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToNamesetting = () => {
  router.push('/namesetting')
}
</script>

<style scoped>
.greeting-text-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
}

.greeting-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
}

.greeting-title span {
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
  text-align: center;
  align-self: stretch;
}

.greeting-subtitle {
  align-self: stretch;
}

.greeting-subtitle span {
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
  text-align: center;
  display: block;
}

.mascot-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 150px;
}

.greeting-mascot {
  width: 205px;
  height: auto;
  max-height: 35vh;
  object-fit: contain;
}

.button-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  .greeting-mascot {
    max-height: 236px;
  }
}
</style>
