let id = 1;

const users = []

class User {
    constructor({ id, name, birthday, cpf, description}) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.cpf = cpf
        this.description = description
    }

    static generateId() {
        return id++;
    }

    static pushUser(name, birthday, cpf, description) {
        let newId = User.generateId();

        const newUser = new User({
            id: newId,
            name: name,
            birthday: birthday,
            cpf: cpf,
            description: description
        })
        users.push(newUser)
        alert(`User ${newUser.name} was created!`)
        return newUser;
    }
}

export { User }