import { ChatEvent } from '../models/ChatEvent';

export const leaveUserAction = (userName) => {
    return {
        type: ChatEvent.LEAVE,
        userName: userName
    }
};