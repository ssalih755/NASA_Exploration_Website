package com.techelevator.dao;

import com.techelevator.model.Neo;

import java.time.LocalDate;

public interface NeoDao {

    //CRUD

    //save neo to database
    Neo saveNeo(Neo neo, int userId, LocalDate date);

    //get neo by neo id
    Neo getNeoByDBId(int id);
}
