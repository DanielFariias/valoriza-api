import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";


class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, name, admin } = request.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({ email, name, isAdmin: admin })

    return response.json(user)
  }
}

export { CreateUserController }