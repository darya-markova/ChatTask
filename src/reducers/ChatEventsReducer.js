import Replic from '../models/Replic';
import { messageService } from '../service/MessageService';
import { ChatEvent } from '../models/ChatEvent';

export const subscribeChatEvents = (state = {isConnect: false, chatMessages: [], offlineUser: null}, action) => {
  switch(action.type) {
    case ChatEvent.MESSAGE:
      const newMessage = Replic.getMessageObject(action.newMessage);
      return {
        ...state,
        chatMessages: [...state.chatMessages, newMessage]
      };
    case ChatEvent.OPEN:
      messageService.joinUserToChat(action.newUser);
      return {
        ...state,
        isConnect: true
      };
      case ChatEvent.LEAVE:
        return {
            ...state,
            offlineUser: action.userName
        };
    case ChatEvent.CLOSE:
      return {
        ...state,
        isConnect: false
      };
    default:
      return state;
  }
};