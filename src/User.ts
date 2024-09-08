class User {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  notify(message: string) {
    console.log(message);
  }
}

export default User;
