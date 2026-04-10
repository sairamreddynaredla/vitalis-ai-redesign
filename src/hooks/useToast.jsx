import { createContext, useContext, useState, useCallback } from 'react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toastMsg, setToastMsg]     = useState('')
  const [toastVisible, setVisible]  = useState(false)
  let timer = null

  const showToast = useCallback((msg) => {
    setToastMsg(msg)
    setVisible(true)
    clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setTimeout(() => setVisible(false), 3200)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast UI */}
      <div
        className="fixed bottom-7 right-7 z-[2000] flex items-center gap-2 px-5 py-3 rounded-xl text-sm max-w-xs"
        style={{
          background:   'var(--card)',
          border:       '1px solid var(--accent)',
          boxShadow:    '0 8px 32px rgba(0,0,0,0.5)',
          transition:   'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          transform:    toastVisible ? 'translateY(0)' : 'translateY(80px)',
          opacity:      toastVisible ? 1 : 0,
          pointerEvents: toastVisible ? 'auto' : 'none',
        }}
      >
        <span style={{ color: 'var(--accent)' }}>✦</span>
        <span>{toastMsg}</span>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}
