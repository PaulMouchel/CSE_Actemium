const { exec } = require('child_process')

token = process.env.FIREBASE_LOGIN_TOKEN

const cmd = `firebase deploy --token ${token}`

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