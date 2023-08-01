const core = require('@actions/core');
const github = requie('@actions/github');

try{

    const nameToGreet = core.getInput('who-to-greet');
    console.log('Hello $(nameToGreet)!');
    const time = (new Date()).toTimeString();
    core.setOutput('time', time);

    const payload = JSON.stringify(github.context.payload)
    console.log('The event payload: $(payload)');

}catch(error){
    core.setFailed(error.messsage);
}