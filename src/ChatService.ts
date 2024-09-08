interface IUser {
  id: number;
  name: string;
  notify: (message: string) => void;
}

interface IChannel {
  name: string;
  clients: Array<IUser>;
}

class ChatService {
  private channels: Map<string, IChannel>;

  constructor() {
    this.channels = new Map();
  }

  subscribe(channelName: string, subscriber: IUser) {
    if (!this.channels.has(channelName)) {
      this.channels.set(channelName, {
        name: channelName,
        clients: [],
      });
    }

    this.channels.get(channelName)?.clients.push(subscriber) &&
      this.notify(
        channelName,
        subscriber,
        `${subscriber.name} entrou no chat ${channelName}`
      );
  }

  unsubscribe(channelName: string, subscriber: IUser) {
    const channel = this.channels.get(channelName);

    if (channel?.clients) {
      channel.clients = channel.clients.filter(
        (client) => client.id !== subscriber.id
      );

      this.notify(
        channelName,
        subscriber,
        `${subscriber.name} saiu do chat ${channelName}`
      );
    }
  }

  notify(channelName: string, subscriber: IUser, message: string) {
    this.channels.get(channelName)?.clients.forEach((client) => {
      client.notify(
        `Mensagem para: (${client.name}): ${message} enviada por ${subscriber.name}`
      );
    });
  }
}

export default ChatService;
