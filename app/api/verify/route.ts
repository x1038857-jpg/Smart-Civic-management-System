import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const complaintId = searchParams.get('complaintId')

  if (!complaintId) {
    return NextResponse.json(
      { ok: false, message: 'complaintId is required' },
      { status: 400 }
    )
  }

  return NextResponse.json({
    ok: true,
    complaintId,
    url: `https://example.com/evidence/${complaintId}`,
    expiresIn: 600,
  })
}
