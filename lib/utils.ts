import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sortByTitle(array: any[]) {
  array.sort((a, b) => {
    const titleA = a.title.toUpperCase()
    const titleB = b.title.toUpperCase()

    if (titleA < titleB) {
      return -1
    }
    if (titleA > titleB) {
      return 1
    }
    return 0
  })
  return array
}
