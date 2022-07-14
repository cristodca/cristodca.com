export function checkDarkMode() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('html').classList.add('dark')
    return true
  } else {
    document.querySelector('html').classList.remove('dark')
    return false
  }
}

export function toggleDarkMode() {
  if (localStorage.theme === 'dark') {
    localStorage.theme = 'light'
  } else {
    localStorage.theme = 'dark'
  }
  
  checkDarkMode()
}

export function OsDarkMode() {
  localStorage.removeItem('theme')

  checkDarkMode()
}