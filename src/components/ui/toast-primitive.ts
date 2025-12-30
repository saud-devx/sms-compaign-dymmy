
import * as React from "react"

import { cn } from "@/lib/utils"

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

export interface Toast {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactElement
  variant?: "default" | "destructive" | "success"
}

export type ToasterToast = Toast

export interface ToastReturnType {
  id: string
  dismiss: () => void
  update: (props: Omit<ToasterToast, "id">) => void
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToasterToast[]>([])

  const toast = React.useCallback(
    ({ ...props }: Omit<ToasterToast, "id">): ToastReturnType => {
      const id = Math.random().toString(36).substring(2, 9)

      setToasts((toasts) => [
        {
          ...props,
          id,
        },
        ...toasts,
      ])

      return {
        id,
        dismiss: () => setToasts((toasts) => toasts.filter((t) => t.id !== id)),
        update: (props: Omit<ToasterToast, "id">) =>
          setToasts((toasts) =>
            toasts.map((t) => (t.id === id ? { ...t, ...props } : t))
          ),
      }
    },
    [setToasts]
  )

  return {
    toast,
    toasts,
    setToasts,
  }
}

export type ActionType = keyof typeof actionTypes

export const reducer = (
  state: ToasterToast[],
  action: { type: ActionType; toast: ToasterToast }
) => {
  switch (action.type) {
    case "ADD_TOAST":
      return [...state, action.toast]

    case "UPDATE_TOAST":
      return state.map((t) =>
        t.id === action.toast.id ? { ...t, ...action.toast } : t
      )

    case "DISMISS_TOAST": {
      const { toast } = action

      if (toast.id) {
        return state.filter((t) => t.id !== toast.id)
      }

      return state
    }

    case "REMOVE_TOAST":
      if (action.toast.id) {
        return state.filter((t) => t.id !== action.toast.id)
      }
      return state

    default:
      return state
  }
}

export const ToastContext = React.createContext<
  | {
      toast: ({ ...props }: Omit<ToasterToast, "id">) => ToastReturnType
      toasts: ToasterToast[]
      setToasts: React.Dispatch<React.SetStateAction<ToasterToast[]>>
    }
  | null
>(null)

export const useToastContext = () => {
  const context = React.useContext(ToastContext)

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }

  return context
}

export const ToastProvider = ToastContext.Provider
