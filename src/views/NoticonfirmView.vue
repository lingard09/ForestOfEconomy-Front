<template>
  <div class="app-page-wrapper">
    <div class="app-content-container">
      <!-- 상단 알림 확인 마스코트 일러스트 (반응형) -->
      <div class="mascot-wrapper">
        <img class="mascot-confirm-image" src="../assets/noti_confirm.png" alt="알림 설정 완료" />
      </div>

      <!-- 안내 문구 영역 -->
      <div class="message-section">
        <h1 class="confirm-title global-font-yde">알겠어요!</h1>
        <p class="confirm-subtitle global-font-noto">
          매일 {{ formatTimeText(notiTime) }}에 알림을 드릴게요<br />
          알림은 나중에 설정에서 변경할 수 있어요
        </p>
      </div>

      <!-- 하단 시작하기 버튼 -->
      <div class="button-wrapper">
        <button class="btn-primary-green" @click="handleStart">시작하기</button>
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
.mascot-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 150px;
  margin-top: 40px;
}

.mascot-confirm-image {
  width: 187px;
  height: auto;
  max-height: 30vh;
  object-fit: contain;
}

.message-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-bottom: 40px;
}

.confirm-title {
  font-size: 24px;
  font-weight: 700;
  color: #000;
  align-self: stretch;
  text-align: center;
}

.confirm-subtitle {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #000;
  align-self: stretch;
  text-align: center;
}

.button-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  .mascot-confirm-image {
    max-height: 183px;
  }

  .mascot-wrapper {
    margin-top: 0;
  }
}
</style>
