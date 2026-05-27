<template>
  <div class="hellosir-page">
    <div class="hellosir-content">
      <div class="parent-section">
        <!-- 상단 코인 아이콘 -->
        <img class="coin-icon" src="../assets/coin.png" alt="도토리 코인" />
        
        <!-- 웰컴 메시지 영역 -->
        <div class="welcome-text-wrapper">
          <div class="welcome-text">
            <span>반가워요<br /></span>
            <span class="user-nickname">{{ nickname }} </span>
            <span>님!</span>
          </div>
        </div>
      </div>
      
      <!-- 중앙 다람쥐 마스코트 캐릭터 -->
      <img class="mascot-character" src="../assets/mascot.png" alt="다람쥐 마스코트" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nickname = ref('사용자')

onMounted(() => {
  const storedNickname = localStorage.getItem('user-nickname')
  if (storedNickname) {
    nickname.value = storedNickname
  }

  // 3초 뒤에 알림 제안 화면(/notisuggest)으로 자동 이동
  setTimeout(() => {
    router.push('/notisuggest')
  }, 3000)
})
</script>

<style scoped>
.hellosir-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #fff;
}

.hellosir-content {
  width: 390px;
  height: 844px;
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.parent-section {
  position: absolute;
  top: 160px;
  width: 326px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.coin-icon {
  width: 45px;
  height: 45px;
  object-fit: contain;
}

.welcome-text-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.welcome-text {
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

.user-nickname {
  color: #0a6e3c;
}

.mascot-character {
  position: absolute;
  top: 435px; /* 51.54% of 844px is approx 435px */
  width: 220px;
  height: auto;
  max-height: 242px; /* 28.76% of 844px */
  object-fit: contain;
}
</style>
