export const ChatEvent = {
    MESSAGE: Symbol('NEW_MESSAGE'),
    OPEN: Symbol('CONNECT_SERVER'),
    CLOSE: Symbol('UNCONNECT_SERVER'),
    LEAVE: Symbol('LEAVE_USER')
};