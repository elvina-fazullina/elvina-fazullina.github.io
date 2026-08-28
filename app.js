const SOCIAL_LINKS = {
  telegram: 'https://t.me/santa_jackson',
  instagram: 'https://www.instagram.com/santa_jackson?igsi=MXhzbGswcnd6OHBvaA%3D%3D&utm_source=qr',
  phone: 'tel:+79869119192',
}

const MOBILE_SHOWREEL_PLAY_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABWBJREFUeAHtnb1y20YUhc/CmsQp4mGdZMagPaktVUkVMU9ge9KlkfwEkguXGcu1C0t5AUtNUmVGKtKkEZNUqURVaZIInrg37HFnmfC9i12RBAiAAPGzC+LTcED9jESdOXfv3d2LpUCDBGfo0ccmPXXpsa6ubvhNdZ3gQ8CTV8jrSD58nIsN+bVGEKgRJdgdenpPPuIiFUMoMYFj0ccJaqQWAYML6bJtEoyF66Fa2KnHdD0kMX9HxVQmoHLbDom2i+pFS8Kj/3CPhDxCRZQuoCHCRfHo9eyL2zhAyZQqIIXqXYzpRQrchJmU7shSBAz+pmTwMZ7T0wFsgMdIihBxCy+wJA6WhFy3Q+KdwRbxmDCZjei1b2FJCjtQjXWP1VhnL4LGxj4eoiCFBJQh+xGFgZA1nf1wHUmuLBLSuQVU4g0NThRF8egxyCtiLgFbLJ7GQ04RFxZwBcTTeMgh4kICrpB4Gg8LirhYGRMmjFURj3G5VpSVRgaZAlKt9Kw12TYPAS2vcZmWQWoIy0IzwCFWGZ6xpMyhEwVU0zOeYZiyINAUvFi7njQeJofwdQrdTjymRzY7TPrmXAFV6N5DR0iAgVxpmsPcEA7+lcs+q5R1F8HDa2xE919iDpSrK51483BxI75wEnNg575UfHJhf9qFMw6UY18nXhq9qAtnQ3iMJ6gZ/w1tn/0CexA0xE1xJWDwP209NuA+FvDBI6D/DfDiJWygp7ZpJRMHXtK+bYN4JJ5LIu7twwa29ZOJgIbUfU9+DN1odFiTVnqhQQqoikRjZh3sRg7r7UfGhrVuUblyoJGzjiNy4eB7Q904xn2+hAIGsjPKSLQbjUsyIpzaORS+HLrGCqgxMMm4PA46WLNrsdSoJNPDpkPli/Hui2JQknF5DLROQI0BSWadBXRhMQ0nGXJg0I5V50aSTBCGsIsWUXeSYQFbt+9RY5Jxl+4PNJmT34DTv1Apa2gpW98B+z9QeN1ApbROQPdz4PlTKm++Ri046u6fVvCY1orPfq1PPMJvhQM3v6Kimlx38wvUjcdJxIOl9D4FntE4N/y5EfF4RUY60IOF1JUkMvBYwBEsou4kkcHIKgdykth90LjrJlzinAWs/I7GZWkwSaTzFiNH9K9uZDaOxpNEOiNu8dBTuWMYBieJiz/DkDWSIMwdoYBr5gjISeL0J1pNeWrQWDcPJ9QsFJAGQ6C5cwc0DcwkiuLrowWkgGocbMyFnCS8P2gxdMdw12mCiVZX/YGyuegdhujI5j2+FV+GWs00WAb/4RW6xvIsPHELff3J7IKqgB29UU0isDf76RSySyHABToXJjHjPmbGgSqZdC5MIohrE28yZxeOqUjseqWjxNzHxDaVpAud2T7gDsTGvsmXEyAnnvIdOuiQdZ+4HfYDRknb1uRZaOOzEwPw8UnyySSJAlIoe0m2XSkEdsVnyXeup26sk4gH8zLPyjDGQdYxUZlnJqja8BQWt8EVIsA5jXuZ/3Nma4eqDe/TL1z6nCmL8Gjcu7vIDy5+7MkFXLL0ahx7ch2DtHFvmnwH77RfxFziMfmPfmqviLnFY3K3t8nyxpEFtlX7yalQwigiHlOoP5BFpHnhRitKHD5x0ykmHpM7hKOoAypYSNuWwHx63XvLnqu6tICMHBdpC9eikz6GFLLbRV03TSkCaqQb+a53sw+h3RUlHtZdqoAaefLHGA8NEtKXw4wjp2alLpBUIqDGAEdWJpymUgE1JOSALlu1HgV/iSO99VgltQg4TfAPiXiN5pnhPcrlLFCEzVEs2gnWMKrKbfP/dINM3at8B/rtMMJbz1xEnTrpIPOg3w7jPWXRaxjWKViUD+5Mrm/nTfO/AAAAAElFTkSuQmCC'

