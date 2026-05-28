package pe.edu.matricula.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import pe.edu.matricula.entity.Curso;
import pe.edu.matricula.repository.CursoRepository;

import pe.edu.matricula.entity.Matricula;

import pe.edu.matricula.repository.MatriculaRepository;
import pe.edu.matricula.service.CursoService; // 👈 IMPORT CORRECTO

@RestController
@RequestMapping("/api/matriculas")
@CrossOrigin("*")
public class MatriculaController {

    @Autowired
    private MatriculaRepository repository;

    @GetMapping
    public List<Matricula> listar() {
        return repository.findAll();
    }

    @Autowired
    private CursoRepository cursoRepository;

    @PostMapping
    public Matricula guardar(@RequestBody Matricula matricula) {

        if (matricula.getCursoId() == null || matricula.getCursoId() == 0) {
            throw new RuntimeException("CursoId inválido");
        }

        Curso curso = cursoRepository.findById(matricula.getCursoId())
                .orElseThrow(() -> new RuntimeException("Curso no encontrado"));

        curso.setVacantes(curso.getVacantes() - 1);
        cursoRepository.save(curso);

        return repository.save(matricula);
    }
}