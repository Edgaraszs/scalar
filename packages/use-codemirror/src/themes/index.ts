import { tags as t } from '@lezer/highlight'
import { createTheme } from '@uiw/codemirror-themes'

export const lightTheme = createTheme({
  theme: 'light',
  settings: {
    background: 'var(--theme-background-2, var(--default-theme-background-2))',
    foreground: 'var(--theme-color-1, var(--default-theme-color-1))',
    caret: 'var(--theme-color-1, var(--default-theme-color-1))',
    selection: 'var(--theme-background-3, var(--default-theme-background-3))',
    selectionMatch: '#e3dcce',
    gutterBackground:
      'var(--theme-background-2, var(--default-theme-background-2))',
    gutterForeground: 'var(--theme-color-3, var(--default-theme-color-3))',
    gutterBorder: 'transparent',
    lineHighlight: '#EFEFEF',
    fontFamily: 'var(--theme-font-code, var(--default-theme-font-code))',
  },
  styles: [
    { tag: [t.standard(t.tagName), t.tagName], color: '#EDBE20' },
    {
      tag: [t.comment],
      color: 'var(--theme-color-3, var(--default-theme-color-3))',
    },
    {
      tag: [t.className],
      color: '#FB892C',
    },
    {
      tag: [t.variableName, t.propertyName, t.attributeName],
      color: 'var(--theme-color-1, var(--default-theme-color-1))',
    },
    {
      tag: [t.operator],
      color: 'var(--theme-color-2, var(--default-theme-color-2))',
    },
    {
      tag: [t.keyword, t.typeName, t.typeOperator],
      color: '#069061',
    },
    {
      tag: [t.string],
      color: '#0082D0',
    },
    {
      tag: [t.bracket, t.number, t.regexp, t.meta],
      color: '#5203D1',
    },
    { tag: [t.name, t.quote], color: '#22863a' },
    { tag: [t.heading], color: '#24292e', fontWeight: 'bold' },
    { tag: [t.emphasis], color: '#24292e', fontStyle: 'italic' },
    { tag: [t.deleted], color: '#b31d28', backgroundColor: 'ffeef0' },
    { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#5203D1' },
    {
      tag: [t.url, t.escape, t.regexp, t.link],
      color: 'var(--theme-color-1, var(--default-theme-color-1))',
    },
    { tag: t.link, textDecoration: 'underline' },
    { tag: t.strikethrough, textDecoration: 'line-through' },
    { tag: t.invalid, color: '#cb2431' },
  ],
})

export const darkTheme = createTheme({
  theme: 'dark',
  settings: {
    background: 'var(--theme-background-2, var(--default-theme-background-2))',
    foreground: 'var(--theme-color-1, var(--default-theme-color-1))',
    caret: 'var(--theme-color-1, var(--default-theme-color-1))',
    selection: 'var(--theme-background-3, var(--default-theme-background-3))',
    selectionMatch: '#e3dcce',
    gutterBackground:
      'var(--theme-background-2, var(--default-theme-background-2))',
    gutterForeground: 'var(--theme-color-3, var(--default-theme-color-3))',
    gutterBorder: 'transparent',
    lineHighlight: '#EFEFEF',
    fontFamily: 'var(--theme-font-code, var(--default-theme-font-code))',
  },
  styles: [
    { tag: [t.standard(t.tagName), t.tagName], color: '#FCD245' },
    {
      tag: [t.comment],
      color: 'var(--theme-color-3, var(--default-theme-color-3))',
    },
    {
      tag: [t.className],
      color: '#FC9B4B',
    },
    {
      tag: [t.variableName, t.propertyName, t.attributeName],
      color: 'var(--theme-color-1, var(--default-theme-color-1))',
    },
    {
      tag: [t.operator],
      color: 'var(--theme-color-2, var(--default-theme-color-2))',
    },
    {
      tag: [t.keyword, t.typeName, t.typeOperator],
      color: '#2BA179',
    },
    {
      tag: [t.string],
      color: '#2695D7',
    },
    {
      tag: [t.bracket, t.number, t.regexp, t.meta],
      color: '#864FDF',
    },
    { tag: [t.name, t.quote], color: '#22863a' },
    { tag: [t.heading], color: '#24292e', fontWeight: 'bold' },
    { tag: [t.emphasis], color: '#24292e', fontStyle: 'italic' },
    { tag: [t.deleted], color: '#b31d28', backgroundColor: 'ffeef0' },
    { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#5203D1' },
    {
      tag: [t.url, t.escape, t.regexp, t.link],
      color: 'var(--theme-color-1, var(--default-theme-color-1))',
    },
    { tag: t.link, textDecoration: 'underline' },
    { tag: t.strikethrough, textDecoration: 'line-through' },
    { tag: t.invalid, color: '#cb2431' },
  ],
})
