import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.swing.JOptionPane;

public class conexion{
    
    private static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    private static final String DATA_BASE = "utn";
    private static final String SSL = "?useSSL=false";
    private static final String URL = "jdbc:mysql://localhost/";
    private static final String USER_NAME = "root";
    private static final String PASSWORD = "mysql";

    public static Connection conectarse() {
        Connection conexion = null;

        try {
            Class.forName(JDBC_DRIVER);
            conexion = DriverManager.getConnection(URL + DATA_BASE + SSL, USER_NAME, PASSWORD);
            if (conexion != null) {
                System.out.println("Conexión exitosa!");
                System.out.println("Conectado a : " + URL + DATA_BASE + SSL);
            }

        } catch (ClassNotFoundException | SQLException e) {
            System.err.println("Error de conexión! :  " + e);
            JOptionPane.showMessageDialog(null, "Error de conexión a base de datos!\n " + e);
            System.exit(0);
        }

        return conexion;

    }


    public static void cerrar(ResultSet rs) {
        try {
            if (rs != null) {
                rs.close();
            }
        } catch (SQLException e) {
            System.out.println(e);
        }
    }

    public static void cerrar(PreparedStatement ps) {
        try {
            if (ps != null) {
                ps.close();
            }
        } catch (SQLException e) {
            System.out.println(e);
        }
    }

    public static void cerrar(Connection conn) {
        try {
            if (conn != null) {
                conn.close();
            }
        } catch (SQLException e) {
            System.out.println(e);
        }
    }

    
}