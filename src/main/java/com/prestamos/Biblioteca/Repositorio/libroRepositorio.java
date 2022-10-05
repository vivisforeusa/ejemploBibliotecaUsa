package com.prestamos.Biblioteca.Repositorio;

import com.prestamos.Biblioteca.Entidades.Libro;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface libroRepositorio extends CrudRepository<Libro, String> {

    List<Libro> findByAutor(String autor);

    @Query("select count(*) from Libro")
    public int totalLibros();

    @Query("select autor, count(isbn) from Libro group by autor")
    public List<Object> cantAutor();
}
