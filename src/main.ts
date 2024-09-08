import ChatService from "./ChatService";
import User from "./User";

const chatService = new ChatService();

const userA = new User(1, "Sofia");
const userB = new User(2, "Michaela");
const userC = new User(2, "Parker");

chatService.subscribe("Conversas 1", userA);
chatService.subscribe("Conversas 1", userB);
chatService.unsubscribe("Conversas 1", userA);
chatService.subscribe("Conversas 2", userC);
chatService.subscribe("Conversas 2", userA);
