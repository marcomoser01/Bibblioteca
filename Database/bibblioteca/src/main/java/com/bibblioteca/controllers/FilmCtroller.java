package com.bibblioteca.controllers;

import java.util.List;

import com.bibblioteca.domains.Film;
import com.bibblioteca.services.FilmService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/film", produces = "application/json")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT }, maxAge = 3600)
public class FilmCtroller {

    // @Autowired
    FilmService filmService;

    public FilmCtroller(FilmService filmService) {
        this.filmService = filmService;
    }

    @GetMapping("")
    public ResponseEntity<List<Film>> list() {
        return new ResponseEntity<List<Film>>(filmService.getAll(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Film> add(@RequestBody Film entity) {
        if (filmService.save(entity).isPresent())
            return new ResponseEntity<Film>(entity, HttpStatus.CREATED);
        else
            return new ResponseEntity<Film>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("")
    public ResponseEntity<Film> update(@RequestBody Film entity) {
        if (filmService.save(entity).isPresent())
            return new ResponseEntity<Film>(entity, HttpStatus.CREATED);
        else
            return new ResponseEntity<Film>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Film> delete(@PathVariable Long id) {
        if (filmService.delete(id).isPresent())
            return new ResponseEntity<Film>(HttpStatus.OK);
        else
            return new ResponseEntity<Film>(HttpStatus.NOT_FOUND);
    }

}
