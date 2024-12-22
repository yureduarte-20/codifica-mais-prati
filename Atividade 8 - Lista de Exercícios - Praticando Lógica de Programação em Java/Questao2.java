import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Questao2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite uma palavra: ");
        String palavra = scanner.nextLine();
        palavra = palavra.toLowerCase();
        var finalString = new StringBuffer();
        for(int i = palavra.length() - 1; i >= 0; i--){
            finalString.append(palavra.charAt(i));
        }
        System.out.format("Palídromo? %s \n", palavra.equals(finalString.toString())? "Sim" : "Não");
    }
}
