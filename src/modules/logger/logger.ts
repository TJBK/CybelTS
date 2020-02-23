import ILogger from './interface';
import escapes from './escapes';

export default class Logger implements ILogger {
  client: any;
  constructor(client: any) {
    this.client = client;
  };

  debug(message: string, ...data: any[]) {
    this.send({ type: 'debug', msg: message, data });
  };

  info(message: string, ...data: any[]) {
    this.send({ type: 'debug', msg: message, data });
  };

  warn(message: string, ...data: any[]) {
    this.send({ type: 'debug', msg: message, data });
  }
  ;
  error(message: string, ...data: any[]) {
    this.send({ type: 'debug', msg: message, data });
  };

  send({ type, msg, data }: {
    type: 'debug' | 'info' | 'warn' | 'error';
    msg: string;
    data: any[];
  }) {
    let colour: object
    switch (type) {
      case 'debug':
        colour = {
          markup: escapes.markup.bright,
          foreground: escapes.foreground.cyan
        }
        break;

      default:
        break;
    }
    if (data.length > 0) {
      console[type](`[${this.getCurrentTime()}] ${escapes.markup.bright}${escapes.foreground.yellow}[${type.toUpperCase()}]${escapes.markup.reset} » ${msg} ${data}`);
    }
    else {
      console[type](`[${this.getCurrentTime()}] ${escapes.markup.bright}${escapes.foreground.yellow}[${type.toUpperCase()}]${escapes.markup.reset} » ${msg}`);
    }
  };

  getCurrentTime() {
    const date = new Date();
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };
}
