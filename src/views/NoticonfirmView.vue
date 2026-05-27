<template>
  <div class="noticonfirm-page">
    <div class="noticonfirm-content">
      <!-- 상단 알림 확인 마스코트 일러스트 -->
      <img class="mascot-confirm-image" src="../assets/noti_confirm.png" alt="알림 설정 완료" />

      <!-- 안내 문구 영역 -->
      <div class="message-section">
        <h1 class="confirm-title">알겠어요!</h1>
        <p class="confirm-subtitle">
          매일 {{ formatTimeText(notiTime) }}에 알림을 드릴게요<br />
          알림은 나중에 설정에서 변경할 수 있어요
        </p>
      </div>

      <!-- 하단 시작하기 버튼 -->
      <div class="button-wrapper">
        <button class="start-button" @click="handleStart">시작하기</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const notiTime = ref('')

onMounted(() => {
  notiTime.value = localStorage.getItem('noti-time') || 'morning'
})

const formatTimeText = (time: string) => {
  switch (time) {
    case 'morning':
      return '아침 8시'
    case 'lunch':
      return '낮 1시'
    case 'evening':
      return '저녁 8시'
    case 'night':
      return '취침 전 11시'
    default:
      return '아침 8시'
  }
}

const handleStart = () => {
  // 최종 온보딩 완료 처리
  localStorage.setItem('onboarding-completed', 'true')
  router.push('/')
}
</script>

<style scoped>
.noticonfirm-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #fff;
}

.noticonfirm-content {
  width: 390px;
  height: 844px;
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
}

.mascot-confirm-image {
  position: absolute;
  top: 200px;
  width: 187px;
  height: auto;
  max-height: 183px; /* 21.66% of 844px */
  object-fit: contain;
}

.message-section {
  position: absolute;
  top: 445px;
  width: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.confirm-title {
  font-family:
    'Yde street',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #000;
  align-self: stretch;
  text-align: center;
}

.confirm-subtitle {
  font-family:
    'Noto Sans KR',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #000;
  align-self: stretch;
  text-align: center;
}

.button-wrapper {
  position: absolute;
  top: 715px;
  width: 325px;
}

.start-button {
  width: 100%;
  height: 50px;
  border-radius: 30px;
  border: none;
  background-color: #0a6e3c;
  color: #fff;
  font-family:
    'Noto Sans KR',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
}

.start-button:hover {
  opacity: 0.9;
}

.start-button:active {
  opacity: 0.85;
}
</style>
