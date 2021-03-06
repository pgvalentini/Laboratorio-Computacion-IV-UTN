import java.net.http.HttpResponse;

import com.google.gson.Gson;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;


public class main {
    public static void main(String[] args) throws UnirestException {
        
        Pais pais= new Pais();
        sql_pais basePais = new sql_pais();
        Gson gson = new Gson();
        
        for(int codigo=0; codigo<=300; codigo++){
            
            try{
                HttpResponse<JsonNode> response = (HttpResponse<JsonNode>) Unirest.get("https://restcountries.com/v2/callingcode/"+codigo)
                .header("Content-Type", "application/json").asJson();

                if(!response.toString().isEmpty()){      
                    pais = gson.fromJson(response.toString(), Pais.class);
                    basePais.crear(pais);
                }

            }catch(Exception e){
                System.out.println("Error "+e);
                e.printStackTrace();
            }

        }

    }

}