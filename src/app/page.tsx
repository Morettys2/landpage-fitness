'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { About } from '../components/about'
import { Footer } from '../components/footer'
import { Hero } from '../components/hero'
import { Services } from '../components/services'
import { Testimonials } from '../components/testimonials'

export default function Home() {
  const [username, setUsername] = useState('')
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      router.push('/login') // Redireciona se não estiver logado
    } else {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        setUsername(payload.username)
      } catch (err) {
        console.error('Token inválido', err)
        router.push('/login') // Redireciona se token for inválido
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  return (
    <main className="relative">
      {/* Header do usuário logado */}
      {username && (
        <div className="bg-green-600 text-white p-3 flex justify-between items-center shadow-md">
          <p className="text-sm">
            🔥 Bem-vindo, <span className="font-semibold">{username}</span>!
          </p>
          <button
            onClick={handleLogout}
            className="bg-white text-green-600 px-3 py-1 rounded-md text-sm font-semibold transition hover:bg-gray-100"
          >
            Sair
          </button>
        </div>
      )}

      {/* Componentes da landing */}
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}
