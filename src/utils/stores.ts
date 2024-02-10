import { create } from 'zustand'

interface Toast {
  isVisible: boolean
  message: string
}

interface ToastState {
  toast: Toast
  show: (message: string) => void
  hide: () => void
}

export const useToastStore = create<ToastState>()((set) => ({
  toast: {
    isVisible: false,
    message: '',
  },
  show: (message) => set({ toast: { message, isVisible: true } }),
  hide: () => set({ toast: { message: '', isVisible: false } }),
}))