const SHOWREELS = [
  { title: 'Свадьбы', placeholder: 'Скоро здесь будет видео' },
  {
    title: 'Корпоративы',
    vimeo: 'https://player.vimeo.com/video/1220923496?app_id=122963',
    mobilePoster: 'showreel-corporate-poster.png',
  },
  {
    title: 'Дни рождения',
    vimeo: 'https://player.vimeo.com/video/1220922735?app_id=122963',
    mobilePoster: 'showreel-birthday-poster.png',
    mobileVideo: 'showreel-birthday.mp4',
  },
]

const MOBILE_SCROLL_HINT_DELAY = 5_000
const DESKTOP_SCROLL_HINT_DELAY = 5_000
const DESKTOP_SWIPE_THRESHOLD = 72
const DESKTOP_SWIPE_MAX_OFFSET = 120
const PULL_REFRESH_THRESHOLD = 88
const PULL_REFRESH_MAX_DISTANCE = 112

const contactDialog = document.querySelector('#contacts')
const contactDialogClose = document.querySelector('.contact-dialog__close')
const activeTitle = document.querySelector('#active-showreel-title')
const desktopVideo = document.querySelector('#desktop-video')
const previousButton = document.querySelector('#previous-video')
const nextButton = document.querySelector('#next-video')
const categoryButtons = document.querySelectorAll('[data-showreel-index]')
const mobileCategoryButtons = document.querySelectorAll('[data-mobile-showreel-index]')
const mobileFeed = document.querySelector('#mobile-showreel-feed')
const mobileCards = document.querySelectorAll('[data-mobile-card-index]')
const desktopShowreel = document.querySelector('.showreel__desktop')
const desktopSwipeSurface = document.querySelector('.showreel__swipe-surface')
const homePage = document.querySelector('#home')
const showreelPage = document.querySelector('#showreel')
const pullRefresh = document.querySelector('#pull-refresh')
let activeShowreel = Math.max(0, SHOWREELS.findIndex((item) => item.vimeo || item.video))
let mobileScrollHintTimer
let mobileScrollHintReturnTimer
let mobileScrollHintFinishTimer
let mobileFeedInteracted = false
let mobileScrollHintPlayed = false
let mobileScrollHintAnimating = false
let mobileFeedIsResetting = false
let desktopSwitchInProgress = false
let desktopScrollHintTimer
let desktopScrollHintAnimation
let desktopScrollHintPlayed = false
let desktopShowreelInteracted = false
let desktopWheelLockedUntil = 0
let desktopSwipePointerId = null
let desktopSwipeStartY = 0
let desktopSwipeOffset = 0
let desktopSwipeReturnAnimation
let tabHapticAudioContext
let pullRefreshStartX = 0
let pullRefreshStartY = 0
let pullRefreshDistance = 0
let pullRefreshTracking = false
let pullRefreshActive = false
let activeVimeoOverlay = null

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

function resetPullRefresh() {
  pullRefreshTracking = false
  pullRefreshActive = false
  pullRefreshDistance = 0
  pullRefresh.classList.remove('is-pulling', 'is-ready')
  pullRefresh.style.setProperty('--pull-distance', '0px')
  pullRefresh.style.setProperty('--pull-progress', '0')
}

function handlePullRefreshStart(event) {
  if (
    !window.matchMedia('(max-width: 1023px)').matches ||
    contactDialog?.open ||
    pullRefresh.classList.contains('is-refreshing') ||
    event.touches.length !== 1
  ) return

  const pageScrollTop = document.body.dataset.page === 'showreel' ? mobileFeed.scrollTop : window.scrollY
  if (pageScrollTop > 0) return

  pullRefreshStartX = event.touches[0].clientX
  pullRefreshStartY = event.touches[0].clientY
  pullRefreshTracking = true
}

function handlePullRefreshMove(event) {
  if (!pullRefreshTracking || event.touches.length !== 1) return

  const deltaX = event.touches[0].clientX - pullRefreshStartX
  const deltaY = event.touches[0].clientY - pullRefreshStartY

  if (!pullRefreshActive && Math.abs(deltaX) > Math.abs(deltaY)) {
    resetPullRefresh()
    return
  }

  if (deltaY <= 0) {
    resetPullRefresh()
    return
  }

  pullRefreshActive = true
  event.preventDefault()
  pullRefreshDistance = Math.min(PULL_REFRESH_MAX_DISTANCE, deltaY * 0.58)
  const progress = Math.min(1, pullRefreshDistance / PULL_REFRESH_THRESHOLD)
  pullRefresh.classList.add('is-pulling')
  pullRefresh.classList.toggle('is-ready', progress >= 1)
  pullRefresh.style.setProperty('--pull-distance', `${pullRefreshDistance}px`)
  pullRefresh.style.setProperty('--pull-progress', String(progress))
}

