export function Completado() {
    return (
        <span className="badge badge-pill bg-success">Completado</span>
    )
}
  
export function Pendiente() {
    return (
        <span className="badge badge-pill" style={{backgroundColor: '#83f28f'}}>Pendiente</span>
    )
}

export function Incompleto() {
    return (
        <span className="badge badge-pill bg-danger">Incompleto</span>
    )
}