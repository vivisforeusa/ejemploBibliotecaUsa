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
    public String actualizar(Libro libro){
        if(buscarLibro(libro.getIsbn()).isPresent()){
            repositorio.save(libro);
            return "Libro modificado exitosamente";
        }else{
            return "El libro a actulaizar no se encontro";
        }
    }

    public String eliminar(String isbn){
        if(buscarLibro(isbn).isPresent()){
            repositorio.deleteById(isbn);
            return "Libro eliminado.";
        }else{
            return "El Libro no se encontro";
        }
    }

    public int total(){
        return repositorio.totalLibros();
    }

    public List<Object> cantAutor(){
        return repositorio.cantAutor();
    }

}
