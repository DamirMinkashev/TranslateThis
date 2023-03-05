import {Module} from "@nestjs/common";
import {TelegrafModule} from "nestjs-telegraf";
import {session} from "telegraf";
import {DatabaseModule} from "./database/database.module";
import {BotUpdate} from "./bot.update";

@Module({
    imports: [
        BotUpdate,
        DatabaseModule,
        TelegrafModule.forRootAsync({
            useFactory: () => ({
                token: process.env.BOT_TOKEN as string,
                middlewares: [session()],
                include: [BotModule],
            }),
        })], 
})
export class BotModule{}
