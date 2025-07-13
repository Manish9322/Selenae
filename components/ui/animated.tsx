"use client"

import React, { useState, useEffect, ReactNode } from 'react'
import { cn } from "@/lib/utils"

export interface AnimatedProps {
  children: ReactNode
  animation?: 
    | "fade-in" 
    | "fade-in-up" 
    | "fade-in-down" 
    | "fade-in-left" 
    | "fade-in-right"
    | "scale-in"
    | "scale-in-bounce"
    | "float"
    | "pulse"
  className?: string
  delay?: number | string
  duration?: number | string
  threshold?: number
  once?: boolean
  rootMargin?: string
}

export function Animated({
  children,
  animation = "fade-in",
  className = "",
  delay,
  duration,
  threshold = 0.1,
  once = true,
  rootMargin = "0px",
  ...props
}: AnimatedProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  
  useEffect(() => {
    if (!ref) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    )
    
    observer.observe(ref)
    
    return () => {
      if (ref) {
        observer.unobserve(ref)
      }
    }
  }, [ref, once, rootMargin, threshold])
  
  const style: React.CSSProperties = {}
  if (delay) {
    style.animationDelay = typeof delay === 'number' ? `${delay}s` : delay
  }
  if (duration) {
    style.animationDuration = typeof duration === 'number' ? `${duration}s` : duration
  }
  
  return (
    <div
      ref={setRef}
      className={cn(
        "animated",
        {
          [animation]: isVisible,
          "opacity-0": !isVisible,
        },
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </div>
  )
}

// Utility component for staggered children animations
export interface AnimatedGroupProps {
  children: ReactNode[]
  animation?: AnimatedProps['animation']
  staggerDelay?: number
  className?: string
  childClassName?: string
  duration?: number | string
  threshold?: number
  once?: boolean
  rootMargin?: string
}

export function AnimatedGroup({
  children,
  animation = "fade-in-up",
  staggerDelay = 0.1,
  className = "",
  childClassName = "",
  duration,
  threshold = 0.1,
  once = true,
  rootMargin = "0px",
}: AnimatedGroupProps) {
  return (
    <div className={className}>
      {React.Children.toArray(children).map((child, index) => (
        <Animated
          key={index}
          animation={animation}
          delay={staggerDelay * index}
          duration={duration}
          threshold={threshold}
          once={once}
          rootMargin={rootMargin}
          className={childClassName}
        >
          {child}
        </Animated>
      ))}
    </div>
  )
} 