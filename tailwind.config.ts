import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'rgb(76, 175, 80)',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'rgb(3, 169, 244)',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'primary-foreground': 'hsl(var(--primary-foreground))',
        accent: {
          1: '#FF416C',
          2: '#FF4B2B',
          3: '#00DBDE',
          4: '#FC00FF',
          DEFAULT: 'rgba(76, 175, 80, 0.2)'
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "gradient-x": "gradient 15s ease infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "zoom-in": "zoomIn 0.5s ease-out",
        "spin-slow": "spin 5s linear infinite",
        "glow": "glow 3s infinite",
        "shimmer": "shimmer 2s infinite",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "blur-in": "blurIn 0.5s ease-out forwards",
        "border-pulse": "borderPulse 3s ease-in-out infinite alternate",
        "morph-blob": "morphBlob 8s ease-in-out infinite alternate",
        "oscillate": "oscillate 3s ease-in-out infinite",
        "text-shimmer": "textShimmer 2s infinite linear",
        "spotlight": "spotlight 2s ease infinite",
        "translate-x": "translateX 15s ease-in-out infinite alternate",
        "translate-y": "translateY 10s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(74, 222, 128, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(74, 222, 128, 0.6)" },
          "100%": { boxShadow: "0 0 5px rgba(74, 222, 128, 0.3)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blurIn: {
          "0%": { opacity: "0", filter: "blur(8px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        borderPulse: {
          "0%": { opacity: "0.3", transform: "scale(0.98)" },
          "100%": { opacity: "0.6", transform: "scale(1.01)" },
        },
        morphBlob: {
          "0%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "25%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "50%": { borderRadius: "50% 60% 30% 70% / 40% 60% 70% 30%" },
          "75%": { borderRadius: "60% 30% 70% 40% / 60% 40% 60% 50%" },
          "100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
        },
        oscillate: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
        textShimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        spotlight: {
          "0%": { opacity: "0.1" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "0.1" },
        },
        translateX: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20px)" },
          "100%": { transform: "translateX(0)" },
        },
        translateY: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      backgroundSize: {
        'size-200': '200% 200%',
        'size-300': '300% 300%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-spotlight': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(to right, var(--tw-gradient-stops)), linear-gradient(to bottom, var(--tw-gradient-stops))',
        'duotone-primary': 'linear-gradient(to right, rgba(76, 175, 80, 0.5), rgba(3, 169, 244, 0.5))',
        'duotone-secondary': 'linear-gradient(to right, rgba(255, 65, 108, 0.5), rgba(255, 75, 43, 0.5))',
        'gradient-shine': 'linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)',
        'noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'neu-light': '5px 5px 15px rgba(0,0,0,0.1), -5px -5px 15px rgba(255,255,255,0.8)',
        'neu-dark': '5px 5px 15px rgba(0,0,0,0.3), -5px -5px 15px rgba(255,255,255,0.05)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.05)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'glow-sm': '0 0 10px rgba(74, 222, 128, 0.4)',
        'glow-md': '0 0 20px rgba(74, 222, 128, 0.6)',
        'glow-lg': '0 0 30px rgba(74, 222, 128, 0.8)',
        'spotlight': '0 0 20px 5px rgba(255, 255, 255, 0.3)',
        'spotlight-dark': '0 0 20px 5px rgba(255, 255, 255, 0.15)',
        'float': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'float-dark': '0 10px 30px rgba(0, 0, 0, 0.3)',
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primary'),
                textDecoration: 'underline',
              },
            },
            h1: {
              color: theme('colors.gray.900'),
              fontWeight: '700',
            },
            h2: {
              color: theme('colors.gray.900'),
              fontWeight: '700',
            },
            h3: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
            },
            h4: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
            },
            p: {
              color: theme('colors.gray.700'),
            },
            strong: {
              color: theme('colors.gray.900'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
            p: {
              color: theme('colors.gray.300'),
            },
            strong: {
              color: theme('colors.white'),
            },
            blockquote: {
              color: theme('colors.gray.300'),
            },
          },
        },
      }),
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-out-expo': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
      backdropBlur: {
        xs: '2px',
        md: '8px',
        xl: '24px',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
} satisfies Config;