function handlePullRefreshEnd() {
  if (!pullRefreshTracking) return

  if (pullRefreshActive && pullRefreshDistance >= PULL_REFRESH_THRESHOLD) {
    pullRefreshTracking = false
    pullRefreshActive = false
    pullRefresh.classList.remove('is-pulling', 'is-ready')
    pullRefresh.classList.add('is-refreshing')
    pauseAllShowreelMedia()
    window.setTimeout(() => window.location.reload(), 260)
    return
  }

  resetPullRefresh()
}

function playHapticSound(volumeMultiplier = 1) {
  navigator.vibrate?.(8)

  const AudioContextClass = window.AudioContext || window.webkitAudioContext
  if (!AudioContextClass) return

  tabHapticAudioContext ||= new AudioContextClass()
  const context = tabHapticAudioContext
  const volume = Math.max(0, Math.min(2, volumeMultiplier))

  const playPulse = () => {
    const now = context.currentTime

    const createTone = ({ startFrequency, endFrequency, volume, duration, type }) => {
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      oscillator.type = type
      oscillator.frequency.setValueAtTime(startFrequency, now)
      oscillator.frequency.exponentialRampToValueAtTime(endFrequency, now + duration)
      gain.gain.setValueAtTime(0.0001, now)
      gain.gain.exponentialRampToValueAtTime(volume, now + 0.004)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)
      oscillator.connect(gain)
      gain.connect(context.destination)
      oscillator.start(now)
      oscillator.stop(now + duration)
    }

    createTone({
      startFrequency: 180,
      endFrequency: 110,
      volume: 0.055 * volume,
      duration: 0.055,
      type: 'triangle',
    })
    createTone({
      startFrequency: 900,
      endFrequency: 520,
      volume: 0.022 * volume,
      duration: 0.022,
      type: 'sine',
    })
  }

  if (context.state === 'suspended') {
    context.resume().then(playPulse).catch(() => {})
  } else {
    playPulse()
  }
}

function pauseShowreelMedia(media) {
  if (!media) return

  media.querySelectorAll('video').forEach((video) => video.pause())
  media.querySelectorAll('iframe[src*="player.vimeo.com"]').forEach((iframe) => {
    iframe.contentWindow?.postMessage(JSON.stringify({ method: 'pause' }), 'https://player.vimeo.com')
  })
}

function pauseAllShowreelMedia(exceptMedia = null) {
  document.querySelectorAll('.showreel-card__media').forEach((media) => {
    if (media !== exceptMedia) pauseShowreelMedia(media)
  })

  activeVimeoOverlay?.querySelector('iframe')?.contentWindow?.postMessage(
    JSON.stringify({ method: 'pause' }),
    'https://player.vimeo.com',
  )
}

function closeMobileVimeo({ exitFullscreen = true } = {}) {
  if (!activeVimeoOverlay) return

  const overlay = activeVimeoOverlay
  activeVimeoOverlay = null
  overlay.querySelector('iframe')?.contentWindow?.postMessage(
    JSON.stringify({ method: 'pause' }),
    'https://player.vimeo.com',
  )
  overlay.remove()
  document.body.classList.remove('has-vimeo-fullscreen')

  const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
  if (exitFullscreen && fullscreenElement === overlay) {
    const exit = document.exitFullscreen || document.webkitExitFullscreen
    try {
      exit?.call(document)
    } catch {
      // The browser may already be leaving fullscreen.
    }
  }
}

function resetMobileFeed() {
  mobileFeedIsResetting = true
  mobileFeed.scrollTo({ top: 0, behavior: 'auto' })
  activeShowreel = 0
  activeTitle.textContent = SHOWREELS[activeShowreel].title
  updateShowreelControls()
  window.setTimeout(() => {
    mobileFeedIsResetting = false
  }, 300)
}

function cancelMobileScrollHint() {
  window.clearTimeout(mobileScrollHintTimer)
  window.clearTimeout(mobileScrollHintReturnTimer)
  window.clearTimeout(mobileScrollHintFinishTimer)
  mobileScrollHintAnimating = false
  mobileFeed.classList.remove('is-scroll-hinting')
}

function markMobileFeedInteraction() {
  if (mobileFeedIsResetting) return
  mobileFeedInteracted = true
  cancelMobileScrollHint()
}

