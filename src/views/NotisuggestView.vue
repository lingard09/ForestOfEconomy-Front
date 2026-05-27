<template>
  <div class="notisuggest-page">
    <div class="notisuggest-content">
      <!-- 상단 질문 영역 (알림 종 아이콘 + 텍스트) -->
      <div class="question-container">
        <!-- 알림 아이콘 -->
        <img class="bell-icon" src="../assets/bell.png" alt="알림 아이콘" />
        <div class="question-text">
          매일매일 놓치지 않게<br />알림을 받아보시겠어요?
        </div>
      </div>

      <!-- 하단 버튼 영역 -->
      <div class="button-container">
        <button class="accept-button" @click="handleAccept">네, 해주세요!</button>
        <button class="decline-button" @click="handleDecline">아니요, 괜찮아요</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleAccept = async () => {
  console.log('알림 허용')
  
  // 브라우저가 Notification API를 지원하는지 확인
  if (!('Notification' in window)) {
    alert('이 브라우저는 시스템 알림을 지원하지 않습니다.')
    router.push('/')
    return
  }

  try {
    // 브라우저 기본 시스템 알림 권한 동의 팝업 요청
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

  // 다음 알림 시간 설정 화면으로 이동
  router.push('/notitime')
}

const handleDecline = () => {
  console.log('알림 거부')
  localStorage.setItem('noti-agreement', 'false')
  router.push('/')
}
</script>

<style scoped>
.notisuggest-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #fff;
}

.notisuggest-content {
  width: 390px;
  height: 844px;
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
}

.question-container {
  position: absolute;
  top: 160px;
  width: 326px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.bell-icon {
  width: 36.3px;
  height: 43px;
  object-fit: contain;
}

.question-text {
  align-self: stretch;
  text-align: center;
  font-family:
    'Noto Sans KR',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #000;
}

.button-container {
  position: absolute;
  top: 650px;
  width: 325px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.accept-button {
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 40px;
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

.accept-button:hover {
  opacity: 0.9;
}

.decline-button {
  width: 100%;
  height: 50px;
  border: 1px solid #0a6e3c;
  border-radius: 40px;
  background-color: #fff;
  color: #0a6e3c;
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
  transition: opacity 0.2s, background-color 0.2s;
}

.decline-button:hover {
  background-color: rgba(10, 110, 60, 0.05);
}
</style>
