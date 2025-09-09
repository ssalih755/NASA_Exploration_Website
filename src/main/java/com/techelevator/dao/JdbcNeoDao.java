package com.techelevator.dao;

import com.techelevator.model.Neo;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;
import java.time.LocalDate;

public class JdbcNeoDao implements NeoDao {

    private final JdbcTemplate jdbcTemplate;

    /**
     * Create a new neo DAO with the supplied data source.
     *
     * @param dataSource an SQL data source
     */
    public JdbcNeoDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }


    @Override
    public Neo saveNeo(Neo neo, int userId, LocalDate date) {
        String sql = "INSERT INTO neo(nasa_id, user_id, neo_date, neo_name, hazardous, min_diameter, max_diameter) VALUES " +
                "(?, ?, ?, ? , ?, ?, ?) RETURNING db_id;";
        Integer dbId = jdbcTemplate.queryForObject(sql, int.class,
               neo.getId(), userId, date, neo.getName(), neo.isPotentiallyHazardousAsteroid(),
                neo.getEstimatedDiameter().getMiles().getEstimatedDiameterMin(),
                neo.getEstimatedDiameter().getMiles().getGetEstimatedDiameterMax());
        Neo newNeo = getNeoByDBId(dbId);
        return newNeo;
    }

    @Override
    public Neo getNeoByDBId(int id) {
        return null;
    }
}
