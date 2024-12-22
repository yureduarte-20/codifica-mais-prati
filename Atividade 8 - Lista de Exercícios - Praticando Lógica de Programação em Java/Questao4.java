
import java.util.LinkedList;

import java.util.Queue;
import java.util.Scanner;

public class Questao4 {
    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        var value = scanner.nextInt();
        Queue<Integer> numbers = new LinkedList<>();
        while (value != 0) {
            numbers.add(value % 10);
            value /= 10;
        }
        var i = (int) Math.pow(10, numbers.size() - 1);
        var num = 0;

        while (!numbers.isEmpty()) {
            var n = numbers.poll() * i;
            num += n;
            i /= 10;
        }
        System.out.println(num);
    }
}
