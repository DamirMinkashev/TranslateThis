import {Start, Update} from "nestjs-telegraf";

@Update()
export class BotUpdate {

    @Start()
    async onStart(): Promise<string> {
        return "Hello!";
    }
}
