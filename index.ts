import Bot from './src/index';
import { config } from 'dotenv';

config()

const bot = new Bot()

bot.initialise()
