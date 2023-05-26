import 'dotenv/config'
const openAIApiKey = process.env.OPENAI_API_KEY
// import { OpenAI } from "langchain/llms/openai";
// import { initializeAgentExecutorWithOptions } from "langchain/agents";
// import { SerpAPI } from "langchain/tools";
// import { Calculator } from "langchain/tools/calculator";

// const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.9 }, { });
// const tools = [
//   new SerpAPI(process.env.SERPAPI_API_KEY, {
//     location: "Austin,Texas,United States",
//     hl: "en",
//     gl: "us",
//   }),
//   new Calculator(),
// ];


// async function run() {
//   try {
//     const executor = await initializeAgentExecutorWithOptions(tools, model, {
//       agentType: "zero-shot-react-description",
//     });
//     console.log("Loaded agent.");
    
//     const input =
//       "Who is Olivia Wilde's boyfriend?" +
//       " What is his current age raised to the 0.23 power?";
//     console.log(`Executing with input "${input}"...`);
    
//     const result = await executor.call({ input });
//     console.log(`Got output ${result.output}`);
//     // const res = await model.call("怎么评价人工智能?");
//     // console.log(res);
//   } catch(_err) {
//     console.error(_err)
//   }
  
// }
// run()


// schema
// import { SystemChatMessage, HumanChatMessage, AIChatMessage, ChatMessage} from 'langchain/schema'
// console.log(new SystemChatMessage('SystemChatMessage'))
// console.log(new HumanChatMessage('HumanChatMessage'))
// console.log(new AIChatMessage('AIChatMessage'))
// console.log(new ChatMessage('AIChatMessage', 'generic'))




// docs
// import { Document } from "langchain/document";
// const docs = new Document({pageContent: 'food', metadata: { source: '1' }})
// console.log(docs)


// Models
// import { ChatOpenAI } from 'langchain/chat_models/openai'
// import { HumanChatMessage } from 'langchain/schema'
// (async () => {
//   const chat = new ChatOpenAI({ 
//     openAIApiKey: process.env.OPENAI_API_KEY,
//     streaming: true, 
//     temperature: 0.8, 
//     modelName: '',
//     callbacks: [{
//       handleLLMNewToken(token: string) {
//         process.stdout.write(token);
//       },
//     }]
//   });
//   console.log(chat)
//   const response = await chat.call([
//     new HumanChatMessage('写一遍2000字的博文，关于vue3, 双向数据绑定，加上代码演示'),
//   ])
//   console.log(response)
// })()

// Embeddings
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { CohereEmbeddings } from "langchain/embeddings/cohere";

(async () => {
  // OPENAI
  try {
    const embeddings = new OpenAIEmbeddings({openAIApiKey})
    // console.log(embeddings)
    // const res = await embeddings.embedQuery('你好中国')
    const res = await embeddings.embedQuery("你好中国");
    console.log('OPENAI', res)

    // const documentRes = await embeddings.embedDocuments(["你好中国", "宝宝", "宝贝"]);
    // console.log('documentRes', documentRes)

  } catch(_err) {
    console.log(_err)
  }
  

  // cohere-ai


  try {
    const embeddings = new CohereEmbeddings({
      apiKey: process.env.COHERE_API_KEY, // In Node.js defaults to process.env.COHERE_API_KEY
    });
    // console.log(embeddings)
    const res = await embeddings.embedQuery("你好中国");
    console.log('COHERE', res)
  } catch(_err) {

  }

  // https://js.langchain.com/docs/modules/models/embeddings/integrations#tensorflowembeddings

})()


