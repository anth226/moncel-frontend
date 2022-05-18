import { Handler } from "@netlify/functions";
import axios from 'axios';

const GITHUB_ACTION_EVENT_TYPE = "icx_deploy_succeeded";
const repoDispatchUrl = "https://api.github.com/repos/moncel/moncel-frontend/dispatches";

if(process.env.GH_REPO_ACCESS_HEADER === undefined) throw Error("Environment variable GH_REPO_ACCESS_HEADER not defined; function will not be able to see private repo");
if(process.env.PERCY_TOKEN === undefined) throw Error("Required environment variables are missing");
const headers = {
    "Accept": "application/vnd.github.v3+json",
    "Authorization": process.env.GH_REPO_ACCESS_HEADER || "",
};
const body = {"event_type": GITHUB_ACTION_EVENT_TYPE, "client_payload": { "percy_token": process.env.PERCY_TOKEN } };

const handler: Handler = async () => {
  const response = await axios.post(repoDispatchUrl, body, { headers });
  console.log(response.status, response.statusText);

  return {
    statusCode: 200,
  };
};

export { handler };