function scheduleMobileScrollHint() {
  cancelMobileScrollHint()

  if (
    mobileFeedInteracted ||
    mobileScrollHintPlayed ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return
  }

  mobileScrollHintTimer = window.setTimeout(() => {
    if (
      document.body.dataset.page !== 'showreel' ||
      !window.matchMedia('(max-width: 1023px)').matches ||
      mobileFeedInteracted ||
      mobileFeed.scrollTop > 1
    ) {
      return
    }

    mobileScrollHintPlayed = true
    mobileScrollHintAnimating = true
    mobileFeed.classList.add('is-scroll-hinting')
    mobileFeed.scrollTo({ top: 180, behavior: 'smooth' })

    mobileScrollHintReturnTimer = window.setTimeout(() => {
      mobileFeed.scrollTo({ top: 0, behavior: 'smooth' })
    }, 750)

    mobileScrollHintFinishTimer = window.setTimeout(() => {
      mobileScrollHintAnimating = false
      mobileFeed.classList.remove('is-scroll-hinting')
    }, 1550)
  }, MOBILE_SCROLL_HINT_DELAY)
}

function handleMobileFeedScroll() {
  if (mobileFeedIsResetting || mobileScrollHintAnimating) return
  markMobileFeedInteraction()
}

function cancelDesktopScrollHint() {
  window.clearTimeout(desktopScrollHintTimer)
  desktopScrollHintAnimation?.cancel()
  desktopScrollHintAnimation = null
  desktopShowreel.classList.remove('is-scroll-hinting')
}

function markDesktopShowreelInteraction() {
  desktopShowreelInteracted = true
  cancelDesktopScrollHint()
}

