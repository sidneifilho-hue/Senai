import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] vetor = new int[6];
        int pares = 0;
        int impares = 0;

        // Lendo os 6 números
        for (int i = 0; i < vetor.length; i++) {
            System.out.print("Digite o " + (i + 1) + "º número: ");
            vetor[i] = sc.nextInt();

            // Verificando se é par ou ímpar
            if (vetor[i] % 2 == 0) {
                pares++;
            } else {
                impares++;
            }
        }

        // Exibindo resultados
        System.out.println("Quantidade de números pares: " + pares);
        System.out.println("Quantidade de números ímpares: " + impares);

        sc.close();
    }
}