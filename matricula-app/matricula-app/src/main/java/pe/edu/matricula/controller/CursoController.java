package pe.edu.matricula.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.edu.matricula.entity.Curso;
import pe.edu.matricula.repository.CursoRepository;

@RestController
@RequestMapping("/api/cursos")
@CrossOrigin("https://ejercicio-3-two.vercel.app")
public class CursoController {

    @Autowired
    private CursoRepository repository;

    @GetMapping
    public List<Curso> listarCursos() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Curso obtenerCurso(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }
}