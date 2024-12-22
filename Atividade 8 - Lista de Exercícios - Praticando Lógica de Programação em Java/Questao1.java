import java.util.Scanner;

public class Questao1 {
    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        System.out.print("Digite um número: ");
        var num1 = scanner.nextDouble();
        System.out.print("Digite outro número: ");
        var num2 = scanner.nextDouble();
        System.out.print("Digite um operador (+, -, *, /): ");
        scanner.nextLine();
        var operator = scanner.nextLine();
        if (operator.equals("+")) {
            System.out.println("Resultado: " + (num1 + num2));
        } else if (operator.equals("-")) {
            System.out.println("Resultado: " + (num1 - num2));
        } else if (operator.equals("*")) {
            System.out.println("Resultado: " + (num1 * num2));
        } else if (operator.equals("/")) {
            System.out.println("Resultado: " + (num1 / num2));
        }
    }
}