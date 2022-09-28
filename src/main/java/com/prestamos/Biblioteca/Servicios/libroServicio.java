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

    public Libro buscarLibro(String isbn){
        return repositorio.findById(isbn).get();
    }

    /*public List<Libro> porAutor(String autor){
        return repositorio.fin
    }*/

}
