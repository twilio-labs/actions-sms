# Twilio SMS GitHub Action

Send an SMS from GitHub Actions.

## Prerequisites

- A Twilio Account. [Sign up for free](https://www.twilio.com/try-twilio)
- A [Twilio API Key and Secret](https://www.twilio.com/docs/iam/keys/api-key)

## Usage

1. Set up your credentials as secrets in your repository settings using `TWILIO_ACCOUNT_SID`, `TWILIO_API_KEY`, `TWILIO_API_SECRET`

2. Add the following to your workflow

```yml
- name: 'Sending SMS Notification'
  uses: twilio-labs/actions-sms@v1
  with:
    fromPhoneNumber: '+1(234)5678901'
    toPhoneNumber: '+1(234)3334444'
    message: 'Hello from Twilio'
  env:
    TWILIO_ACCOUNT_SID: ${{ secrets.TWILIO_ACCOUNT_SID }}
    TWILIO_API_KEY: ${{ secrets.TWILIO_API_KEY }}
    TWILIO_API_SECRET: ${{ secrets.TWILIO_API_SECRET }}
```

## Inputs

| Input                                          | Description                                                                                                               |  Required|
| :--------------------------------------- | :------------------------------------------------------------------------------------------------------| :--------------|
|  ```fromPhoneNumber ```  | Phone number in your Twilio account to send the SMS from                  |      True      |
| ```toPhoneNumber ```        | Phone number to send the SMS to	                                                                  |      True     |
| ```message ```	                    | The message you want to send                                                                         |      True     |
|  ```TWILIO_ACCOUNT_SID ```  | A Twilio Account SID. Can alternatively be stored in environment |      True     |
| ```TWILIO_API_KEY ```        |  A Twilio API Secret. Can alternatively be stored in environment          |      True     |
| ```TWILIO_API_SECRET ```	   | A Twilio API Secret. Can alternatively be stored in environment       |      True     |



## Outputs

| Output                                          | Description                                                   
| :--------------------------------------- | :------------------------------------------------------------------------------------------------------| 
|  ```messageSid ```  | The SID of the [message resource](https://www.twilio.com/docs/sms/api/message-resource#message-properties) associated with the SMS sent.  | 



## Contributing

## Third Party Licenses

This GitHub Action uses a couple of Node.js modules to work.

License and other copyright information for each module are included in the release branch of each action version under `node_modules/{module}`.

More information for each package can be found at `https://www.npmjs.com/package/{package}`

## License

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
