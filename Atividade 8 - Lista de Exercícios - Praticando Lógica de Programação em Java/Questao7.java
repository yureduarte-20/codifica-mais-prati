import java.util.Scanner;

public class Questao7 {
    public static void main(String[] args) {
         Scanner scanner = new Scanner(System.in);
         System.out.print("Digite uma frase: ");
         var frase = scanner.nextLine();
         String [] palavras = frase.split("\\s");
         System.out.format("Sua frase tem %s palavras \n", palavras.length );
    }
}
