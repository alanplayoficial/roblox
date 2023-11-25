/* Ejemplo - aprenderaprogramar.com */

/* Esta clase representa un  depósito cilíndrico donde se almacena aceite  */

public class Deposito {    

    //Campos de la clase
    private float diametro;
    private float altura;
    private String idDeposito;

    //Constructor sin parámetros auxiliar
    public Deposito () { //Lo que hace es llamar al constructor con parámetros pasándole valores vacíos
        this(0,0,"");            } //Cierre del constructor


    //Constructor de la clase que pide los parámetros necesarios
    public Deposito (float valor_diametro, float valor_altura, String valor_idDeposito) {
        if (valor_diametro > 0 && valor_altura > 0) {            
            diametro = valor_diametro;
            altura = valor_altura;
            idDeposito = valor_idDeposito;
        } else {
            diametro = 10;
            altura = 5;
            idDeposito = "000";
            System.out.println ("Creado depósito con valores por defecto diametro 10 metros altura 5 metros id 000" );
        }   } //Cierre del constructor

    public void setValoresDeposito (String valor_idDeposito, float valor_diametro, float valor_altura) {
        idDeposito = valor_idDeposito;
        diametro = valor_diametro;
        altura = valor_altura;
        if (idDeposito !="" && valor_diametro > 0 && valor_altura > 0) {
        } else {
            System.out.println ("Valores no admisibles. No se han establecido valores para el depósito");
            //Deposito (0.0f, 0.0f, ""); Esto no es posible. Un constructor no es un método y por tanto no podemos llamarlo
            idDeposito = "";
            diametro = 0;
            altura = 0;
        }     } //Cierre del método

    public float getDiametro () { return diametro; } //Método de acceso
    public float getAltura () { return altura; } //Método de acceso
    public String getIdDeposito () { return idDeposito; } //Método de acceso
    public float valorCapacidad () { //Método tipo función
        float capacidad;
        float pi = 3.1416f; //Si no incluimos la f el compilador considera que 3.1416 es double
        capacidad = pi * (diametro/2) * (diametro/2) * altura;
        return capacidad;
    }    

} //Cierre de la clase
/* Ejemplo - aprenderaprogramar.com */

/*Esta clase  representa un conjunto de depósitos formado por entre 2 y 3 depósitos  */


public class GrupoDepositos {
    //Campos de la clase, algunos de ellos son tipo objetos de otra clase
    private Deposito deposito1;
    private Deposito deposito2;
    private Deposito deposito3;
    private String idGrupo;
    private int numeroDepositosGrupo;

    //Constructor para la clase. En ella se crean objetos de otra clase.
    public GrupoDepositos (int numeroDeDepositosGrupo, String valor_idGrupo) {
    idGrupo = valor_idGrupo;        
    switch (numeroDeDepositosGrupo) {
            case 1: System.out.println ("Un grupo ha de tener más de un depósito"); break;
            
            case 2:
            deposito1 = new Deposito(); /*Al crear el objeto automáticamente se llama al constructor del mismo, en este caso sin parámetros. ESTO ES EJEMPLO DE SINTAXIS DE CREACIÓN DE UN OBJETO, EN ESTE CASO DENTRO DE OTRO */
            deposito2 = new Deposito();       
            numeroDepositosGrupo = 2;
            break;

            case 3: deposito1 = new Deposito(); deposito2 = new Deposito(); deposito3 = new Deposito();
            numeroDepositosGrupo = 3;
            break;

            default: System.out.println ("No se admiten más de tres depósitos");
            //Esto no evita que se cree el objeto.
            break;
        } //Cierre del switch
    } //Cierre del constructor

    public int getNumeroDepositosGrupo () { return numeroDepositosGrupo; }

    public String getIdGrupo () { return idGrupo; }
    public float capacidadDelGrupo () {       //Este método usa objetos de otra clase e invoca métodos de otra clase
        if (numeroDepositosGrupo == 2) { return (deposito1.valorCapacidad() + deposito2.valorCapacidad() );
        } else { return (deposito1.valorCapacidad() + deposito2.valorCapacidad()+ deposito3.valorCapacidad() ); }
        //Si el grupo se ha creado con un número de depósitos distinto de 2 o 3 saltará un error en tiempo de ejecución
    } //Cierre del método
} //Cierre de la clase
