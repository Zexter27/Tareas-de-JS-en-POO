class Nodo{
    constructor(dato){
      this.anterior=null
      this.dato=dato
      this.siguiente=null
    }
}

class listadoble{
    constructor(){
        this.inicio=null
        this.final=null
        this.size=0
    }

    agregar(dato){
        let nuevoNodo=new Nodo(dato)
        if(!this.inicio){
            this.inicio=nuevoNodo
            this.final=nuevoNodo
            this.size++

        }else{
            this.final.siguiente=nuevoNodo
            nuevoNodo.anterior=this.final
            this.final=nuevoNodo
            this.size++
        }
    }

    agregarinicio(dato){
      let nuevoNodo=new Nodo(dato)
      if(!this.inicio){
        this.inicio=nuevoNodo
        this.final=nuevoNodo
        this.size++

    }else{
        this.inicio.anterior=nuevoNodo
        nuevoNodo.siguiente=this.inicio
        this.inicio=nuevoNodo
        this.size++

    }
    }
    agregarfinal(dato){
        let nuevoNodo=new Nodo(dato)
      if(!this.inicio){
        this.inicio=nuevoNodo
        this.final=nuevoNodo
        this.size++

    }else{
        this.final.siguiente=nuevoNodo
        nuevoNodo.anterior=this.final
        this.final=nuevoNodo
        this.size++

    }

    }

    agregarpos(dato,pos){
        let nuevoNodo=new Nodo(dato)
        if(pos<1||pos>this.size){
            console.log("posicion invalida")
            return
        }else{
            if(pos==1){
                this.agregarinicio(dato)
            }else if(pos==this.size){
                this.agregarfinal(dato)
            }else{

                let aux=this.inicio
                let index=1
                while(index<pos){
                    aux=aux.siguiente
                    index++
                }
                nuevoNodo.anterior=aux.anterior
                nuevoNodo.siguiente=aux
                aux.anterior.siguiente=nuevoNodo
                aux.anterior=nuevoNodo
            }
            this.size++
        }

    }

    eliminarpos(pos){
        if(pos<1||pos>this.size){
            console.log("posicion invalida")
            return
        }else{
            if(pos==1){
                if(!this.final){
                    console.log("la lista esta vacia")
                }else if( this.inicio==this.final){
                    this.inicio=null
                    this.final=null
                }else{
                     this.inicio=this.inicio.siguiente
                     this.inicio.anterior=null                     
                      

                }
            }else if(pos==this.size){
                if(!this.final){
                    console.log("la lista esta vacia")
                }else if( this.inicio==this.final){
                    this.inicio=null
                    this.final=null
                }else{
                     this.final=this.final.anterior
                     this.final.siguiente=null             
                      

                }
                
            }else{

                let aux=this.inicio
                let index=1
                while(index<pos){
                    aux=aux.siguiente
                    index++
                }
                  
                let antes=aux.anterior
                let desp=aux.siguiente
                antes.siguiente=desp
                desp.anterior=antes
            }
            this.size--
        }
        

    }
}


let nuevaLista=new listadoble()
nuevaLista.agregar(10)
nuevaLista.agregar(20)
nuevaLista.agregar(30)
nuevaLista.eliminarpos(2)


console.log(nuevaLista)
