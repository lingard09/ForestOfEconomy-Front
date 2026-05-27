<template>
  <div class="app-page-wrapper">
    <div class="app-content-container">
      <!-- 상단 헤더 영역 (코인 + 웰컴텍스트) -->
      <div class="parent-section">
        <img class="coin-icon" src="../assets/coin.png" alt="도토리 코인" />
        <div class="welcome-text-wrapper">
          <div class="welcome-text global-font-noto">
            <span>반가워요<br /></span>
            <span class="user-nickname">{{ nickname }} </span>
            <span>님!</span>
          </div>
        </div>
      </div>

      <!-- 중앙 다람쥐 캐릭터 (반응형) -->
      <div class="mascot-wrapper">
        <img class="mascot-character" src="../assets/mascot.png" alt="다람쥐 마스코트" />
      </div>
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
.parent-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
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
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #000;
}

.user-nickname {
  color: #0a6e3c;
}

.mascot-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 200px;
}

.mascot-character {
  width: 220px;
  height: auto;
  max-height: 35vh;
  object-fit: contain;
}

@media (min-width: 768px) {
  .mascot-character {
    max-height: 242px;
  }
}
</style>
