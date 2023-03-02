package com.biblioteca.controllers;

import java.util.List;

import com.biblioteca.domains.Libro;
import com.biblioteca.services.LibroService;

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
@RequestMapping(path = "/api/libri", produces = "application/json")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT }, maxAge = 3600)
public class LibroController {

  // @Autowired
  LibroService libroService;

  public LibroController(LibroService libroService) {
    this.libroService = libroService;
  }

  @GetMapping("")
  public ResponseEntity<List<Libro>> list() {
    return new ResponseEntity<List<Libro>>(libroService.getAll(), HttpStatus.OK);
  }

  @PostMapping("")
  public ResponseEntity<Libro> add(@RequestBody Libro entity) {
    if (libroService.save(entity).isPresent())
      return new ResponseEntity<Libro>(entity, HttpStatus.CREATED);
    else
      return new ResponseEntity<Libro>(HttpStatus.BAD_REQUEST);
  }

  @PutMapping("")
  public ResponseEntity<Libro> update(@RequestBody Libro entity) {
    if (libroService.save(entity).isPresent())
      return new ResponseEntity<Libro>(entity, HttpStatus.CREATED);
    else
      return new ResponseEntity<Libro>(HttpStatus.BAD_REQUEST);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Libro> delete(@PathVariable Long id) {
    if (libroService.delete(id).isPresent())
      return new ResponseEntity<Libro>(HttpStatus.OK);
    else
      return new ResponseEntity<Libro>(HttpStatus.NOT_FOUND);
  }
}
