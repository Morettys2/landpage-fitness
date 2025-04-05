import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'seuSegredoJWT' // Coloque isso em uma variável de ambiente depois

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ message: "Email e senha são obrigatórios." }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user || user.password !== password) {
      return NextResponse.json({ message: 'Credenciais inválidas' }, { status: 401 })
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      JWT_SECRET,
      { expiresIn: '1h' }
    )

    return NextResponse.json({ token })
  } catch (error) {
    console.error("Erro ao fazer login:", error)
    return NextResponse.json({ message: "Erro interno no servidor." }, { status: 500 })
  }
}
