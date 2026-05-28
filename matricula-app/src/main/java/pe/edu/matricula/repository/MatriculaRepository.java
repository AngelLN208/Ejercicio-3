package pe.edu.matricula.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pe.edu.matricula.entity.Matricula;

public interface MatriculaRepository
        extends JpaRepository<Matricula, Long> {

}