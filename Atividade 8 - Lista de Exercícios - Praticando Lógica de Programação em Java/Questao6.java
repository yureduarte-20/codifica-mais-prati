import java.util.Random;
import java.util.Scanner;

public class Questao6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        var randonize = new Random();
        var guess = (int) Math.abs(randonize.nextInt(50));
        guess = guess == 0 ? 1 : guess;
        var selected = -1;
        do {
            System.out.print("Adivinhe um número entre 1 e 50: ");
            selected = scanner.nextInt();
            System.out.println();
        } while (guess != selected);
        System.out.println("Você ganhou!");
    }
}
