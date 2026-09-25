import Conversation from "../model/conversations.model";
import Message from "../model/message.model";

export const createConversation = async (req, res) => {
    try { 
        const userId = req.headers["x-user-id"];
        console.log("userId : ",userId)
        const conversation = await Conversation.create({
            userId: userId,
        });
        return res.status(200).json(conversation);
    }
    catch (e) {
        return res.status(500).json({ message: "Create conversation error", e });
    }
}

export const getConversation = async (req, res) => {
    try { 
        const userId = req.headers["x-user-id"];
        const conversation = await Conversation.find({
            userId: userId,
        }).sort({updatedAt:-1})
        return res.status(200).json(conversation);
    }
    catch (e) {
        return res.status(500).json({ message: " Get conversation error", e });
    }
}

export const updateConversation = async (req, res) => {
    try { 
        const {id,title} = req.body
        const conversation = await Conversation.findByIdAndUpdate(id,
            {title}
        );
        return res.status(200).json(conversation);
    }
    catch (e) {
        return res.status(500).json({ message: " updatte conversation error", e });
    }
}

export const getMessages = async (req, res) => {
    try { 
        const { conversationId } = req.body;
        const messages = await Message.find({
            conversationId
        }).sort({createdAt:-1})
        return res.status(200).json(messages);
    }
    catch (e) {
        return res.status(500).json({ message: " Get messages error", e });
    }
}

export const saveMessage = async (req, res) => {
    try { 
        const { conversationId, role, content } = req.body;
        const message = await Message.create({
            conversationId,
            content,
            role,
        })
        return res.status(200).json(message);
         
    }
    catch (e) {
        return res.status(500).json({ message: "save message error", e });
    }
}