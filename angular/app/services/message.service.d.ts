interface ChildMsgType {
    msgType: number,
    msgDesc: string
}

interface MsgType {
    parentMsgType: number,
    count: number,
    parentMsgDesc: string,
    childMsgTypes: ChildMsgType[],
    needHandle: boolean
}

interface MessageItem {
    msgId: number,
    msgDesc: string,
    msgTime: string,
    content: string,
    redirectUrl: string,
    msgStatus: number
}

interface MessageService {
    msgType: MsgType[],
    getMsgType(): angular.IPromise<MsgType[]>,
    list(reqParams: {
        msgType: number, 
        needHandle: boolean, 
        condition?: number, 
        page: number, 
        count: number
    }): angular.IPromise<{data: MessageItem[], paging: {total: number}}>
}