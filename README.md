# Twilio SMS GitHub Action

Send an SMS from GitHub Actions.

## Prerequisites

- A Twilio Account. [Sign up for free](https://www.twilio.com/try-twilio)
- A [Twilio API Key and Secret](https://www.twilio.com/docs/iam/keys/api-key)

## Usage

1. Set up your credentials as secrets in your repository settings using `TWILIO_ACCOUNT_SID`, `TWILIO_API_KEY`, `TWILIO_API_SECRET`

2. Add the following to your workflow

```yml
name: Twilio Sned
on:
  workflow_dispatch: # allows you to manually trigger the workflow
  schedule: # runs on a cron, nightly
    - cron: 0 0 * * * 
env:
    TWILIO_ACCOUNT_SID: ${{ secrets.TWILIO_ACCOUNT_SID }}
    TWILIO_API_KEY: ${{ secrets.TWILIO_API_KEY }}
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
          fromPhoneNumber: '+12345678900' # alternatively, use a Repository Secret
          toPhoneNumber: '+12345678900' # alternatively, use a Repository Secret
          message: 'Hello from Twilio'
```

## Inputs

### `fromPhoneNumber`

**Required** Phone number in your Twilio account to send the SMS from

### `toPhoneNumber`

**Required** Phone number to send the SMS to

### `message`

**Required** The message you want to send

### `TWILIO_ACCOUNT_SID`

A Twilio Account SID. Can alternatively be stored in environment

### `TWILIO_API_KEY`

A Twilio API Key. Can alternatively be stored in environment

### `TWILIO_API_SECRET`

A Twilio API Secret. Can alternatively be stored in environment

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
