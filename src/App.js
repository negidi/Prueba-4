import listado from './lista';
import { useState } from 'react';
import './App.css';
import farma from './public/img/farma.png'
import farma1 from './public/img/farma1.png'


function App() {


        const [operacion, setOperacion] = useState([])

        function agregarCompra(event) {
          event.preventDefault();
          const codigo = event.target.txt_codigo.value
          const nombre = event.target.self.nombre.value
          const descripcion = event.target.txt_descripicion.value
          const precio = event.target.txt_precio.value
          const cantidad = event.target.num_cantidad.value
          const total = cantidad * precio
          const totalDescuento = Math.trunc(total * 0.9)

          if (codigo.length < 1 || codigo.length > 4) {
            alert("El codigo debe contener 4 caracteres")
            return false;
          }
          if (nombre == "") {
            alert("Debe ingresar el nombre del producto")
            return false;
          }
          if (descripcion == "") {
            alert("Debe ingresar  descripcion")
            return false;
          }
          if (isNaN(precio)) {
            alert("El precio debe ser ingresado en numeros")
            return false;
          }
          if (isNaN(cantidad)) {
            alert("Debe ingresar una cantidad")
            return false;

          }

          const venta = {
            elCodigo: codigo,
            elNombre: nombre,
            laDescripicion: descripcion,
            elPrecio: precio,
            laCantidad_: cantidad,
            elTotal: total,
            elTotalDescuento: totalDescuento
          }

          setOperacion([...operacion, venta])
          event.target.txt_codigo.value = ''
          event.target.sel_nombre.value = ''
          event.target.txt_descripicion.value = ''
          event.target.txt_precio.value = ''
          event.target.num_cantidad.value = ''
        }
        return (
          <div className="container">
          <header>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                  <h1>Cruz Azul 💙</h1>
                </div>
            </nav>
          </header>
      
          <body>
          <div className="row g-3">
          <div className="col-md-12 col-lg-6">
                <img src={farma} className="img-farma" />
              </div>
              <div className="col-md-12 col-lg-6">
                <img src={farma1} className="img-farma1" />
              </div>
              </div>

              <div className="row g-3">
                <div class="col-xs-12 col-sm-6">
                <h2>Formulario de Ventas 🛒</h2>

              <form onSubmit={agregarCompra}>

                      <label for="txt_codigo">Codigo del producto:</label>
                      <input type="text" class="form-control" name="txt_codigo" id="txt_codigo" placeholder="Ingrese codigo del producto" required/>
                      <label for="txt_nombre">Nombre:</label>
                      <input type="text" class="form-control" name="txt_nombre" id="txt_nombre" placeholder="Ingrese nombre del producto" required/>
                      <label for="txt_precio">Precio:</label> 
                      <input type="text" class="form-control" name="txt_precio" id="txt_precio" placeholder="Ingrese precio del producto" required/>           
                      <label for="txt_cantidad">Cantidad:</label>
                      <input type="text" class="form-control" name="txt_cantidad" id="txt_cantidad" placeholder="Ingrese cantidad del producto" required/>           
                      <label for="txt_descripicion">Descripción:</label> 
                      <input type="text" name="txt_descripicion" id="txt_descripicion" placeholder="Cuentanos que necesitas 😎" className="form-control" />
                
                      <div className="btn-group" role="group" aria-label="Basic example">
                              <input type="submit" className='btn btn-success' value="Agregar al carro" />
                              <input type="reset" className='btn btn-danger' value="Limpiar compra" />
                          </div>

                        </form>
                    </div>
                    </div>
                  
                  <hr />
                  <table className="table table-striped">
                    <thead>
                        <tr>
                          <th scope="col">Codigo</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Descripcion</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Cantidad</th>
                          <th scope="col">Total</th>
                          <th scope="col">Total descuento</th>
                        </tr>
                    </thead>
                    <listado resultados={operacion} />
                  </table>
              </body >
            </div >

            );  
            
  }
export default App;
