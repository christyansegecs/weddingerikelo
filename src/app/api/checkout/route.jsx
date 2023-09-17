
import Stripe from 'stripe'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(request) {

  const apiKey = process.env.STRIPE_KEY
  const stripe = new Stripe(apiKey)

    let data = await request.json();
  let priceId = data.priceId
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3002?success=true`,
    cancel_url: `http://localhost:3002?canceled=true`,
  })

  return NextResponse.json(session.url)
}