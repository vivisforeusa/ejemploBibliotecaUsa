package com.prestamos.Biblioteca.Repositorio;

import com.prestamos.Biblioteca.Entidades.Estudiante;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface estudianteRepositorio extends CrudRepository<Estudiante, String> {

}
