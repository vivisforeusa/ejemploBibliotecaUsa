package com.prestamos.Biblioteca.Servicios;

import com.prestamos.Biblioteca.Entidades.Libro;
import com.prestamos.Biblioteca.Repositorio.libroRepositorio;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class libroServicio {

    private libroRepositorio repositorio;

    public libroServicio(libroRepositorio repositorio) {
        this.repositorio = repositorio;
    }

    public List<Libro> listaLibros(){
        return (List<Libro>) repositorio.findAll(); //Consultar todos los libros
    }

    public Optional<Libro> buscarLibro(String isbn){
        return repositorio.findById(isbn);
    }

    public List<Libro> porAutor(String autor){
        return repositorio.findByAutor(autor);
    }

    public String agregarLibro(Libro libro){

        if(buscarLibro(libro.getIsbn()).isPresent()){
            return "El Libro Ya Existe....";
        }else{
            repositorio.save(libro);
            return "Libro registrado exitosamente.";
       }
    }

}
