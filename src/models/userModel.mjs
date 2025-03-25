export default class User{
    constructor(name, email, password){
        this.name = name
        this.email = email
        this.password = password
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
        return "A lista inteira aqui"
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