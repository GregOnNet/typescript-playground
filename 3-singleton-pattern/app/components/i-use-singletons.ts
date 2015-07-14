import singleton = require('./service-as-singleton');

export class User {

    score: singleton.Score;

    constructor() {

      this.score = singleton.Score.getInstance();
    }

    act(): void {

      this.score.addPoints(2);
      console.info(this.score.score);
    }
}
