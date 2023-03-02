package com.bibblioteca.domains;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "libri") // se si specifica solo @Entity con name vale anche per table in db
@Data
@Table(name = "libri")
@AllArgsConstructor
@NoArgsConstructor
public class Libro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "titolo", nullable = false)
    String titolo;

    @Column(name = "autore")
    String autore;

    @Column(name = "prezzo_di_copertina", precision = 19, scale = 4)
    BigDecimal prezzoCopertina;

    @Column(name = "prenotato", nullable = false)
    Boolean prenotato;
}
