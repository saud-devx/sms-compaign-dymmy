
import * as React from "react"

// Define breakpoints for different screen sizes
const MOBILE_BREAKPOINT = 640  // sm breakpoint (was 768)
const TABLET_BREAKPOINT = 768  // md breakpoint
const DESKTOP_BREAKPOINT = 1024 // lg breakpoint
const LARGE_BREAKPOINT = 1280  // xl breakpoint
const XL_BREAKPOINT = 1536     // 2xl breakpoint

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
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT && window.innerWidth < LARGE_BREAKPOINT)
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

export function useIsLarge() {
  const [isLarge, setIsLarge] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkLarge = () => {
      setIsLarge(window.innerWidth >= LARGE_BREAKPOINT && window.innerWidth < XL_BREAKPOINT)
    }
    
    // Check on mount
    checkLarge()
    
    // Add resize listener
    window.addEventListener('resize', checkLarge)
    
    // Clean up
    return () => window.removeEventListener('resize', checkLarge)
  }, [])

  return !!isLarge
}

export function useIsXL() {
  const [isXL, setIsXL] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkXL = () => {
      setIsXL(window.innerWidth >= XL_BREAKPOINT)
    }
    
    // Check on mount
    checkXL()
    
    // Add resize listener
    window.addEventListener('resize', checkXL)
    
    // Clean up
    return () => window.removeEventListener('resize', checkXL)
  }, [])

  return !!isXL
}

export function useBreakpoint() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isDesktop = useIsDesktop()
  const isLarge = useIsLarge()
  const isXL = useIsXL()
  
  const exactBreakpoint = React.useMemo(() => {
    if (isMobile) return 'sm'
    if (isTablet) return 'md'
    if (isDesktop) return 'lg'
    if (isLarge) return 'xl'
    if (isXL) return '2xl'
    return 'sm' // default fallback
  }, [isMobile, isTablet, isDesktop, isLarge, isXL])
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    isLarge,
    isXL,
    // Add additional utility for cleaner component code
    screen: isMobile ? 'mobile' : isTablet ? 'tablet' : isDesktop ? 'desktop' : isLarge ? 'large' : 'xl',
    // Exact tailwind breakpoint
    breakpoint: exactBreakpoint,
    // Helper functions for conditional rendering
    isAtLeast: {
      sm: !isMobile,
      md: !isMobile && !isTablet,
      lg: !isMobile && !isTablet && !isDesktop,
      xl: !isMobile && !isTablet && !isDesktop && !isLarge,
      '2xl': isXL
    },
    isAtMost: {
      sm: isMobile,
      md: isMobile || isTablet,
      lg: isMobile || isTablet || isDesktop,
      xl: isMobile || isTablet || isDesktop || isLarge,
      '2xl': true
    }
  }
}
