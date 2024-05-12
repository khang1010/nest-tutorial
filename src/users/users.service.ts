import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN",
        }
    ]

    findAll(role?: "ADMIN" | "ENGINEER" | "INTERN") {
        if (role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users;
    }

    findOne(id: number) {
        return this.users.find(user => user.id === id)
    }

    create(user: { name: string, email: string, role: "ADMIN" | "ENGINEER" | "INTERN" }) {
        const highestId = this.users.sort((a, b) => b.id - a.id)[0].id;
        const newUser = this.users.push({id: highestId + 1, ...user});
        return newUser;
    }

    update(id: number, user: { name?: string, email?: string, role?: "ADMIN" | "ENGINEER" | "INTERN" }) {
        const updatedUsers = this.users.map(value => value.id === id ? {...value, ...user} : value)
        return updatedUsers;
    }

    remove(id: number) {
        const updatedUsers = this.users.filter(value => value.id !== id);
        return updatedUsers;
    }
}
