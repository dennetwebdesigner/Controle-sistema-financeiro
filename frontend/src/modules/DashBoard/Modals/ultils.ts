export const activeModal = (modal: HTMLElement, active: boolean) => {
  if (active) {
    modal.classList.add('flex')
    modal.classList.remove('hidden')
  } else {
    modal.classList.add('hidden')
    modal.classList.remove('flex')
  }
}
