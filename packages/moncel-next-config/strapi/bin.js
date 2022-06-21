const { exec } = require("child_process");

exec(`${__dirname}/../node_modules/.bin/graphql-codegen --config codegen.yml`, (error, stdout, stderr) => {
    if (error) {
        console.error(error.message);
    }
    if (stderr) {
        console.error(stderr);
    }
    console.log(stdout);
});
