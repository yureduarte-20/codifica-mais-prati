import java.util.Scanner;

public class Questão3 {
    public static int fib(int n) {
        if (n <= 2) {
            return 1;
        }
        return fib(n - 2) + fib(n - 1);
    }

    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite qual número da sequência de Fibonacci você deseja: ");
        var n = scanner.nextInt();
        var res = fib(n);

        System.out.format("O %s ° da sequência de Fibonacci é %s .\n", n, res);
    }
}
