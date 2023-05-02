export class Catservice{

    static BASE_URL = 'https://catfact.ninja/fact?max_length=500';

    static getFact(){
        return fetch(this.BASE_URL)
            .then(resp => resp.json()).then(obj=> {return obj})
    }


}