
import * as React from "react"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  ToastAction,
} from "@/components/ui/toast"
import { useToast as useToastPrimitive } from "@/components/ui/toast-primitive"

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 5000

export type ToasterToast = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactElement<typeof ToastAction>
  variant?: "default" | "destructive" | "success"
}

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ToastActionElement = React.ReactElement<typeof ToastAction>

type ToastProps = {
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
  variant?: "default" | "destructive" | "success"
}

const toastTypes = {
  default: {
    title: "Toast Title",
    description: "Toast Description",
  },
  destructive: {
    title: "Error",
    description: "Something went wrong.",
  },
  success: {
    title: "Success",
    description: "Operation completed successfully.",
  },
}

const actionTypes = {
  default: {
    altText: "default",
    icon: null,
    onClick: () => {},
  },
  cancel: {
    altText: "Cancel",
    icon: null,
    onClick: () => {},
  },
  retry: {
    altText: "Retry",
    icon: null,
    onClick: () => {},
  },
}

export const reducer = (state: ToasterToast[], action: any) => {
  switch (action.type) {
    case "ADD_TOAST":
      return [
        ...state,
        {
          id: action.toast.id || genId(),
          title: action.toast.title,
          description: action.toast.description,
          action: action.toast.action,
          variant: action.toast.variant,
        },
      ].slice(0, TOAST_LIMIT)

    case "UPDATE_TOAST":
      return state.map((t) =>
        t.id === action.toast.id
          ? { ...t, ...action.toast }
          : t
      )

    case "DISMISS_TOAST": {
      const { id } = action
      return state.filter((t) => t.id !== id)
    }

    default:
      return state
  }
}

const listeners: Array<(state: ToasterToast[]) => void> = []

let memoryState: ToasterToast[] = []

function dispatch(action: any) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

interface ToastReturn {
  id: string
  dismiss: () => void
  update: (props: ToastProps) => void
}

const toast = ({ ...props }: ToastProps): ToastReturn => {
  const id = genId()

  dispatch({
    type: "ADD_TOAST",
    toast: {
      id,
      ...props,
    },
  })

  return {
    id,
    dismiss: () => dispatch({ type: "DISMISS_TOAST", id }),
    update: (props: ToastProps) =>
      dispatch({
        type: "UPDATE_TOAST",
        toast: {
          id,
          ...props,
        },
      }),
  }
}

function useToast() {
  const [state, setState] = React.useState<ToasterToast[]>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    toast,
    dismiss: (id: string) => dispatch({ type: "DISMISS_TOAST", id }),
    toasts: state,
  }
}

export { useToast, toast }
