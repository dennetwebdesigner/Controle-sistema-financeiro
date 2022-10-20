export const setLocal = (data: { key: string; value: string }): void => {
  window.localStorage.setItem(data.key, data.value)
}

export const getLocal = (data: { key: string }): string | null => {
  return window.localStorage.getItem(data.key)
}

export const refreshForce = (url: string) => {
  window.location.href = url
}
