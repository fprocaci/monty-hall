import PortaModel from "../model/porta";

export function criarPortas(qtde: number, portaComPresent: number): PortaModel[] {
    return Array.from({ length: qtde }, (_, i) => {
        const numero = i + 1
        const temPresente = numero === portaComPresent
        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[]{
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === portaModificada.numero
        if(igualAModificada){
            return portaModificada
        }else{
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}


