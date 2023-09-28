const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const getResponse = async () => {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Hello world",
  });
  console.log(completion);
};

getResponse();