function scheduleDesktopScrollHint() {
  cancelDesktopScrollHint()

  if (
    desktopShowreelInteracted ||
    desktopScrollHintPlayed ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return
  }

  desktopScrollHintTimer = window.setTimeout(() => {
    if (
      document.body.dataset.page !== 'showreel' ||
      window.matchMedia('(max-width: 1023px)').matches ||
      desktopShowreelInteracted ||
      desktopSwitchInProgress ||
      document.visibilityState !== 'visible'
    ) {
      return
    }

    desktopScrollHintPlayed = true
    desktopShowreel.classList.add('is-scroll-hinting')
    desktopScrollHintAnimation = desktopVideo.animate(
      [
        { transform: 'translate(-50%, -50%)', offset: 0 },
        { transform: 'translate(-50%, calc(-50% - 64px))', offset: 0.42 },
        { transform: 'translate(-50%, calc(-50% - 64px))', offset: 0.58 },
        { transform: 'translate(-50%, -50%)', offset: 1 },
      ],
      { duration: 1_400, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
    )

    const finishHint = () => {
      desktopShowreel.classList.remove('is-scroll-hinting')
      desktopScrollHintAnimation = null
    }
    desktopScrollHintAnimation.addEventListener('finish', finishHint, { once: true })
    desktopScrollHintAnimation.addEventListener('cancel', finishHint, { once: true })
  }, DESKTOP_SCROLL_HINT_DELAY)
}

function handleDesktopWheel(event) {
  if (
    document.body.dataset.page !== 'showreel' ||
    window.matchMedia('(max-width: 1023px)').matches ||
    Math.abs(event.deltaY) < 16
  ) {
    return
  }

  event.preventDefault()
  markDesktopShowreelInteraction()

  const now = performance.now()
  if (desktopSwitchInProgress || now < desktopWheelLockedUntil) return

  const direction = event.deltaY > 0 ? 1 : -1
  const nextIndex = Math.max(0, Math.min(SHOWREELS.length - 1, activeShowreel + direction))
  if (nextIndex === activeShowreel) return

  desktopWheelLockedUntil = now + 600
  switchDesktopShowreel(nextIndex)
}

function returnDesktopVideoFromSwipe(offset) {
  desktopSwipeReturnAnimation?.cancel()
  desktopSwipeReturnAnimation = desktopVideo.animate(
    [
      { translate: `0 ${offset}px` },
      { translate: '0 0' },
    ],
    { duration: 220, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
  )

  desktopSwipeReturnAnimation.addEventListener('finish', () => {
    desktopVideo.style.removeProperty('translate')
    desktopSwipeReturnAnimation = null
  }, { once: true })
}

function startDesktopSwipe(event) {
  if (
    window.matchMedia('(max-width: 1023px)').matches ||
    desktopSwitchInProgress ||
    (event.pointerType === 'mouse' && event.button !== 0)
  ) {
    return
  }

  markDesktopShowreelInteraction()
  desktopSwipeReturnAnimation?.cancel()
  desktopSwipeReturnAnimation = null
  desktopVideo.style.removeProperty('translate')
  desktopSwipePointerId = event.pointerId
  desktopSwipeStartY = event.clientY
  desktopSwipeOffset = 0
  desktopSwipeSurface.classList.add('is-dragging')
  desktopSwipeSurface.setPointerCapture(event.pointerId)
}

function moveDesktopSwipe(event) {
  if (event.pointerId !== desktopSwipePointerId) return

  const rawOffset = event.clientY - desktopSwipeStartY
  desktopSwipeOffset = Math.max(
    -DESKTOP_SWIPE_MAX_OFFSET,
    Math.min(DESKTOP_SWIPE_MAX_OFFSET, rawOffset),
  )
  desktopVideo.style.translate = `0 ${desktopSwipeOffset}px`
}

function finishDesktopSwipe(event, allowSwitch = true) {
  if (event.pointerId !== desktopSwipePointerId) return

  if (desktopSwipeSurface.hasPointerCapture(event.pointerId)) {
    desktopSwipeSurface.releasePointerCapture(event.pointerId)
  }
  desktopSwipeSurface.classList.remove('is-dragging')

  const offset = desktopSwipeOffset
  desktopSwipePointerId = null
  desktopSwipeOffset = 0
  returnDesktopVideoFromSwipe(offset)

  if (!allowSwitch || Math.abs(offset) < DESKTOP_SWIPE_THRESHOLD) return

  const direction = offset < 0 ? 1 : -1
  const nextIndex = Math.max(0, Math.min(SHOWREELS.length - 1, activeShowreel + direction))
  if (nextIndex !== activeShowreel) switchDesktopShowreel(nextIndex)
}

function renderPage(page) {
  const isShowreel = page === 'showreel'

  if (!isShowreel) {
    pauseAllShowreelMedia()
    closeMobileVimeo()
  }

  document.body.dataset.page = isShowreel ? 'showreel' : 'home'
  homePage.hidden = isShowreel
  showreelPage.hidden = !isShowreel
  window.scrollTo(0, 0)

  if (isShowreel && window.matchMedia('(max-width: 1023px)').matches) {
    cancelDesktopScrollHint()
    mobileFeedInteracted = false
    mobileScrollHintPlayed = false
    requestAnimationFrame(() => {
      resetMobileFeed()
      scheduleMobileScrollHint()
    })
  } else if (isShowreel) {
    cancelMobileScrollHint()
    desktopShowreelInteracted = false
    desktopScrollHintPlayed = false
    requestAnimationFrame(scheduleDesktopScrollHint)
  } else {
    cancelMobileScrollHint()
    cancelDesktopScrollHint()
  }
}

function navigateToPage(page) {
  const currentPage = document.body.dataset.page
  if (page === currentPage) return

  const baseUrl = `${window.location.pathname}${window.location.search}`
  const nextUrl = page === 'showreel' ? `${baseUrl}#showreel` : baseUrl
  window.history.pushState({ page }, '', nextUrl)
  renderPage(page)
}

function clearMobileActionState() {
  if (!window.matchMedia('(max-width: 1023px)').matches) return

  const activeElement = document.activeElement
  if (activeElement instanceof HTMLElement) activeElement.blur()
}

function openContacts() {
  if (!contactDialog || contactDialog.open) return

  playHapticSound()
  const baseUrl = `${window.location.pathname}${window.location.search}`
  window.history.pushState({ page: 'home', contact: true }, '', `${baseUrl}#contact`)
  contactDialog.showModal()
}

function closeContacts({ restoreHistory = true } = {}) {
  if (!contactDialog?.open) return

  contactDialog.close()
  if (restoreHistory && window.location.hash === '#contact') window.history.back()
}

function createPlayButton(item, media) {
  const button = document.createElement('button')
  const icon = document.createElement('img')

  button.className = 'play-button'
  button.type = 'button'
  button.setAttribute('aria-label', `Смотреть: ${item.title}`)
  icon.src = '/assets/play.svg'
  icon.alt = ''
  button.append(icon)

  if (item.video) {
    button.addEventListener('click', () => {
      const video = document.createElement('video')
      video.src = item.video
      video.controls = true
      video.autoplay = true
      video.playsInline = true
      video.preload = 'metadata'
      media.style.backgroundImage = 'none'
      media.replaceChildren(video)
    })
  }

  return button
}

function renderPoster(item, media) {
  media.style.backgroundColor = item.poster ? '#000' : '#fff'
  media.style.backgroundImage = item.poster ? `url("${item.poster}")` : 'none'
  media.style.backgroundPosition = 'center'
  media.style.backgroundRepeat = 'no-repeat'
  media.style.backgroundSize = 'contain'
}

function createVimeoIframe(item, { autoplay = false, fullscreenOnPlay = false } = {}) {
  const iframe = document.createElement('iframe')
  const url = new URL(item.vimeo)

  if (autoplay) url.searchParams.set('autoplay', '1')
  if (fullscreenOnPlay) {
    url.searchParams.set('playsinline', '0')
    url.searchParams.set('autopause', '0')
  }

  iframe.src = url.toString()
  iframe.title = `Vimeo: ${item.title}`
  iframe.allow = 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share'
  iframe.referrerPolicy = 'strict-origin-when-cross-origin'
  iframe.allowFullscreen = true
  iframe.loading = 'lazy'
  return iframe
}

function openMobileVimeo(item) {
  closeMobileVimeo()
  pauseAllShowreelMedia()

  const overlay = document.createElement('div')
  const iframe = createVimeoIframe(item, { autoplay: true, fullscreenOnPlay: true })
  const closeButton = document.createElement('button')

  overlay.className = 'vimeo-fullscreen'
  overlay.setAttribute('role', 'dialog')
  overlay.setAttribute('aria-label', `Видео: ${item.title}`)
  closeButton.className = 'vimeo-fullscreen__close'
  closeButton.type = 'button'
  closeButton.setAttribute('aria-label', 'Закрыть видео')
  iframe.loading = 'eager'
  overlay.append(iframe, closeButton)
  document.body.append(overlay)
  document.body.classList.add('has-vimeo-fullscreen')
  activeVimeoOverlay = overlay

  const sendPlayerCommand = (method) => {
    iframe.contentWindow?.postMessage(JSON.stringify({ method }), 'https://player.vimeo.com')
  }

  sendPlayerCommand('play')
  iframe.addEventListener('load', () => sendPlayerCommand('play'), { once: true })
  closeButton.addEventListener('click', () => closeMobileVimeo())

  const requestFullscreen = overlay.requestFullscreen || overlay.webkitRequestFullscreen
  if (requestFullscreen) {
    try {
      requestFullscreen.call(overlay)?.catch?.(() => {})
    } catch {
      // The fixed overlay remains full-screen if the native API is unavailable.
    }
  }
}

function openNativeVideo(video) {
  pauseAllShowreelMedia(video.closest('.showreel-card__media'))
  video.currentTime = 0
  video.muted = false

  const restorePoster = () => {
    video.pause()
    video.currentTime = 0
    video.load()
    video.closest('.showreel-poster')?.querySelector('.showreel-poster__play')?.blur()
    document.removeEventListener('fullscreenchange', handleFullscreenChange)
    document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
  }

  const handleFullscreenChange = () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
    if (fullscreenElement === video) {
      video.dataset.nativeFullscreen = 'true'
      return
    }
    if (video.dataset.nativeFullscreen === 'true') {
      delete video.dataset.nativeFullscreen
      restorePoster()
    }
  }

  document.addEventListener('fullscreenchange', handleFullscreenChange)
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange)

  const playback = video.play()
  playback?.catch?.(() => {})

  if (typeof video.webkitEnterFullscreen === 'function') {
    try {
      video.webkitEnterFullscreen()
    } catch {
      video.addEventListener('loadedmetadata', () => {
        try {
          video.webkitEnterFullscreen()
        } catch {
          // Playback itself opens the native player when playsinline is disabled.
        }
      }, { once: true })
    }
  } else {
    const requestFullscreen = video.requestFullscreen || video.webkitRequestFullscreen
    try {
      requestFullscreen?.call(video)?.catch?.(() => {})
    } catch {
      // The browser can still present its regular full-screen video controls.
    }
  }

  video.addEventListener('webkitendfullscreen', restorePoster, { once: true })
  video.addEventListener('ended', restorePoster, { once: true })
}

