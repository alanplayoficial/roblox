for (Inicialización de las variables de ejecución; condición de terminación; cambio de las variables de ejecución ) {
Indicaciones
}
for (int i = 1; i <= 5; i++) {
Indicación
}
for (int i = 1; i <= 5; i++) {
System.out.println ("El valor de la cifra es: " + i);
}
for ( Variable de tipo : colección ) {
Código en el que se utiliza la variable
}
int i = 0;
while ( i <=5 ) {
System.out.println (“El valor de la cifra es: “ + i);
}
for(int i = valor inicial; i <= valor final; i = i + paso)
{
        ....
        ....
    Bloque de Instrucciones....
        ....
        ....
}

for(int i=500;i<=1000;i+=2)
{//Notemos que escribir i+=2 es similar a escribir i = i + 2
    System.out.println(i);
}
public class CicloFor
{
    public static void main(String args[])
    {
        for(int i=500;i<=1000;i+=2)
        {
            System.out.println(i);
        }
    }
}
for(int i = 100; i > 0; i--)
{//Notemos que escribir i-- es lo mismo a escribir i = i - 1
    System.out.println(i);
}
for(int i = 100; i > 0; i--)
{//Notemos que escribir i-- es lo mismo a escribir i = i - 1
    System.out.println(i);
}
public class CicloInverso
{
    public static void main(String args[])
    {
        for(int i = 100; i > 0; i--)
        {
            System.out.println(i);
        }
    }
}

int contador = 0; //Iniciamos el contador en cero

for(int i = 0; i <= 10000; i++)
{//Notemos que escribir i++ es similar a escribir i = i + 1
    if(i % 20 == 0) //Preguntamos si el residuo es 0 (es múltiplo de 20)
    {
        contador++; //Si es múltiplo aumentamos el contador en 1
    }
    //Si no es múltiplo no hacemos nada
}

//Mostramos el valor del contador
System.out.println(contador);
public class Multiplos
{
    public static void main(String args[])
    {
        int contador = 0; //Iniciamos el contador en cero

        for(int i = 0; i <= 10000; i++)
        {
            if(i % 20 == 0) //Preguntamos si el residuo es 0 (es múltiplo de 20)
            {
                contador++; //Si es múltiplo aumentamos el contador en 1
            }
            //Si no es múltiplo no hacemos nada
        }

        //Mostramos el valor del contador
        System.out.println(contador);
    }
}
for ([counter initialization]; [checking conditions]; [changing of the counter])
{
    //  statements
}
public class ForExample {
   public static void main(String[] args) {
       for (int i = 0; i < 10; i++) {
           System.out.println(i + 1 + ". Hello!");
       }
   }
}
while (boolean condition)
       {
            loop statements...
       }
public class ForAndForEach {
   public static void main(String[] args) {
       int j = 0;  //  we use the counter this way
       while (j < 10) {
           System.out.println(j + 1 + ". Hello!");
           j++;
       }
   }
}
for(;;){
	System.out.println("working...");
}
while(true){
	System.out.println("working...");
}
public class ForBreakExample {
   public static void main(String[] args) {
       String[] names = {"Mike", "Dustin", "Stranger", "Lucas", "Will"};
       for (int i = 0; i < names.length; i++) {
//  how to break out of a for loop, java: check if we have any "Stranger" in  //  our array
if (names[i].equals("Stranger")) {
               System.out.println("I don't chat with strangers");
               break;
           }
           System.out.println("Hello," + names[i]);
       }
   }
}public class ForContinueExample {
   public static void main(String[] args) {
       String[] names = {"Mike", "Dustin", "Stranger", "Lucas", "Will"};
       for (int i = 0; i < names.length; i++) {
           if (names[i].equals("Stranger")) {
               System.out.println("I don't chat with strangers");
               continue;
           }
           System.out.println("Hello," + names[i]);
       }
   }
}
for (type itVar: array)
{
    Block of operators;
}
public class ForEachExample {
   public static void main(String[] args) {
       String[] names = {"Mike", "Dustin", "Stranger", "Lucas", "Will"};
	//  for each loop, Java code
       for (String name : names) {
           if (name.equals("Stranger")) {
               System.out.println("I don't chat with strangers");
               continue;
           }
           System.out.println("hello, " + name);
       }
   }
}
for (inicio; termino; iteracion)
    sentencia;
for (inicio; termino; iteracion) {
    sentencia_1; 
    sentencia_2; 
    sentencia_n;
}
for (i = valor_inicial; i <= valor_final; i++) {
    sentencia;
}
System.out.println("Tabla de multiplicar del 5");
for (int i =0 ; i <= 10; i++) {
    System.out.println(5 + " * " + i + " = " + 5 * i);
}
5 * 0 = 0
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
[inicializacion;] 
while (expresionLogica) {
    sentencias;
    [iteracion;]
}
do {
    sentencias;
    [iteracion;] 
} while (expresionLogica);
