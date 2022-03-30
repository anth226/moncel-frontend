### This directory houses netlify serverless functions

https://docs.netlify.com/functions/overview/

### Configure Github Actions to respond to a "repository dispatch" event from the Github API

https://docs.github.com/en/rest/reference/repos#create-a-repository-dispatch-event

### Authorize Github API requests to ensure access to the repository/actions

https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api#authentication

TL;DR the authorization header is the base64 encoded string "Basic $USERNAME:$PERSONAL_ACCESS_TOKEN"

https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

