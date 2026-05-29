export interface Page {
  render(): string
  mount?(container: HTMLElement): void
  unmount?(): void
}

import { Home } from './pages/home'
import { Greeting } from './pages/greeting'
import { Namesetting } from './pages/namesetting'
import { Hellosir } from './pages/hellosir'
import { Notisuggest } from './pages/notisuggest'
import { Notitime } from './pages/notitime'
import { Noticonfirm } from './pages/noticonfirm'
import { Today } from './pages/today'

const routes: Record<string, () => Page> = {
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

let currentPage: Page | null = null

export function initRouter(containerId: string) {
  const container = document.getElementById(containerId)
  if (!container) return

  function handleRoute() {
    if (!container) return
    if (currentPage && currentPage.unmount) {
      currentPage.unmount()
    }

    // Get clean path without hash (e.g., "/greeting" -> "greeting")
    const path = window.location.pathname.replace(/^\/|\/$/g, '')
    const createPage = routes[path] || routes['home']
    if (!createPage) return

    currentPage = createPage()
    container.innerHTML = currentPage.render()
    if (currentPage.mount) {
      currentPage.mount(container)
    }
  }

  // Listen to popstate event (back/forward browser buttons)
  window.addEventListener('popstate', handleRoute)
  
  // Intercept standard internal links if necessary
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
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

export function navigateTo(path: string) {
  // Push state to browser history
  window.history.pushState({}, '', `/${path}`)
  // Dispatch popstate manually so the router captures the location change
  const popStateEvent = new PopStateEvent('popstate')
  window.dispatchEvent(popStateEvent)
}
