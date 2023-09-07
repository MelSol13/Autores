//useState: Me permite crear variables que si cambian, se ve reflejado el cambio en mi componente
//useEffect: Ejecuta una funcion ANTES de que se monte el componente(por ejemplo llamar la lista de los autores)
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const TodosAutores = () => {
    const [autores, setAutores] = useState([]);

    //antes de que se monte el componente, llamamos a la ruta de la api que me regresa la lista de autores
    useEffect(()=>{
        axios.get("http://localhost:8000/api/autores")
        .then(res=> setAutores(res.data))
        .catch(err=> console.log(err));
    }, [])

    return(
        <div>
            <Link to="/nuevo" className="btn btn-success">Nuevo Autor</Link>
            <table className="table table-hover"></table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Libros</th>
                        <th>Cuentos</th>
                        <th>Artículos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        autores.map((autor, index)=>(
                            <tr key={index}>
                                <td>{autor.nombre}</td>
                                <td>
                                    <img src={autor.imagen} alt="autor" className="img-fluid"/>
                                </td>
                                <td>
                                    {
                                        autor.libros ? <span className="text-success">SI</span> : <span className="text-danger">NO</span>
                                    }
                                </td>
                                <td>
                                    {
                                        autor.cuentos ? <span className="text-success">SI</span> : <span className="text-danger">NO</span>
                                    }
                                </td>
                                <td>
                                    {
                                        autor.articulos ? <span className="text-success">SI</span> : <span className="text-danger">NO</span>
                                    }
                                </td>
                                <td></td>
                            </tr>
                        ))
                    }
                </tbody>
        </div>
    )
}

export default TodosAutores;