import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const SECRET_KEY = 'minha_chave_secreta' // ⚠️ No real, use .env

export async function GET(req: NextRequest) {
  const token = req.headers.get('authorization')?.replace('Bearer ', '')

  if (!token) {
    return NextResponse.json({ message: 'Token ausente' }, { status: 401 })
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY)
    return NextResponse.json({ message: 'Acesso autorizado', user: decoded })
  } catch (err) {
    return NextResponse.json({ message: 'Token inválido' }, { status: 401 })
  }
}
