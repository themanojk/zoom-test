import React from 'react';
import { ZoomMtg } from '@zoomus/websdk';

const signature = 'YmpwRXBFbWRSY3VHa19oRV9odVNrQS45NjYxOTY3NjYzNi4xNjA3ODc2MzMxMTA3LjEudFFGd1F1emRvY21JVWdpSFNCNGN0Nnh1OHdnTzdyMjVJTjEvNlFuT3pBcz0='

const meetConfig = {
    apiKey: 'bjpEpEmdRcuGk_hE_huSkA',
    meetingNumber: '96619676636',
    leaveUrl: 'http://localhost:3000',
    userName: 'Meeting 3 Host',
    passWord: '8T6FsJ', // if required
    role: 1 // 1 for host; 0 for attendee
};
function Meeting3() {

    const joinMeeting = () => {
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk();
        ZoomMtg.init({
            leaveUrl: meetConfig.leaveUrl,
            isSupportAV: true,
            success: function () {
                ZoomMtg.join({
                    signature: signature,
                    apiKey: meetConfig.apiKey,
                    meetingNumber: meetConfig.meetingNumber,
                    userName: meetConfig.userName,
                    // password optional; set by Host
                    passWord: meetConfig.passWord,
                    error(res) {
                        console.log(res)
                    }
                })
            }
        })
    }

    return (<div>
        <h1>Welcome to the world of Meeting 3!</h1>
        <button onClick={joinMeeting}>meeting 3</button>
    </div>)
}

export default Meeting3; 