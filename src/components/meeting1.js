import React from 'react';
import { ZoomMtg } from '@zoomus/websdk';

const signature = 'YmpwRXBFbWRSY3VHa19oRV9odVNrQS45OTczNTIwNDU5Mi4xNjA3ODc1MTkwMDM4LjEudUhwK3JrL1RKRVJIamRKSzY3Wnd1dVNwVU9vbGRuY3Jsc0ZGbW5DRWUrUT0='

const meetConfig = {
    apiKey: 'bjpEpEmdRcuGk_hE_huSkA',
    meetingNumber: '99735204592',
    leaveUrl: 'http://localhost:3000',
    userName: 'Meeting 1 Host',
    passWord: 'LeQW4b', // if required
    role: 1 // 1 for host; 0 for attendee
};
function Meeting1() {

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
                    userEmail: 'mk76656@gmail.com',
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
        <h1>Welcome to the world of Meeting 1!</h1>
        <button onClick={joinMeeting}>meeting 1</button>
    </div>)
}

export default Meeting1; 