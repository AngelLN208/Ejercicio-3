package pe.edu.matricula.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pe.edu.matricula.entity.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long> {

}