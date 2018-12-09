import { ChatEvent } from '../models/ChatEvent';

export const handleMessageAction = (msgText) => {
  return {
    type: ChatEvent.MESSAGE,
    newMessage: msgText
  }
};
