export class User{
    constructor(name, email, password){
        this.name = name
        this.email = email
        this.senha = password
    }

    #checkPassword(password1, password2){
        if(password1 === password2){
            return true
        }
        else{
            return false
        }
    }

    list(){

    }

    checkUser(){

    }

    create(name = this.name, email = this.email, password1, password2){
        this.#checkPassword(password1, password2)

    }

    update(){

    }

    delete(){

    }
}