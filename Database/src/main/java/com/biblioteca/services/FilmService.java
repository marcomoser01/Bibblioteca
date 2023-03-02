package com.biblioteca.services;

import java.util.List;
import java.util.Optional;

import com.biblioteca.domains.Film;
import com.biblioteca.repositories.FilmRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class FilmService {

    @Autowired
    FilmRepository filmRepository;

    public FilmService() {

    }

    public Optional<Film> save(Film entity) {
        Film film = filmRepository.save(entity);
        Optional<Film> opt = Optional.ofNullable(film);
        return opt;
    }

    public Optional<Film> update(Film entity) {
        Film film = filmRepository.save(entity);
        Optional<Film> opt = Optional.ofNullable(film);
        return opt;
    }

    public List<Film> getAll() {
        return filmRepository.findAll();
    }

    public Optional<Film> findById(Long id) {
        return filmRepository.findById(id);
    }

    public Optional<Film> delete(Long id) {
        Optional<Film> opt = filmRepository.findById(id);
        if (opt.isPresent()) {
            filmRepository.deleteById(id);
        }
        return opt;
    }

}
