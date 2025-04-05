import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, password } = body

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Todos os campos são obrigatórios.' }, { status: 400 })
    }

    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json({ message: 'E-mail já cadastrado.' }, { status: 409 })
    }

    await prisma.user.create({
      data: { name, email, password }
    })

    return NextResponse.json({ message: 'Usuário cadastrado com sucesso!' })
  } catch (error) {
    console.error("Erro no registro:", error)
    return NextResponse.json({ message: 'Erro interno no servidor.' }, { status: 500 })
  }
}
