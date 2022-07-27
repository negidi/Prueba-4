function listado(prop) {
    return (
        <tbody className="table-group-divider">
            {prop.resultados.map((elemento) =>
                <tr>
                    <th> {elemento.elCodigo} </th>
                    <td> {elemento.elNombre} </td>
                    <td> {elemento.laDescripcion} </td>
                    <td> $ {elemento.elPrecio}</td>
                    <td> {elemento.laCantidad}</td>
                    <td> $ {elemento.elTotal}</td>
                    <td> $ {elemento.elTotalDescuento}</td>
                </tr>
            )
            }
        </tbody >
    );
}
export default listado;