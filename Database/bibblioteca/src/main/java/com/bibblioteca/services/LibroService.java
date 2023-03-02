package com.bibblioteca.services;

import java.util.List;
import java.util.Optional;

import com.bibblioteca.domains.Libro;
import com.bibblioteca.repositories.LibroRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class LibroService {
    @Autowired
    LibroRepository libroRepository;

    public LibroService() {

    }

    public Optional<Libro> save(Libro entity) {
        Libro libro = libroRepository.save(entity);
        Optional<Libro> opt = Optional.ofNullable(libro);
        return opt;
    }

    public Optional<Libro> update(Libro entity) {
        Libro libro = libroRepository.save(entity);
        Optional<Libro> opt = Optional.ofNullable(libro);
        return opt;
    }

    public List<Libro> getAll() {
        return libroRepository.findAll();
    }

    public Optional<Libro> findById(Long id) {
        return libroRepository.findById(id);
    }

    public Optional<Libro> delete(Long id) {
        Optional<Libro> opt = libroRepository.findById(id);
        if (opt.isPresent()) {
            libroRepository.deleteById(id);
        }
        return opt;
    }

}
