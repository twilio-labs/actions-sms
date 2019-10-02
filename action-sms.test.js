const core = require("@actions/core");
const twilio = require("twilio");
const run = require("./main.js");

jest.mock("@actions/core");
jest.mock("twilio");

test("Log failures", async () => {
  const errorMessage = "Error from twilio";

  twilio.mockImplementation(() => {
    throw new Error(errorMessage);
  });

  await run();

  expect(core.error.mock.calls).toEqual(
    expect.arrayContaining([["Failed to send message", errorMessage]])
  );

  expect(core.setFailed.mock.calls).toEqual(
    expect.arrayContaining([[errorMessage]])
  );
});

test("Output message sid", async () => {
  const sid = "ID123";

  twilio.mockReturnValue({
    messages: {
      create: () => {
        return { sid };
      }
    }
  });

  await run();

  expect(core.setOutput.mock.calls).toEqual(
    expect.arrayContaining([["messageSid", sid]])
  );
});
