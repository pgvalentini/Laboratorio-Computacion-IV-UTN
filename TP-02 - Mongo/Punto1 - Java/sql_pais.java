import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;

import com.mysql.cj.jdbc.result.ResultSetImpl;

public class sql_pais extends conexion{
    
    private final String SQL_INSERT = "INSERT INTO pais (codigoPais, nombrePais, capitalPais, region, poblacion, latitud, longitud) VALUES (?,?,?,?,?,?,?)";
    private final String SQL_SELECT = "SELECT * FROM pais";
    private final String SQL_UPDATE = "UPDATE pais SET nombrePais=?,capitalPais=?,region=?, poblacion=?,latitud=?,longitud=? WHERE codigoPais=?";

  
      
    public boolean crear(Pais pais) {
        PreparedStatement ps = null;
        Connection con = null;

        try {
            con = (Connection) conexion.conectarse();
            ps = (PreparedStatement) con.prepareStatement(SQL_INSERT);

            ps.setInt(1, pais.getCodigoPais());
            ps.setString(2, pais.getNombrePais());
            ps.setString(3, pais.getCapitalPais());
            ps.setString(4, pais.getRegion());
            ps.setInt(5, pais.getPoblacion());
            ps.setDouble(6, pais.getLatitud());
            ps.setDouble(7, pais.getLongitud());
            
            ps.executeUpdate();
            System.out.println("Agregado con éxito");
            
            return true;
        
        } catch (SQLException e) {
            System.out.println("Error al crear : " + e);
            
            return false;    
        } finally {
            conexion.cerrar(con);
            conexion.cerrar(ps);
        }
    }

    public ArrayList<Pais> leer() {
        Connection con = null;
        PreparedStatement ps = null;
        ResultSetImpl rs = null;
        Pais pais;
        ArrayList<Pais> listaPais = new ArrayList<>();

        try {
            con = (Connection) conexion.conectarse();
            ps = (PreparedStatement) conectarse().prepareStatement(SQL_SELECT);
            rs = (ResultSetImpl) ps.executeQuery();

        while (rs.next()) {
                pais = new Pais();

                pais.setCodigoPais(rs.getInt(1));
                pais.setNombrePais(rs.getString(2));
                pais.setCapitalPais(rs.getString(3));
                pais.setRegion(rs.getString(4));
                pais.setPoblacion(rs.getInt(5));
                pais.setLatitud(rs.getDouble(6));
                pais.setLongitud(rs.getDouble(7));
            
                listaPais.add(pais);

            }

        } catch (SQLException e) {

            System.out.println(e);

        } finally {
            conexion.cerrar(con);
            conexion.cerrar(ps);
            conexion.cerrar(rs);
        }
        return listaPais;
    }

    public boolean actualizar(Pais pais) {
        PreparedStatement ps = null;
        Connection con = null;

        try {
            con = (Connection) conexion.conectarse();
            ps = (PreparedStatement) con.prepareStatement(SQL_UPDATE);
            
            
            ps.setInt(1, pais.getCodigoPais());
            ps.setString(2, pais.getNombrePais());
            ps.setString(3, pais.getCapitalPais());
            ps.setString(4, pais.getRegion());
            ps.setInt(5, pais.getPoblacion());
            ps.setDouble(6, pais.getLatitud());
            ps.setDouble(7, pais.getLongitud());
            
            ps.executeUpdate();
            System.out.println("Actualizado con éxito");
            return true;

        } catch (SQLException e) {
            System.out.println("Error al actualizar : " + e);
            return false;

        } finally {
            conexion.cerrar(con);
            conexion.cerrar(ps);
        }
    }

}