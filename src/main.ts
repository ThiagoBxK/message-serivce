import ChatService from "./ChatService";
import User from "./User";

const chatService = new ChatService();

const userA = new User(1, "Sofia");
const userB = new User(2, "Michaela");
const userC = new User(2, "Parker");

chatService.subscribe("Conversas 1", {
  ...userA,
  notify: userA.notify,
});

chatService.subscribe("Conversas 1", {
  ...userB,
  notify: userB.notify,
});

chatService.notify(
  "Conversas 1",
  {
    ...userA,
    notify: userA.notify,
  },
  "Olá"
);

chatService.unsubscribe("Conversas 1", {
  ...userA,
  notify: userA.notify,
});

chatService.subscribe("Conversas 2", {
  ...userC,
  notify: userC.notify,
});

chatService.subscribe("Conversas 2", {
  ...userA,
  notify: userA.notify,
});
