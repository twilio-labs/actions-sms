"use strict";
const core = require('@actions/core');
const twilio = require('twilio');
async function run() {
    const from = core.getInput('fromPhoneNumber') || process.env.FROM_PHONE_NUMBER;
    const to = core.getInput('toPhoneNumber') || process.env.TO_PHONE_NUMBER;
    const message = core.getInput('messageToSend') || process.env.MESSAGE_TO_SEND;
    const accountSid = core.getInput('TWILIO_ACCOUNT_SID') || process.env.TWILIO_ACCOUNT_SID;
    const authToken = core.getInput('TWILIO_AUTH_TOKEN') || process.env.TWILIO_AUTH_TOKEN;
    core.debug('Authenticating with Twilio');
    const client = twilio(accountSid, authToken);
    core.debug('Attempting to send SMS!');
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
        return await run(); //@ts-ignore
    }
    catch ({ message }) {
        core.error('Failed to send message', message);
        core.setFailed(message);
    }
}
module.exports = execute;
execute();
