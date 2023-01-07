import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../state/atom";
import { IEvento } from "../interfaces/IEvento";


export const eventosFiltradosState = selector({
    key: 'enventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos)
        const todosOsEventos = get(listaDeEventosState)

        const eventos = todosOsEventos.filter(evento => {
            if (!filtro.data) {
                return true
            }
            // "2023-01-31"
            const ehOMesdoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
            return ehOMesdoDia
        })
        return eventos
    }
})

export const eventosAsync = selector({
    key:'eventosAsync',
    get:async()=>{
        const respostaHttp = await fetch('http://localhost:8080/eventos')
        const eventosJson:IEvento[] = await respostaHttp.json()
        return eventosJson.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim)
        }))
    }
})