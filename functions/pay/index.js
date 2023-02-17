module.exports.paymentRequest = (request, response, stripeClient) => {
  const { token, amount, name } = JSON.parse(request.body);
  const getPayment = async () => {
    try {
      const paymentIntent = await stripeClient.paymentIntents.create({
        amount,
        currency: "usd",
        payment_method_types: ["card"],
        payment_method_data: {
          type: "card",
          card: {
            token,
          },
        },
        confirm: true,
      });
      response.json(paymentIntent);
    } catch (error) {
      response.status(400);
      response.send(error);
    }
  };
  getPayment()
};
