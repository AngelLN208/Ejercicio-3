package pe.edu.matricula.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.matricula.entity.Curso;
import pe.edu.matricula.repository.CursoRepository;

@Service
public class CursoService {

    @Autowired
    private CursoRepository repository;

    public Curso descontarVacante(Long id) {

        Curso curso = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Curso no encontrado"));

        if (curso.getVacantes() > 0) {
            curso.setVacantes(curso.getVacantes() - 1);
        }

        return repository.save(curso);
    }
}