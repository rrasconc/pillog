import { useToastStore } from '@/utils/stores'

export function useToast() {
  const toast = useToastStore((state) => state.toast)
  const { isVisible, message } = toast
  const show = useToastStore((state) => state.show)
  const hideToast = useToastStore((state) => state.hide)

  const showToast = (message: string) => {
    show(message)
    setTimeout(() => {
      hideToast()
    }, 3000)
  }

  return { isVisible, message, hideToast, showToast }
}
