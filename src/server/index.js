import stripe from "stripe";
import express from "express";
import cors from "cors";

const stripeInstance = stripe("sk_test_51OO0ZwCaFt3tFYFT7lW7sA1nRmvFj1UnlnMoAGHPJha26bmxIj1Uz0qSS7kiBYXjK2oP6fvxggJM0fCVW20vnTR500UlTbAOF3");
const port = 4242 || process.env.PORT;
const app = express();
const domain = "http://localhost:5500"

app.use(
    express.static("public"),
    express.json(),
    cors()
)

app.post("/create-checkout-session", async (req, res) => {
    const session = await stripeInstance.checkout.sessions.create({
        ui_mode: 'embedded',
        line_items: req.body.items,
        discounts: req.body.discounts,
        payment_method_types: ['card'], //'pix', 'paypal', 'boleto'
        mode: 'payment',
        return_url: `${domain}/return?session_id={CHECKOUT_SESSION_ID}`
    }).catch(e => {
        return (e)
    })

    res.send({ clientSecret: session.client_secret });
})

app.get("/session-status", async (req, res) => {
    const session = await stripeInstance.checkout.sessions.retrieve(req.query.session_id);

    res.send({
        status: session.status,
        custumer_email: session.customer_details.email
    });
})

app.listen(port, () => console.log(`app ouvindo na porta ${port}`))