import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Producto from './Imagenes/producto.jpg';
import Producto1 from './Imagenes/producto1.jpg';
import Producto2 from './Imagenes/producto2.jpeg';
import Producto3 from './Imagenes/producto3.jpg';
import Producto4 from './Imagenes/producto4.jpg';
import Producto5 from './Imagenes/producto5.jpg';
import Producto6 from './Imagenes/producto6.jpg';

export const Compras = () => {
    return (
        <div> <Header />
            <div className="container mb-1 ">
                <div className="row ">
                    {/* Div con col-4 */}
                    <div className="col-md-3 Con_Compras">
                        <center><h2 className='mt-5'>Categorías</h2></center>
                        <nav className="navbar">
                            {/* Puedes agregar contenido adicional en el col-4 */}
                            <br></br>
                            <ul className='navbar-nav flex-column mt-3'>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#'>Categoría 1</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#'>Categoría 2</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#'>Categoría 3</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* Div con col-8 */}
                    <div className="col-md-9 Con_Productos">
                        <center><h2 className='mt-5'>Productos en Venta</h2></center>
                        {/* Cards para productos */}
                        <div class="row row-cols-1 row-cols-md-3 g-4 mb-3 mt-3">
                            <div class="col">
                                <div class="card h-150">
                                    <img src={Producto} alt="Clínica Veterinaria" className="imagen_Producto" />
                                    <div class="card-body">
                                        <h5 class="card-title">Producto 1</h5>
                                        <p class="card-text">$20.99</p>
                                        <center> <a href="#" class="btn btn-primary">Agregar al Carrito</a></center>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-150">
                                    <img src={Producto1} alt="Clínica Veterinaria" className="imagen_Producto" />
                                    <div class="card-body">
                                        <h5 class="card-title">Producto 1</h5>
                                        <p class="card-text">$20.99</p>
                                        <center> <a href="#" class="btn btn-primary">Agregar al Carrito</a></center>                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-150">
                                    <img src={Producto2} alt="Clínica Veterinaria" className="imagen_Producto" />
                                    <div class="card-body">
                                        <h5 class="card-title">Producto 1</h5>
                                        <p class="card-text">$12.99</p>
                                        <center> <a href="#" class="btn btn-primary">Agregar al Carrito</a></center>                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-150">
                                    <img src={Producto3} alt="Clínica Veterinaria" className="imagen_Producto" />
                                    <div class="card-body">
                                        <h5 class="card-title">Producto 1</h5>
                                        <p class="card-text">$20.99</p>
                                        <center> <a href="#" class="btn btn-primary">Agregar al Carrito</a></center>                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-150">
                                    <img src={Producto4} alt="Clínica Veterinaria" className="imagen_Producto" />
                                    <div class="card-body">
                                        <h5 class="card-title">Producto 1</h5>
                                        <p class="card-text">$20.99</p>
                                        <center> <a href="#" class="btn btn-primary">Agregar al Carrito</a></center>                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-150">
                                    <img src={Producto5} alt="Clínica Veterinaria" className="imagen_Producto" />
                                    <div class="card-body">
                                        <h5 class="card-title">Producto 3</h5>
                                        <p class="card-text">$12.99</p>
                                        <center> <a href="#" class="btn btn-primary">Agregar al Carrito</a></center>                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}
