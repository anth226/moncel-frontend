import { Handler } from "@netlify/functions";

const repoDispatchUrl = "https://api.github.com/repos/moncel/moncel-frontend/dispatches";

const handler: Handler = async () => {
  // Dispatch a 'deploy succeeded' event to github actions
  const response = await fetch(repoDispatchUrl, {
    method: "POST",
    headers: {
      "Accept": "application/vnd.github.v3+json",
      "Authorization": "Basic bWtvby1tb25jZWw6Z2hwX2lBb3lwN0lxUDBzMU8zOU9rSzlWaE9mdUpjNFdUcTMwcTViaQ==",
    },
    body: JSON.stringify({
      "event_type": "deploy_succeeded",
    })
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ response }),
  };
};

export { handler };