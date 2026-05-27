<template>
  <div class="app-page-wrapper">
    <div class="app-content-container">
      <!-- 상단 질문 영역 (알림 종 아이콘 + 텍스트) -->
      <div class="question-container">
        <img class="bell-icon" src="../assets/bell.png" alt="알림 종" />
        <div class="question-text global-font-noto">
          매일매일 놓치지 않게<br />알림을 받아보시겠어요?
        </div>
      </div>

      <!-- 하단 버튼 영역 -->
      <div class="button-container">
        <button class="btn-primary-green btn-round-shape" @click="handleAccept">네, 해주세요!</button>
        <button class="decline-button global-font-noto" @click="handleDecline">아니요, 괜찮아요</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleAccept = async () => {
  console.log('알림 허용')
  
  if (!('Notification' in window)) {
    alert('이 브라우저는 시스템 알림을 지원하지 않습니다.')
    router.push('/notitime')
    return
  }

  try {
    const permission = await Notification.requestPermission()
    if (permission === 'granted') {
      console.log('알림 권한 허용됨')
      localStorage.setItem('noti-agreement', 'true')
    } else {
      console.log('알림 권한 거부됨')
      localStorage.setItem('noti-agreement', 'false')
    }
  } catch (error) {
    console.error('알림 권한 요청 중 에러:', error)
  }

  router.push('/notitime')
}

const handleDecline = () => {
  console.log('알림 거부')
  localStorage.setItem('noti-agreement', 'false')
  router.push('/')
}
</script>

<style scoped>
.question-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 100px;
}

.bell-icon {
  width: 36.3px;
  height: 43px;
  object-fit: contain;
}

.question-text {
  align-self: stretch;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #000;
}

.button-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.btn-round-shape {
  border-radius: 40px; /* 이 버튼만 40px 라운드 */
}

.decline-button {
  width: 325px;
  max-width: 100%;
  height: 50px;
  border: 1px solid #0a6e3c;
  border-radius: 40px;
  background-color: #fff;
  color: #0a6e3c;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s, background-color 0.2s;
  box-sizing: border-box;
}

.decline-button:hover {
  background-color: rgba(10, 110, 60, 0.05);
}

.decline-button:active {
  opacity: 0.85;
}

@media (min-width: 768px) {
  .question-container {
    margin-top: 80px;
  }
}
</style>
