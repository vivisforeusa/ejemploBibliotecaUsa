package com.prestamos.Biblioteca.Entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Estudiante")
public class Estudiante {
    @Id
    @Column(unique = true, length = 50)
    private String documento;
    @Column(nullable = false, length = 50)
    private String nombres;
    @Column(nullable = false, length = 50)
    private String apellidos;
    @Column(nullable = false, length = 100)
    private String direccion;

    public Estudiante() {
    }

    public Estudiante(String documento, String nombres, String apellidos, String direccion) {
        this.documento = documento;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.direccion = direccion;
    }

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    @Override
    public String toString() {
        return "Estudiante{" +
                "documento='" + documento + '\'' +
                ", nombres='" + nombres + '\'' +
                ", apellidos='" + apellidos + '\'' +
                ", direccion='" + direccion + '\'' +
                '}';
    }
}
