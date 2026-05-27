<template>
  <div class="notitime-page">
    <div class="notitime-content">
      <!-- 상단 질문 영역 (알림 종 아이콘 + 텍스트) -->
      <div class="header-section">
        <img class="bell-icon" src="../assets/bell.png" alt="알림 종" />
        <div class="header-title">언제 알람을 드릴까요?</div>
      </div>

      <!-- 알림 시간대 목록 영역 -->
      <div class="time-options-list">
        <div
          v-for="option in timeOptions"
          :key="option.value"
          class="option-item"
          :class="{ 'is-active': selectedTime === option.value }"
          @click="selectTime(option.value)"
        >
          <div class="circle-checkbox">
            <svg
              v-if="selectedTime === option.value"
              class="check-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0a6e3c"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span class="option-label">{{ option.label }}</span>
        </div>
      </div>

      <!-- 하단 다음 버튼 -->
      <button
        class="submit-button"
        :disabled="!selectedTime"
        @click="goToNext"
      >
        다음
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface TimeOption {
  label: string
  value: string
}

const timeOptions: TimeOption[] = [
  { label: '아침 (8 AM)', value: 'morning' },
  { label: '점심 (1 PM)', value: 'lunch' },
  { label: '저녁 (8 PM)', value: 'evening' },
  { label: '취침 전 (11 PM)', value: 'night' }
]

const selectedTime = ref<string | null>(null)

const selectTime = (val: string) => {
  selectedTime.value = val
}

const goToNext = () => {
  if (selectedTime.value) {
    console.log('선택된 알람 시간:', selectedTime.value)
    localStorage.setItem('noti-time', selectedTime.value)
    // 알림 완료 안내 화면으로 이동
    router.push('/noticonfirm')
  }
}
</script>

<style scoped>
.notitime-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #fff;
}

.notitime-content {
  width: 390px;
  height: 844px;
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
}

.header-section {
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

.header-title {
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
  color: #000;
  line-height: 1.5;
}

.time-options-list {
  position: absolute;
  top: 320px;
  width: 326px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.option-item {
  align-self: stretch;
  height: 60px;
  border-radius: 40px;
  background-color: #f6f6f6;
  border: 1px solid #f6f6f6;
  display: flex;
  align-items: center;
  padding: 5px 6px;
  gap: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.option-item:hover {
  background-color: #f0f0f0;
}

.option-item.is-active {
  background-color: #0a6e3c;
  border-color: #0a6e3c;
}

.circle-checkbox {
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  transition: border-color 0.2s;
}

.check-icon {
  width: 20px;
  height: 20px;
}

.option-label {
  font-family:
    'Noto Sans KR',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #000;
}

.option-item.is-active .option-label {
  color: #fff;
}

.submit-button {
  position: absolute;
  top: 740px;
  width: 146px;
  height: 50px;
  border-radius: 30px;
  border: none;
  background-color: #f6f6f6;
  color: #999;
  font-family:
    'Noto Sans KR',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: not-allowed;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
}

.submit-button:not(:disabled) {
  background-color: #262626;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
}

.submit-button:not(:disabled):hover {
  opacity: 0.9;
}
</style>
