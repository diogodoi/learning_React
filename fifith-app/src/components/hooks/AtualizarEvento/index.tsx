import { useSetRecoilState } from "recoil"
import { IEvento } from "../../../interfaces/IEvento"
import { listaDeEventosState } from "../../../state/atom"

const useAtualizarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
    return (evento: IEvento) => {
        setListaDeEventos(listaAntiga => {
            const idx = listaAntiga.findIndex(event => event.id === evento.id)
            return [...listaAntiga.slice(0, idx), evento, ...listaAntiga.slice(idx + 1)]
        })
    }

}

export default useAtualizarEvento