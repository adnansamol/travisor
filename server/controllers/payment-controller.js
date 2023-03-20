import { config } from "dotenv";
config();

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const makePayment = async (req, res) => {
  try {
    const session = await stripePaymentGateway(req.body);
    res.status(200).send(session.url);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const stripePaymentGateway = async (product) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: product.p_name,
          },
          unit_amount: product.p_price * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `http://localhost:8000/travelPackage/booking?id=${product._id}`,
    cancel_url: "http://localhost:3000/cancel",
  });

  return session;
};
