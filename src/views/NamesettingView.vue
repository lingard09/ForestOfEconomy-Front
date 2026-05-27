<template>
  <div class="namesetting-page">
    <div class="namesetting-content">
      <!-- 상단 도토리 코인 아이콘 -->
      <div class="icon-wrapper">
        <img class="coin-image" src="../assets/coin.png" alt="도토리 코인" />
      </div>

      <!-- 안내 메시지 -->
      <div class="instruction-text">
        앱 내에서 사용할<br />닉네임을 설정해주세요
      </div>

      <!-- 닉네임 입력 영역 -->
      <div class="input-container">
        <input
          v-model="nickname"
          type="text"
          maxlength="6"
          placeholder="최대 6자"
          class="nickname-input"
        />
      </div>

      <!-- 하단 설정하기 버튼 -->
      <button class="submit-button" :disabled="!nickname.trim()" @click="submitNickname">
        설정하기
      </button>
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
    // 닉네임 저장 로직 (localStorage 또는 Pinia 스토어 등)
    localStorage.setItem('user-nickname', nickname.value)
    // 다음 페이지로 이동
    router.push('/hellosir')
  }
}
</script>

<style scoped>
.namesetting-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #fff;
}

.namesetting-content {
  width: 390px;
  height: 844px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
  position: relative;
}

.icon-wrapper {
  margin-top: 180px;
  margin-bottom: 24px;
}

.coin-image {
  width: 45px;
  height: 45px;
  object-fit: contain;
}

.instruction-text {
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
  text-align: center;
  margin-bottom: 90px;
}

.input-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.nickname-input {
  width: 200px;
  border: none;
  border-bottom: 2px solid #0a6e3c;
  padding: 8px 0;
  font-family:
    'Noto Sans KR',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  text-align: center;
  outline: none;
}

.nickname-input::placeholder {
  color: #999;
  font-weight: 500;
}

.submit-button {
  position: absolute;
  top: 715px;
  width: 325px;
  height: 50px;
  border: none;
  border-radius: 30px;
  background: #0a6e3c;
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
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s, background-color 0.2s;
}

.submit-button:hover {
  opacity: 0.9;
}

.submit-button:active {
  opacity: 0.85;
}

.submit-button:disabled {
  background: #cccccc;
  cursor: not-allowed;
}
</style>
