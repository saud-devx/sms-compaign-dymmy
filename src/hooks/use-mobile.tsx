
import * as React from "react"

// Define breakpoints for different screen sizes
const MOBILE_BREAKPOINT = 640  // sm breakpoint (was 768)
const TABLET_BREAKPOINT = 768  // md breakpoint
const DESKTOP_BREAKPOINT = 1024 // lg breakpoint

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Check on mount
    checkMobile()
    
    // Add resize listener
    window.addEventListener('resize', checkMobile)
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return !!isMobile
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= MOBILE_BREAKPOINT && window.innerWidth < DESKTOP_BREAKPOINT)
    }
    
    // Check on mount
    checkTablet()
    
    // Add resize listener
    window.addEventListener('resize', checkTablet)
    
    // Clean up
    return () => window.removeEventListener('resize', checkTablet)
  }, [])

  return !!isTablet
}

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT)
    }
    
    // Check on mount
    checkDesktop()
    
    // Add resize listener
    window.addEventListener('resize', checkDesktop)
    
    // Clean up
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  return !!isDesktop
}

export function useBreakpoint() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isDesktop = useIsDesktop()
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    // Add additional utility for cleaner component code
    screen: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
  }
}
