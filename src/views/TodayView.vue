<template>
  <div :class="$style.div">
    <div :class="$style.parent">
      <div :class="$style.div2">경제 쌓기</div>
      <div :class="$style.div3">오늘의 학습</div>
    </div>
    <div :class="$style.wrapper">
      <div :class="$style.div4">
        <div :class="$style.div5">확인하기</div>
      </div>
    </div>
    <img :class="$style.child" alt="child" src="../assets/child.png" />
  </div>
</template>
<style module>
.div {
  width: 100%;
  height: 844px;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  text-align: center;
  font-size: 24px;
  color: #000;
  font-family: 'Yde street';
}
.parent {
  position: absolute;
  top: 315px;
  left: calc(50% - 149px);
  width: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.div2 {
  align-self: stretch;
  position: relative;
}
.div3 {
  align-self: stretch;
  position: relative;
  font-size: 16px;
  color: #999;
}
.wrapper {
  position: absolute;
  top: 715px;
  left: calc(50% - 162px);
  width: 325px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  color: #fff;
  font-family: 'Noto Sans KR';
}
.div4 {
  align-self: stretch;
  height: 50px;
  border-radius: 40px;
  background-color: #0a6e3c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 120px;
  box-sizing: border-box;
}
.div5 {
  position: relative;
  font-weight: 500;
  flex-shrink: 0;
}
.child {
  position: absolute;
  height: 19.96%;
  width: 41.69%;
  top: 14.22%;
  right: 29.33%;
  bottom: 65.82%;
  left: 28.97%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
}
</style>
