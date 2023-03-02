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

@Entity(name = "film")
@Data
@Table(name = "film")
@AllArgsConstructor
@NoArgsConstructor
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "titolo", nullable = false) // ,unique = true)
    String titolo;

    @Column(name = "autore")
    String autore;

    @Column(name = "prezzo", precision = 19, scale = 4)
    BigDecimal prezzo;

    @Column(name = "durata")
    String durata;

    @Column(name = "oscar")
    String number;

    @Column(name = "prenotato", nullable = false)
    Boolean prenotato;

}
