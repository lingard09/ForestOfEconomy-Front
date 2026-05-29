import { Home } from './pages/home'
import { Greeting } from './pages/greeting'
import { Namesetting } from './pages/namesetting'
import { Hellosir } from './pages/hellosir'
import { Notisuggest } from './pages/notisuggest'
import { Notitime } from './pages/notitime'
import { Noticonfirm } from './pages/noticonfirm'
import { Today } from './pages/today'

const routes = {
  '': () => new Home(),
  'home': () => new Home(),
  'greeting': () => new Greeting(),
  'namesetting': () => new Namesetting(),
  'hellosir': () => new Hellosir(),
  'notisuggest': () => new Notisuggest(),
  'notitime': () => new Notitime(),
  'noticonfirm': () => new Noticonfirm(),
  'today': () => new Today()
}

let currentPage = null

export function initRouter(containerId) {
  const container = document.getElementById(containerId)
  if (!container) return

  function handleRoute() {
    if (!container) return
    if (currentPage && currentPage.unmount) {
      currentPage.unmount()
    }

    const path = window.location.pathname.replace(/^\/|\/$/g, '')
    const createPage = routes[path] || routes['home']
    if (!createPage) return

    currentPage = createPage()
    container.innerHTML = currentPage.render()
    if (currentPage.mount) {
      currentPage.mount(container)
    }
  }

  window.addEventListener('popstate', handleRoute)
  
  document.addEventListener('click', (e) => {
    const target = e.target
    const anchor = target.closest('a')
    if (anchor) {
      const href = anchor.getAttribute('href')
      if (href && href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault()
        navigateTo(href.slice(1))
      }
    }
  })

  handleRoute()
}

export function navigateTo(path) {
  window.history.pushState({}, '', `/${path}`)
  const popStateEvent = new PopStateEvent('popstate')
  window.dispatchEvent(popStateEvent)
}
