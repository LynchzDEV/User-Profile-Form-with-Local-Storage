export class User {
  static runningId = 1;

  static setRunningId(loadingId) {
    User.runningId = loadingId;
  }

  constructor(username, email, age) {
    this.id = User.runningId++;
    this.username = username;
    this.email = email;
    this.age = age;
  }

  getUserInfo() {
    const infoArr = [];
    infoArr.push(this.id);
    infoArr.push(this.username);
    infoArr.push(this.email);
    infoArr.push(this.age);
    return infoArr;
  }
}
