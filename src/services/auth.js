export function Signin(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'ALeKk02G0qQyeFUIPxUx1xiaaCNsi_e2Yew',
                user: {
                    name: 'Thiago Bueno',
                    email: 'thiago@nerdetcetera.com'
                }
            })
        }, 2000);
    })
}