function createVimeoPoster(item, media) {
  const poster = document.createElement('div')
  const nativeVideo = item.mobileVideo ? document.createElement('video') : null
  const image = document.createElement('img')
  const shade = document.createElement('span')
  const button = document.createElement('button')

  poster.className = 'showreel-poster'
  image.className = 'showreel-poster__image'
  shade.className = 'showreel-poster__shade'
  button.className = 'showreel-poster__play'
  button.type = 'button'
  button.setAttribute('aria-label', `Смотреть на весь экран: ${item.title}`)
  image.src = item.mobilePoster
  image.alt = ''

  if (nativeVideo) {
    nativeVideo.className = 'showreel-native-video'
    nativeVideo.src = item.mobileVideo
    nativeVideo.preload = 'metadata'
    nativeVideo.controls = true
    nativeVideo.playsInline = false
    poster.append(nativeVideo)
  }

  poster.append(image, shade, button)

  button.addEventListener('click', () => {
    if (nativeVideo) openNativeVideo(nativeVideo)
    else openMobileVimeo(item)
  })

  return poster
}

function renderShowreelMedia(item, media) {
  const useMobilePoster = Boolean(
    item.vimeo &&
    item.mobilePoster &&
    media.closest('.showreel__mobile')
  )

  media.classList.toggle('showreel-card__media--vimeo', Boolean(item.vimeo) && !useMobilePoster)
  media.classList.toggle('showreel-card__media--placeholder', Boolean(item.placeholder))

  if (item.placeholder) {
    const placeholder = document.createElement('p')
    placeholder.className = 'showreel-card__placeholder'
    placeholder.textContent = item.placeholder
    media.style.backgroundColor = '#1f1f1f'
    media.style.backgroundImage = 'none'
    media.setAttribute('aria-label', item.placeholder)
    media.replaceChildren(placeholder)
    return
  }

  media.removeAttribute('aria-label')

  if (item.vimeo) {
    media.style.backgroundColor = '#000'
    media.style.backgroundImage = 'none'
    media.replaceChildren(
      useMobilePoster ? createVimeoPoster(item, media) : createVimeoIframe(item),
    )
    return
  }

  renderPoster(item, media)
  media.replaceChildren(createPlayButton(item, media))
}

