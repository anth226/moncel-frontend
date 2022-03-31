import { Handler } from "@netlify/functions";
import { executionAsyncResource } from "async_hooks";
import axios from 'axios';

const GITHUB_ACTION_EVENT_TYPE = "netlify_deploy_succeeded";
const repoDispatchUrl = "https://api.github.com/repos/moncel/moncel-frontend/dispatches";
const headers = {
    "Accept": "application/vnd.github.v3+json",
    "Authorization": "Basic bWtvby1tb25jZWw6Z2hwX2lBb3lwN0lxUDBzMU8zOU9rSzlWaE9mdUpjNFdUcTMwcTViaQ==",
};
const body = {"event_type": GITHUB_ACTION_EVENT_TYPE};

const handler: Handler = async () => {
  const response = await axios.post(repoDispatchUrl, body, { headers });
  return {
    statusCode: 200,
    body: JSON.stringify({ response }),
  };
};

export { handler };
