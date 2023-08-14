import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tláloc | Proveedores | Todo para el campo en Mexicano.',
  description: 'Tláloc es una tienda de comercio electrónico Mexicana que ofrece una amplia gama de productos y servicios agricolas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es_MX">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
