class hashTable{
    constructor(){
        this.length = 0 
        this.table = []
    }
    #generahashval(key){
        return key %100
    }
    set(a){
        let hashvalue = this.#generahashval(a)
        if (this.table[hashvalue] === undefined){
            this.table[hashvalue] = [a]
        }
        else{
            this.table[hashvalue].push(a)
        }
        this.length++
    }
    get(a){
        let hashvalue = this.#generahashval(a)
        if (this.table[hashvalue] !== undefined){
            let arr = this.table[hashvalue]
            for(let i = 0 ; i <arr.length ;i++){
                if (a === arr[i]) return true
            }
            return false
        }
        return false
    }
}
let t = new hashTable()
t.set(33)
t.set(455)
t.set(99)
t.set(999)
console.log(t.length)
console.log(t.get(9))