import { ChatEvent } from '../models/ChatEvent';

export const connectNotifyAction = (newUser) => {
  return {
    type: ChatEvent.OPEN,
    newUser: newUser
  }
};