const core = require('@actions/core');
const twilio = require('twilio');

async function run() {
  const fromPhoneNumber = core.getInput('fromPhoneNumber');
  const toPhoneNumber = core.getInput('toPhoneNumber');
  const message = core.getInput('message');

  const accountSid =
    core.getInput('TWILIO_ACCOUNT_SID') || process.env.TWILIO_ACCOUNT_SID;
  const apiKey = core.getInput('TWILIO_API_KEY') || process.env.TWILIO_API_KEY;
  const apiSecret =
    core.getInput('TWILIO_API_SECRET') || process.env.TWILIO_API_SECRET;

  console.log('Sending SMS');
  const client = twilio(apiKey, apiSecret, { accountSid: accountSid });
  const { sid } = await client.messages.create({
    from: fromPhoneNumber,
    to: toPhoneNumber,
    body: message,
  });
  console.log('SMS sent!');

  core.setOutput('messageSid', sid);
}

run().catch(err => {
  core.setFailed(err.message);
});
