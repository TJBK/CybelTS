import { Client } from "discord.js";
import { Logger } from './modules/logger';

interface IBot {
  initialise(): Promise<void>;
};

export default class Bot extends Client implements IBot {
  log: any
  constructor() {
    super();
    this.log = new Logger(this);
  };

  public async initialise() {
    try {
      const loginToken: string = await this.login(process.env.TOKEN);
      this.log.info(`Started at ${new Date()} with ${loginToken}`)
    } catch (err) {
      this.log.error(err)
    }
  }
}