function renderActiveShowreel() {
  const item = SHOWREELS[activeShowreel]
  activeTitle.textContent = item.title
  renderShowreelMedia(item, desktopVideo)
  updateShowreelControls()
}

async function switchDesktopShowreel(index) {
  const nextIndex = Math.max(0, Math.min(SHOWREELS.length - 1, index))
  if (nextIndex === activeShowreel || desktopSwitchInProgress) return

  pauseAllShowreelMedia()
  playHapticSound()

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    activeShowreel = nextIndex
    renderActiveShowreel()
    return
  }

  const direction = nextIndex > activeShowreel ? 1 : -1
  const exitTransform = direction > 0
    ? 'translate(-50%, calc(-50% - 48px))'
    : 'translate(-50%, calc(-50% + 48px))'
  const enterTransform = direction > 0
    ? 'translate(-50%, calc(-50% + 48px))'
    : 'translate(-50%, calc(-50% - 48px))'

  desktopSwitchInProgress = true
  desktopShowreel.classList.add('is-switching')
  desktopVideo.setAttribute('aria-busy', 'true')

  try {
    const exitAnimation = desktopVideo.animate(
      [
        { opacity: 1, transform: 'translate(-50%, -50%)' },
        { opacity: 0, transform: exitTransform },
      ],
      { duration: 180, easing: 'cubic-bezier(0.4, 0, 1, 1)', fill: 'both' },
    )
    await exitAnimation.finished
    exitAnimation.cancel()

    activeShowreel = nextIndex
    renderActiveShowreel()

    const enterAnimation = desktopVideo.animate(
      [
        { opacity: 0, transform: enterTransform },
        { opacity: 1, transform: 'translate(-50%, -50%)' },
      ],
      { duration: 260, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'both' },
    )
    await enterAnimation.finished
    enterAnimation.cancel()
  } finally {
    desktopSwitchInProgress = false
    desktopShowreel.classList.remove('is-switching')
    desktopVideo.setAttribute('aria-busy', 'false')
    updateShowreelControls()
  }
}

function updateShowreelControls() {
  previousButton.disabled = activeShowreel === 0
  nextButton.disabled = activeShowreel === SHOWREELS.length - 1

  categoryButtons.forEach((button, index) => {
    const isActive = index === activeShowreel
    button.classList.toggle('is-active', isActive)
    button.setAttribute('aria-current', isActive ? 'true' : 'false')
  })

  mobileCategoryButtons.forEach((button, index) => {
    const isActive = index === activeShowreel
    button.classList.toggle('is-active', isActive)
    button.setAttribute('aria-current', isActive ? 'true' : 'false')
  })
}

function scrollToMobileShowreel(index, behavior = 'smooth') {
  const nextIndex = Math.max(0, Math.min(SHOWREELS.length - 1, index))
  pauseAllShowreelMedia(mobileCards[nextIndex].querySelector('.showreel-card__media'))
  mobileFeed.scrollTo({ top: mobileCards[nextIndex].offsetTop, behavior })
}

document.querySelectorAll('.showreel__mobile .showreel-card').forEach((card, index) => {
  const media = card.querySelector('.showreel-card__media')
  const item = SHOWREELS[index]
  renderShowreelMedia(item, media)
})

document.querySelectorAll('.site-header button, .site-header a').forEach((item) => {
  item.addEventListener('click', () => playHapticSound(1.35))
})

document.querySelectorAll('[data-page-target]').forEach((button) => {
  button.addEventListener('click', () => {
    navigateToPage(button.dataset.pageTarget)
    requestAnimationFrame(clearMobileActionState)
  })
})

document.querySelectorAll('[data-contact]').forEach((button) => {
  button.addEventListener('click', () => {
    openContacts()
    requestAnimationFrame(clearMobileActionState)
  })
})

contactDialogClose?.addEventListener('click', () => closeContacts())

contactDialog?.addEventListener('click', (event) => {
  if (event.target === contactDialog) closeContacts()
})

