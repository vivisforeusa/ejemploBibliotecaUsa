package com.prestamos.Biblioteca.Controlador;

import com.prestamos.Biblioteca.Entidades.Libro;
import com.prestamos.Biblioteca.Servicios.libroServicio;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = "*")
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
    public Optional<Libro> buscarUno(@PathVariable("codigo") String isbn){
        return servicio.buscarLibro(isbn);
    }

    @GetMapping("/BuscarAutor/{autor}")
    public List<Libro> porAutor(@PathVariable("autor") String autor){
        return servicio.porAutor(autor);
    }

    @PostMapping("/InsertarLibro")
    public String agregarLibro(@RequestBody Libro libro){
      return servicio.agregarLibro(libro);
    }
}
