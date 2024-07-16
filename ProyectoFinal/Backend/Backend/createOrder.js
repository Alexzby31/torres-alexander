const { CLIENT_ID, APP_SECRET } = process.env;

const baseUrl = {
  sandbox: "https://api-m.sandbox.paypal.com",
  production: "https://api-m.paypal.com"
};

async function generateAccessToken() {
    const auth = Buffer.from('AcFaOkIHC_GM9H4NW1BlVAsuwO28h4UzFWUupXakBe0FnTtpXUrw9l33TGZv-woAJKqJMBnWneEUM_d1' + ":" + 'ECnUGY5Z7OpZciNGXpIGJBmdZI_fxFWE3-AVGDTBb8ap1hV1YGdZAsGQcSnRQE57CREnUgzf0lEuhzuN').toString("base64")
    const response = await fetch(`${baseUrl.sandbox}/v1/oauth2/token`, {
      method: "post",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    const data = await response.json();
    return data.access_token;
  }
  
  
  module.exports = async (req, res) => {
    const monto = req.body.monto;
    const lavanderia = req.body.lavanderia;
    console.log(monto);
    const accessToken = await generateAccessToken();
    const url = `${baseUrl.sandbox}/v2/checkout/orders`;
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: monto,
            },
            description: "Solicitud de servicio de lavanderia con "+lavanderia,
          },
        ],
      }),
    });
    const data = await response.json();
    console.log({ data })
    return data;
  };