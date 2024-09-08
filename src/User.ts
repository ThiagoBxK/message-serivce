class User {
  id: number;
  name: string;
  notify: (message: string) => void;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.notify = (message: string) => console.log(message);
  }
}

export default User;
