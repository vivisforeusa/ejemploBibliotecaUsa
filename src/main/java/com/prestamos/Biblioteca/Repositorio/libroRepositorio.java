package com.prestamos.Biblioteca.Repositorio;

import com.prestamos.Biblioteca.Entidades.Libro;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface libroRepositorio extends CrudRepository<Libro, String> {

    List<Libro> findByAutor(String autor);
}
