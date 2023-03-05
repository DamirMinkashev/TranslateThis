import {NestFactory} from "@nestjs/core";
import * as dotenv from 'dotenv';
import {BotModule} from "./bot.module";

async function start() {
    dotenv.config();
    await NestFactory.createApplicationContext(BotModule);

    process.on('unhandledRejection', (reason, promise) => {
        // tslint:disable-next-line: no-console
        console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    });
}

start();
