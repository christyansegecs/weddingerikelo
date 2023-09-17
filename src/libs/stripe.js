
const Stripe = require('stripe')

const apiKey = process.env.API_KEY_STRIPE

export const stripe = new Stripe(apiKey, {
  apiVersion: "2023-08-16",
  appInfo: {
    name: 'Ignite Shop',
  }
})