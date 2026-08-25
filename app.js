const SOCIAL_LINKS = {
  telegram: 'https://t.me/santa_jackson',
  instagram: 'https://www.instagram.com/santa_jackson?igsi=MXhzbGswcnd6OHBvaA%3D%3D&utm_source=qr',
  phone: 'tel:+79869119192',
}

const SHOWREELS = [
  { title: 'Свадьбы', placeholder: 'Скоро здесь будет видео' },
  {
    title: 'Корпоративы',
    vimeo: 'https://player.vimeo.com/video/1220923496?app_id=122963',
  },
  {
    title: 'Дни рождения',
    vimeo: 'https://player.vimeo.com/video/1220922735?app_id=122963',
  },
]

const MOBILE_SCROLL_HINT_DELAY = 5_000
const DESKTOP_SCROLL_HINT_DELAY = 5_000
const DESKTOP_SWIPE_THRESHOLD = 72
const DESKTOP_SWIPE_MAX_OFFSET = 120

const contactDialog = document.querySelector('#contacts')
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

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
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

function openContacts() {
  if (SOCIAL_LINKS.telegram) {
    window.open(SOCIAL_LINKS.telegram, '_blank', 'noopener,noreferrer')
  } else {
    contactDialog?.showModal()
  }
}

function createPlayButton(item, media) {
  const button = document.createElement('button')
  const icon = document.createElement('img')

  button.className = 'play-button'
  button.type = 'button'
  button.setAttribute('aria-label', `Смотреть: ${item.title}`)
  icon.src = 'play.svg'
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

function renderShowreelMedia(item, media) {
  media.classList.toggle('showreel-card__media--vimeo', Boolean(item.vimeo))
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
    const iframe = document.createElement('iframe')
    iframe.src = item.vimeo
    iframe.title = `Vimeo: ${item.title}`
    iframe.allow = 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share'
    iframe.referrerPolicy = 'strict-origin-when-cross-origin'
    iframe.allowFullscreen = true
    iframe.loading = 'lazy'
    media.style.backgroundColor = '#000'
    media.style.backgroundImage = 'none'
    media.replaceChildren(iframe)
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
  button.addEventListener('click', () => navigateToPage(button.dataset.pageTarget))
})

document.querySelectorAll('[data-contact]').forEach((button) => {
  button.addEventListener('click', openContacts)
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
    else contactDialog?.showModal()
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
  renderPage(window.location.hash === '#showreel' ? 'showreel' : 'home')
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
