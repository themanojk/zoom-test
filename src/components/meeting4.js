import React from 'react';
import { ZoomMtg } from '@zoomus/websdk';

const signature = 'YmpwRXBFbWRSY3VHa19oRV9odVNrQS45OTMwMTE5NzQ5OC4xNjA3ODc1MzQ2NDA2LjEuYjJZKzhGU3FGY1R4bUg5RU1QejN3eXNiOVVjTUx0eVN0eGNUVTJWM1o0MD0='

const meetConfig = {
    apiKey: 'bjpEpEmdRcuGk_hE_huSkA',
    meetingNumber: '99301197498',
    leaveUrl: 'http://localhost:3000',
    userName: 'Meeting 4 Host',
    passWord: 'mRx24T', // if required
    role: 1 // 1 for host; 0 for attendee
};
function Meeting4() {

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
        <h1>Welcome to the world of Meeting 4!</h1>
        <button onClick={joinMeeting}>meeting 4</button>
    </div>)
}

export default Meeting4; 