import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const complaintId = searchParams.get('complaintId')

  return NextResponse.json({
    ok: true,
    complaintId,
    summary: {
      resolved: 42,
      unresolved: 18,
      total: 60,
    },
  })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))

  return NextResponse.json({
    ok: true,
    message: 'Vote recorded successfully',
    complaintId: body.complaintId || null,
    vote: body.vote || 'resolved',
  })
}
