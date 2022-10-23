export const menuActive = (menu: HTMLElement): void => {
  if (!menu.classList.contains('translate-x-[-100%]'))
    menu.classList.add('translate-x-[-100%]')
  else menu.classList.remove('translate-x-[-100%]')
}