contactDialog?.addEventListener('cancel', (event) => {
  event.preventDefault()
  closeContacts()
})

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    markDesktopShowreelInteraction()
    switchDesktopShowreel(Number(button.dataset.showreelIndex))
  })
})

mobileCategoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    markMobileFeedInteraction()
    scrollToMobileShowreel(Number(button.dataset.mobileShowreelIndex))
  })
})

const mobileCardObserver = new IntersectionObserver(
  (entries) => {
    if (
      document.body.dataset.page !== 'showreel' ||
      !window.matchMedia('(max-width: 1023px)').matches
    ) {
      return
    }

    const visibleCard = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

    if (!visibleCard) return
    const nextShowreel = Number(visibleCard.target.dataset.mobileCardIndex)
    if (nextShowreel === activeShowreel) return

    pauseAllShowreelMedia(visibleCard.target.querySelector('.showreel-card__media'))
    activeShowreel = nextShowreel
    if (mobileFeedInteracted && !mobileFeedIsResetting) playHapticSound()
    activeTitle.textContent = SHOWREELS[activeShowreel].title
    updateShowreelControls()
  },
  { root: mobileFeed, threshold: [0.6, 0.8] },
)

mobileCards.forEach((card) => mobileCardObserver.observe(card))

mobileFeed.addEventListener('pointerdown', markMobileFeedInteraction, { passive: true })
mobileFeed.addEventListener('wheel', markMobileFeedInteraction, { passive: true })
mobileFeed.addEventListener('scroll', handleMobileFeedScroll, { passive: true })
document.addEventListener('touchstart', handlePullRefreshStart, { passive: true })
document.addEventListener('touchmove', handlePullRefreshMove, { passive: false })
document.addEventListener('touchend', handlePullRefreshEnd, { passive: true })
document.addEventListener('touchcancel', resetPullRefresh, { passive: true })
desktopShowreel.addEventListener('pointerdown', markDesktopShowreelInteraction, { passive: true })
desktopShowreel.addEventListener('wheel', handleDesktopWheel, { passive: false })
desktopSwipeSurface.addEventListener('pointerdown', startDesktopSwipe)
desktopSwipeSurface.addEventListener('pointermove', moveDesktopSwipe)
desktopSwipeSurface.addEventListener('pointerup', (event) => finishDesktopSwipe(event))
desktopSwipeSurface.addEventListener('pointercancel', (event) => finishDesktopSwipe(event, false))

document.querySelectorAll('[data-social]').forEach((button) => {
  button.addEventListener('click', () => {
    const url = SOCIAL_LINKS[button.dataset.social]
    if (url) window.open(url, '_blank', 'noopener,noreferrer')
    else openContacts()
  })
})

previousButton.addEventListener('click', () => {
  markDesktopShowreelInteraction()
  switchDesktopShowreel(activeShowreel - 1)
})

nextButton.addEventListener('click', () => {
  markDesktopShowreelInteraction()
  switchDesktopShowreel(activeShowreel + 1)
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && activeVimeoOverlay) {
    closeMobileVimeo()
    return
  }

  if (document.body.dataset.page !== 'showreel') return

  if (window.matchMedia('(max-width: 1023px)').matches) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault()
      scrollToMobileShowreel(activeShowreel - 1)
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault()
      scrollToMobileShowreel(activeShowreel + 1)
    }
    return
  }

  if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    markDesktopShowreelInteraction()
    previousButton.click()
  }
  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    markDesktopShowreelInteraction()
    nextButton.click()
  }
})

window.addEventListener('popstate', () => {
  closeContacts({ restoreHistory: false })
  renderPage(window.location.hash === '#showreel' ? 'showreel' : 'home')
  requestAnimationFrame(clearMobileActionState)
})

window.addEventListener('pageshow', () => requestAnimationFrame(clearMobileActionState))

document.addEventListener('fullscreenchange', () => {
  if (activeVimeoOverlay?.dataset.enteredFullscreen === 'true' && !document.fullscreenElement) {
    closeMobileVimeo({ exitFullscreen: false })
    return
  }
  if (document.fullscreenElement === activeVimeoOverlay) {
    activeVimeoOverlay.dataset.enteredFullscreen = 'true'
  }
})

window.addEventListener('pagehide', () => pauseAllShowreelMedia())
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') pauseAllShowreelMedia()
})

window.addEventListener('load', () => {
  if (
    document.body.dataset.page === 'showreel' &&
    window.matchMedia('(max-width: 1023px)').matches
  ) {
    mobileFeedInteracted = false
    mobileScrollHintPlayed = false
    resetMobileFeed()
    scheduleMobileScrollHint()
  }
})

renderPage(window.location.hash === '#showreel' ? 'showreel' : 'home')
renderActiveShowreel()
