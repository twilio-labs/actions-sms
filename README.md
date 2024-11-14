# Twilio SMS GitHub Action

Send an SMS from GitHub Actions.

## Prerequisites

- A Twilio Account. [Sign up for free](https://www.twilio.com/try-twilio)
- A [Twilio Auth Token](https://www.twilio.com/docs/iam/api/authtoken)
- A [Registered Phone Number](https://www.twilio.com/docs/phone-numbers/regulatory/faq) 

## Usage

1. Set up your credentials as secrets in your repository settings using `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TO_PHONE_NUMBER`, `FROM_PHONE_NUMBER` 

2. Add the following to your workflow

```yml
name: Twilio Send
on:
  workflow_dispatch: # allows you to manually trigger the workflow
  schedule: # runs on a cron, nightly
    - cron: 0 0 * * * 
env:
    TWILIO_ACCOUNT_SID: ${{ secrets.TWILIO_ACCOUNT_SID }}
    TWILIO_AUTH_TOKEN: ${{ secrets.TWILIO_AUTH_TOKEN }}
    TWILIO_API_SECRET: ${{ secrets.TWILIO_API_SECRET }}
permissions:
  contents: read
jobs:
  send:
    runs-on: ubuntu-latest
    steps:
      - name: 'Sending SMS Notification'
        uses: twilio-labs/actions-sms@v1
        with:
          FROM_PHONE_NUMBER: ${{ secrets.FROM_PHONE_NUMBER }} 
          TO_PHONE_NUMBER: ${{ secrets.TO_PHONE_NUMBER }} 
          message: 'Hello from Twilio'
```

## Inputs

### `FROM_PHONE_NUMBER`

**Required** Phone number in your Twilio account to send the SMS from

### `TO_PHONE_NUMBER`

**Required** Phone number to send the SMS to

### `message`

**Required** The message you want to send

### `TWILIO_ACCOUNT_SID`

A Twilio Account SID. Can alternatively be stored in environment

### `TWILIO_AUTH_TOKEN`

A Twilio Auth Token. Can alternatively be stored in environment

## Outputs

### `messageSid`

The SID of the [message resource](https://www.twilio.com/docs/sms/api/message-resource#message-properties) associated with the SMS sent.

## Contributing

## Third Party Licenses

This GitHub Action uses a couple of Node.js modules to work.

License and other copyright information for each module are included in the release branch of each action version under `node_modules/{module}`.

More information for each package can be found at `https://www.npmjs.com/package/{package}`

## License

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
