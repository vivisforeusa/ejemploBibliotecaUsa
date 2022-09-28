package com.prestamos.Biblioteca.Controlador;

import com.prestamos.Biblioteca.Entidades.Libro;
import com.prestamos.Biblioteca.Servicios.libroServicio;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class libroControlador {

    private libroServicio servicio;

    public libroControlador(libroServicio servicio) {
        this.servicio = servicio;
    }

    @GetMapping("/ListarLibros")
    public List<Libro> listar(){
       return servicio.listaLibros();
    }

    @GetMapping("/BuscarLibro/{codigo}")
    public Libro buscarUno(@PathVariable("codigo") String isbn){
        return servicio.buscarLibro(isbn);
    }
}
