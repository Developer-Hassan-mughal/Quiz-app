"use client"
import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { store } from "@/store/store"
import { Provider } from "react-redux"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Provider store={store}>
          {children}
        </Provider>
        </body>
    </html>
  )
}
