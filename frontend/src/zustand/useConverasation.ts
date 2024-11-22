import {create} from "zustand"

export type ConversationType = {
	id: string;
	fullName: string;
	profilePic: string;
};

export type MessageType = {
	id: string;
	body: string;
	senderId: string;
	createdAt: string;
	shouldShake?: boolean;
};

interface ConversationState{
    selectedConversation:ConversationType | null,
    setSelectedConversation:(conversation:ConversationType | null)=>void,
    messages: MessageType[],
    setMessages: (messages:MessageType[])=>void
}

const useConversation= create<ConversationState>((set)=>({
    selectedConversation: null,
    setSelectedConversation:(conversation)=>set({selectedConversation:conversation}),
    messages:[],
    setMessages:(messages)=>set({messages:messages})
}))

export default useConversation