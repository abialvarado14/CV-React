import React from 'react';
import './Style.css';

class CV extends React.Component{
    render(){
        return(
            <div>
                <h1 centrado>Curriculum Vitae</h1>
                <h2 margen>Datos Personales</h2>
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                 <h5 class="mb-1">Nombre:</h5>
                             </div>
                             <p class="mb-1">Suyapa Abigail Alvarado Calderón</p>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                             <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Fecha de Nacimiento:</h5>
                             </div>
                            <p class="mb-1">14/11/1997</p>
                        </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Dirección:</h5>
                                </div>
                                <p class="mb-1">Res. Las Uvas</p>
                             </a>
                             <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Teléfono:</h5>
                                </div>
                                <p class="mb-1">3201-5859</p>
                             </a>
                             <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Correo:</h5>
                                </div>
                                <p class="mb-1">suyapa.caldex@gmail.com</p>
                             </a>
                             <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Dirección:</h5>
                                </div>
                                <p class="mb-1">Res. Las Uvas</p>
                             </a>
                        </div>

                        <h2 margen>Formación Académica</h2>
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                 <h5 class="mb-1">2013-2015 Instituto Modelo</h5>
                             </div>
                             <p class="mb-1">Técnico en computación Bachiller en Ciencias y Letras</p>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                             <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">2016-Actualidad UNITEC</h5>
                             </div>
                            <p class="mb-1">Estudiante de Ingenieria en Sistemas Computacionales</p>
                        </a>

                        </div>

                        <h2 margen>Formación Académica</h2>
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                 <h5 class="mb-1">2013-2015 Instituto Modelo</h5>
                             </div>
                             <p class="mb-1">Técnico en computación Bachiller en Ciencias y Letras</p>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                             <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">2016-Actualidad UNITEC</h5>
                             </div>
                            <p class="mb-1">Estudiante de Ingenieria en Sistemas Computacionales</p>
                        </a>                        
                        </div>

                        <h2 margen>Habilidades</h2>
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                 <h5 class="mb-1">Java</h5>
                             </div>
                             <p class="mb-1">Avanzado</p>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                             <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">C++</h5>
                             </div>
                            <p class="mb-1">Avanzado</p>
                        </a>                        
                        </div>

                        <h2 margen>Referencias</h2>
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                 <h5 class="mb-1">Prince Sandoval</h5>
                             </div>
                             <p class="mb-1">3232-9090</p>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                             <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Thamy Melgar</h5>
                             </div>
                            <p class="mb-1">8889.-5738 </p>
                        </a>                        
                        </div>
            </div>
        );
    }
}

export default CV;