// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6o0m15s3djrvnp13j5q6mdihcm",     // CognitoClientID
  "api_base_url": "https://szpxn4dm4b.execute-api.ap-southeast-2.amazonaws.com/test",                                     // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-sample-lambda-app.auth.ap-southeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d18lcqk93w9ivj.amplifyapp.com"                                      // AmplifyURL
};

export default config;
