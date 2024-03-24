import { Body, Controller } from "@nestjs/common";
import { UserService } from "./user.service";
import { webResponse } from "src/model/web.model";
import { RegisterUserRequest, UserResponse } from "src/model/user.model";

@Controller('/api/users')
export class UserController {
    constructor(private userService: UserService){

    }
    async register(@Body() request: RegisterUserRequest): Promise<webResponse<UserResponse>> {
        const result = await this.userService.register(request);

        return {
            data: result,
            success: true
        };
    }
}