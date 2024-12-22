import java.util.Scanner;

public class Questao5 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Diteite a primeira palavra: ");
        var palavra = scanner.nextLine().toLowerCase();
        System.out.println("Diteite a segunda palavra: ");
        var palavra2 = scanner.nextLine().toLowerCase();
        System.out.format("Anagrama? %s", isAnagrama(palavra, palavra2) ? "Sim" : "Não");
    }

    public static boolean isAnagrama(String palavra, String palavra2) {
        for (int i = 0; i < palavra.length(); i++) {
            if (!palavra2.contains("" + palavra.charAt(i))) {
                return false;
            }
        }
        return true;
    }
}
