
import Stripe from 'stripe'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(request) {

  const apiKey = process.env.STRIPE_KEY
  const stripe = new Stripe(apiKey)

  try {
    const { lineItems } = await request.json();

    if (!lineItems || lineItems.length === 0) {
      return NextResponse.error('Invalid request', { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `http://localhost:3000?success=true`,
      cancel_url: `http://localhost:3000?canceled=true`,
    });

    return NextResponse.json(session.url);
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.error('Internal Server Error', { status: 500 });
  }
}
