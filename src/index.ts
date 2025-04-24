import { Effect,  Console } from "effect"
import { get } from "effect/Chunk"


interface User{
    readonly id: number
    readonly name: string
}

const getuser = (userId: number): Effect.Effect<User, Error>=>{

    const UserDatabase: Record<number, User> = {
        1: { id: 1, name: "John Doe" },
        2: { id: 2, name: "Jane Smith" },
        3: { id: 3, name: "Alice Johnson" },
    }

    const user=UserDatabase[userId];
    if(user){
        return Effect.succeed(user)
    }else{
        return Effect.fail(new Error("User not found"));
    }
}

const users= getuser(5);
console.log(users)