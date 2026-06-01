/**
 * 경제의 숲 - 공통 네비게이션 바 컴포넌트
 */
function renderNavbar(activeTab) {
  const path = window.location.pathname;
  let prefix = '';
  if (path.includes('/tiers/')) {
    prefix = '../../';
  } else if (path.includes('/onboarding/') || path.includes('/study/') || path.includes('/news/') || path.includes('/group/') || path.includes('/battle/')) {
    prefix = '../';
  }

  const navContainer = document.querySelector('.div27') || document.querySelector('.div > .div4:last-of-type');
  if (!navContainer) {
    console.warn('.div4 네비게이션 바 컨테이너를 찾을 수 없습니다.');
    return;
  }

  // 탭 인덱스 매핑
  const tabIndices = {
    'home': 0,
    'news': 1,
    'group': 2,
    'profile': 3
  };

  const activeIdx = tabIndices[activeTab] !== undefined ? tabIndices[activeTab] : 0;
  const tabWidth = 325 / 4; // 81.25px

  // HTML 내용 주입 (정밀 flex 4분할 대칭 정렬)
  navContainer.innerHTML = `
    <!-- 활성화 탭 표시용 라운드 배경 (초록색 #0A6E3C) -->
    <div class="nav-active-indicator" style="position: absolute; top: 5px; left: ${activeIdx * tabWidth}px; width: ${tabWidth}px; height: 40px; display: flex; align-items: center; justify-content: center; transition: left 0.35s cubic-bezier(0.4, 0, 0.2, 1); pointer-events: none; z-index: 1;">
      <div style="width: 56px; height: 40px; background-color: #0A6E3C; border-radius: 20px;"></div>
    </div>
    
    <!-- 4등분 정렬 네비게이션 탭 버튼 -->
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; z-index: 2;">
      <!-- 홈 탭 -->
      <div class="nav-tab nav-home" style="flex: 1; display: flex; align-items: center; justify-content: center; cursor: pointer;">
        <img src="${prefix}assets/nav_home.png" alt="홈" style="width: 24px; height: 24px; object-fit: contain; filter: ${activeTab === 'home' ? 'none' : 'brightness(0) invert(1)'};" />
      </div>
      
      <!-- 뉴스/배틀 탭 -->
      <div class="nav-tab nav-news" style="flex: 1; display: flex; align-items: center; justify-content: center; cursor: pointer;">
        <img src="${prefix}assets/nav_news.png" alt="뉴스" style="width: 24px; height: 24px; object-fit: contain; filter: ${activeTab === 'news' ? 'none' : 'brightness(0) invert(1)'};" />
      </div>
      
      <!-- 그룹 탭 -->
      <div class="nav-tab nav-group" style="flex: 1; display: flex; align-items: center; justify-content: center; cursor: pointer;">
        <img src="${prefix}assets/nav_group.png" alt="그룹" style="width: 24px; height: 24px; object-fit: contain; filter: ${activeTab === 'group' ? 'none' : 'brightness(0) invert(1)'};" />
      </div>
      
      <!-- 프로필 탭 -->
      <div class="nav-tab nav-profile" style="flex: 1; display: flex; align-items: center; justify-content: center; cursor: pointer;">
        <img src="${prefix}assets/nav_profile.png" alt="프로필" style="width: 24px; height: 24px; object-fit: contain; filter: ${activeTab === 'profile' ? 'none' : 'brightness(0) invert(1)'};" />
      </div>
    </div>
  `;

  // 클릭 이벤트 바인딩
  document.querySelector('.nav-home').addEventListener('click', () => {
    window.location.href = `${prefix}study/today.html`;
  });
  document.querySelector('.nav-news').addEventListener('click', () => {
    window.location.href = `${prefix}news/newslist.html`;
  });
  document.querySelector('.nav-group').addEventListener('click', () => {
    window.location.href = `${prefix}group/group.html`;
  });
  document.querySelector('.nav-profile').addEventListener('click', () => {
    window.location.href = `${prefix}study/today.html`; // 프로필/로비 이동
  });
}
