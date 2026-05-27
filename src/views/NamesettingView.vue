<template>
  <div class="app-page-wrapper">
    <div class="app-content-container">
      <!-- 상단 헤더 영역 (코인 + 타이틀) -->
      <div class="header-section">
        <div class="icon-wrapper">
          <img class="coin-image" src="../assets/coin.png" alt="도토리 코인" />
        </div>
        <div class="instruction-text global-font-noto">
          앱 내에서 사용할<br />닉네임을 설정해주세요
        </div>
      </div>

      <!-- 중앙 인풋 영역 -->
      <div class="input-container">
        <input
          v-model="nickname"
          type="text"
          maxlength="6"
          placeholder="최대 6자"
          class="nickname-input global-font-noto"
        />
      </div>

      <!-- 하단 설정하기 버튼 -->
      <div class="button-wrapper">
        <button class="btn-primary-green" :disabled="!nickname.trim()" @click="submitNickname">
          설정하기
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nickname = ref('')

const submitNickname = () => {
  if (nickname.value.trim()) {
    console.log('설정된 닉네임:', nickname.value)
    // 닉네임 저장 로직
    localStorage.setItem('user-nickname', nickname.value)
    // 다음 페이지로 이동
    router.push('/hellosir')
  }
}
</script>

<style scoped>
.header-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.coin-image {
  width: 45px;
  height: 45px;
  object-fit: contain;
}

.instruction-text {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #000;
  text-align: center;
}

.input-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.nickname-input {
  width: 200px;
  border: none;
  border-bottom: 2px solid #0a6e3c;
  padding: 8px 0;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  text-align: center;
  outline: none;
  background-color: transparent;
}

.nickname-input::placeholder {
  color: #999;
  font-weight: 500;
}

.button-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
