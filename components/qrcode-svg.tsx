import React from 'react'

interface QRCodeSVGProps {
  content: string
  size?: number
  level?: 'L' | 'M' | 'Q' | 'H'
  shape?: 'square' | 'rounded'
  className?: string
  fgColor?: string
  bgType?: 'color' | 'image' | 'gradient' | 'none'
  bgColor?: string
  image?: string
  dotsOptions?: {
    type?: 'rounded' | 'rounded5' | 'dots' | 'dots5' | '-square' | 'squares'
    color?: string
    size?: number
    padding?: number
  }
  bgOptions?: {
    type?: 'color' | 'image' | 'gradient' | 'none'
    color?: string
    image?: string
    gradient?: any
  }
  qrOptions?: {
    type?: 'Algorithm' | 'algorithm'
    version?: number
    autoVersion?: boolean
    correctionLevel?: 'L' | 'M' | 'Q' | 'H'
    maskPattern?: number
    scale?: number
    width?: number
    height?: number
    colorDark?: string
    colorLight?: string
    oldUri?: boolean
  }
  logo?: string
  logoSize?: number
}

export function QRCodeSVG({ 
  content, 
  size = 200,
  level = 'L',
  shape = 'square',
  className = '',
  fgColor = '#000000',
  bgType = 'color',
  bgColor = '#FFFFFF',
  ...props
}: QRCodeSVGProps) {
  const QRInline = require('qrcode').toSVG

  const defaultOptions = {
    width: size,
    margin: 4,
    color: {
      dark: fgColor,
      light: bgColor
    }
  }

  return (
    <div 
      dangerouslySetInnerHTML={{
        __html: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${content}</svg>`
      }}
      className={className}
    />
  )
}