export class Catservice{

    static BASE_URL = 'https://catfact.ninja/fact?max_length=500';

    static getFact(){
        return fetch(this.BASE_URL)
            .then(resp => resp.json());
    }

    static get5Facts(){

    }

}


export class Catserviceprof{
    static getfacts(){
        return fetch('https://catfact.ninja/facts')
        .then(resp => resp.json())
        .then(data=> this.elaborateData(data));
    }

    static elaborateData(obj){
        const facts= obj.data;
        //const first6 = facts.filter((f, i) => i < 6);
        const first6=this.getFirst6(facts)
        //console.log('first6',first6);
        console.log(first6);
        return first6;
    }

    static getFirst6(array){
        const tempArray=[];
        for (let i = 0; i < array.length && i<6; i++) {
            const element = array[i];
            tempArray.push(element.fact);            
        }
        return tempArray;
    }
}