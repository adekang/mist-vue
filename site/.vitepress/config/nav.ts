import type { DefaultTheme } from 'vitepress'

export function getNav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Components',
      link: '/components/',
    },
    {
      text: '工具库',
      link: '/utils/',
    },
  ]
}
