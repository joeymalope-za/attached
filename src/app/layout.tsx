import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin-ext'],
})

export const metadata = {
  title: 'Find Your Attachment Style 🖇️',
  description: 'Our App is a user-friendly online platform designed to help you identify and understand your unique attachment style. Through a series of carefully crafted questions, it provides personalized insights into your emotional patterns in relationships. Discover your attachment style with Attachment Compass and take a step towards healthier relationships and improved emotional well-being.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
