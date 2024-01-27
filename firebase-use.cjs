const { exec } = require('child_process')

const envMapping = {
    staging: 'staging',
    production: 'default'
}

token = process.env.FIREBASE_LOGIN_TOKEN
deployEnv = process.env.DEPLOY_ENV

console.log({ deployEnv })

const cmd = `firebase use ${envMapping[deployEnv]} --token ${token}`

exec(cmd, (error, stdout, stderr) => {

    console.log(cmd)

    if (error) {
        console.error(`error: ${error.message}`)
        return
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`)
        return
    }
    console.log(stdout)
})