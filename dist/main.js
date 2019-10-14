"use strict";
const core = require('@actions/core');
const twilio = require('twilio');
async function run() {
    const from = core.getInput('fromPhoneNumber');
    const to = core.getInput('toPhoneNumber');
    const message = core.getInput('message');
    const accountSid = core.getInput('TWILIO_ACCOUNT_SID') || process.env.TWILIO_ACCOUNT_SID;
    const apiKey = core.getInput('TWILIO_API_KEY') || process.env.TWILIO_API_KEY;
    const apiSecret = core.getInput('TWILIO_API_SECRET') || process.env.TWILIO_API_SECRET;
    core.debug('Sending SMS');
    const client = twilio(apiKey, apiSecret, { accountSid });
    const resultMessage = await client.messages.create({
        from,
        to,
        body: message,
    });
    core.debug('SMS sent!');
    core.setOutput('messageSid', resultMessage.sid);
    return resultMessage;
}
async function execute() {
    try {
        return await run();
    }
    catch ({ message }) {
        core.error('Failed to send message', message);
        core.setFailed(message);
    }
}
module.exports = execute;
execute();
