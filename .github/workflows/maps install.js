// Declaración de un Map (un HashMap) con clave "Integer" y Valor "String". Las claves pueden ser de cualquier tipo de objetos, aunque los más utilizados como clave son los objetos predefinidos de Java como String, Integer, Double ... !!!!CUIDADO los Map no permiten datos atómicos
Map<Integer, String> nombreMap = new HashMap<Integer, String>();
nombreMap.size(); // Devuelve el numero de elementos del Map
nombreMap.isEmpty(); // Devuelve true si no hay elementos en el Map y false si si los hay
nombreMap.put(K clave, V valor); // Añade un elemento al Map
nombreMap.get(K clave); // Devuelve el valor de la clave que se le pasa como parámetro o 'null' si la clave no existe
nombreMap.clear(); // Borra todos los componentes del Map
nombreMap.remove(K clave); // Borra el par clave/valor de la clave que se le pasa como parámetro
nombreMap.containsKey(K clave); // Devuelve true si en el map hay una clave que coincide con K
nombreMap.containsValue(V valor); // Devuelve true si en el map hay un Valor que coincide con V
nombreMap.values(); // Devuelve una "Collection" con los valores del Map
Map<Integer, String> map = new HashMap<Integer, String>();
map.put(1, "Casillas");		map.put(15, "Ramos");
map.put(3, "Pique");		map.put(5, "Puyol");
map.put(11, "Capdevila");	map.put(14, "Xabi Alonso");
map.put(16, "Busquets");	map.put(8, "Xavi Hernandez");
map.put(18, "Pedrito");		map.put(6, "Iniesta");
map.put(7, "Villa");

// Imprimimos el Map con un Iterador
Iterator it = map.keySet().iterator();
while(it.hasNext()){
  Integer key = it.next();
  System.out.println("Clave: " + key + " -> Valor: " + map.get(key));
}
Clave: 16 -> Valor: Busquets
Clave: 1  -> Valor: Casillas
Clave: 18 -> Valor: Pedrito
Clave: 3  -> Valor: Pique
Clave: 5  -> Valor: Puyol
Clave: 6  -> Valor: Iniesta
Clave: 7  -> Valor: Villa
Clave: 8  -> Valor: Xavi Hernandez
Clave: 11 -> Valor: Capdevila
Clave: 14 -> Valor: Xabi Alonso
Clave: 15 -> Valor: Ramos
Map<Integer, String> treeMap = new TreeMap<Integer, String>();
treeMap.put(1, "Casillas");	treeMap.put(15, "Ramos");
treeMap.put(3, "Pique");	treeMap.put(5, "Puyol");
treeMap.put(11, "Capdevila");	treeMap.put(14, "Xabi Alonso");
treeMap.put(16, "Busquets");	treeMap.put(8, "Xavi Hernandez");
treeMap.put(18, "Pedrito");	treeMap.put(6, "Iniesta");
treeMap.put(7, "Villa");

// Imprimimos el Map con un Iterador que ya hemos instanciado anteriormente
it = treeMap.keySet().iterator();
while(it.hasNext()){
  Integer key = it.next();
  System.out.println("Clave: " + key + " -> Valor: " + treeMap.get(key));
}
Clave: 1  -> Valor: Casillas
Clave: 3  -> Valor: Pique
Clave: 5  -> Valor: Puyol
Clave: 6  -> Valor: Iniesta
Clave: 7  -> Valor: Villa
Clave: 8  -> Valor: Xavi Hernandez
Clave: 11 -> Valor: Capdevila
Clave: 14 -> Valor: Xabi Alonso
Clave: 15 -> Valor: Ramos
Clave: 16 -> Valor: Busquets
Clave: 18 -> Valor: Pedrito
Map<Integer, String> linkedHashMap = new LinkedHashMap<Integer, String>();
linkedHashMap.put(1, "Casillas");	linkedHashMap.put(15, "Ramos");
linkedHashMap.put(3, "Pique");		linkedHashMap.put(5, "Puyol");
linkedHashMap.put(11, "Capdevila");	linkedHashMap.put(14, "Xabi Alonso");
linkedHashMap.put(16, "Busquets");	linkedHashMap.put(8, "Xavi Hernandez");
linkedHashMap.put(18, "Pedrito");	linkedHashMap.put(6, "Iniesta");
linkedHashMap.put(7, "Villa");

// Imprimimos el Map con un Iterador que ya hemos instanciado anteriormente
it = linkedHashMap.keySet().iterator();
while(it.hasNext()){
  Integer key = it.next();
  System.out.println("Clave: " + key + " -> Valor: " + linkedHashMap.get(key));
}
Clave: 1  -> Valor: Casillas
Clave: 15 -> Valor: Ramos
Clave: 3  -> Valor: Pique
Clave: 5  -> Valor: Puyol
Clave: 11 -> Valor: Capdevila
Clave: 14 -> Valor: Xabi Alonso
Clave: 16 -> Valor: Busquets
Clave: 8  -> Valor: Xavi Hernandez
Clave: 18 -> Valor: Pedrito
Clave: 6  -> Valor: Iniesta
Clave: 7  -> Valor: Villa
System.out.println("********* Trabajando con los métodos de Map *********");
System.out.println("Mostramos el numero de elementos que tiene el TreeMap: treeMap.size() = "+treeMap.size());
System.out.println("Vemos si el TreeMap esta vacio : treeMap.isEmpty() = "+treeMap.isEmpty());
System.out.println("Obtenemos un elemento del Map pasandole la clave 6: treeMap.get(6) = "+treeMap.get(6));
System.out.println("Borramos un elemento del Map el 18 (porque fue sustituido): treeMap.remove(18)"+treeMap.remove(18));
System.out.println("Vemos que pasa si queremos obtener la clave 18 que ya no existe: treeMap.get(18) = "+treeMap.get(18));
System.out.println("Vemos si existe un elemento con la clave 18: treeMap.containsKey(18) = "+treeMap.containsKey(18));
System.out.println("Vemos si existe un elemento con la clave 1: treeMap.containsKey(1) = "+treeMap.containsKey(1));
System.out.println("Vemos si existe el valo 'Villa' en el Map: treeMap.containsValue("Villa") = "+treeMap.containsValue("Villa"));
System.out.println("Vemos si existe el valo 'Ricardo' en el Map: treeMap.containsValue("Ricardo") = "+treeMap.containsValue("Ricardo"));
System.out.println("Borramos todos los elementos del Map: treeMap.clear()");treeMap.clear();
System.out.println("Comprobamos si lo hemos eliminado viendo su tamaño: treeMap.size() = "+treeMap.size());
System.out.println("Lo comprobamos tambien viendo si esta vacio treeMap.isEmpty() = "+treeMap.isEmpty());
********* Trabajando con los métodos de Map *********
Mostramos el numero de elementos que tiene el TreeMap: treeMap.size() = 11
Vemos si el TreeMap esta vacio : treeMap.isEmpty() = false
Obtenemos un elemento del Map pasandole la clave 6: treeMap.get(6) = Iniesta
Borramos un elemento del Map el 18 (porque fue sustituido): treeMap.remove(18)Pedrito
Vemos que pasa si queremos obtener la clave 18 que ya no existe: treeMap.get(18) = null
Vemos si existe un elemento con la clave 18: treeMap.containsKey(18) = false
Vemos si existe un elemento con la clave 1: treeMap.containsKey(1) = true
Vemos si existe el valo 'Villa' en el Map: treeMap.containsValue("Villa") = true
Vemos si existe el valo 'Ricardo' en el Map: treeMap.containsValue("Ricardo") = false
Borramos todos los elementos del Map: treeMap.clear()
Comprobamos si lo hemos eliminado viendo su tamaño: treeMap.size() = 0
Lo comprobamos tambien viendo si esta vacio treeMap.isEmpty() = true
System.out.println("Foreach: Forma alternativa para recorrer los Map mostrando la Clave y el valor:");
for (Entry<Integer, String> jugador : linkedHashMap.entrySet()){
	Integer clave = jugador.getKey();
	String valor = jugador.getValue();
	System.out.println(clave+"  ->  "+valor);
}
Foreach: Forma alternativa para recorrer los Map mostrando la Clave y el valor:
1  ->  Casillas
15 ->  Ramos
3  ->  Pique
5  ->  Puyol
11 ->  Capdevila
14 ->  Xabi Alonso
16 ->  Busquets
8  ->  Xavi Hernandez
18 ->  Pedrito
6  ->  Iniesta
7  ->  Villa
class JugadorSeleccion {

	private int dorsal;
	private String nombre;
	private String demarcacion;

	public JugadorSeleccion() {
	}

	public JugadorSeleccion(int dorsal, String nombre, String demarcación) {
		this.dorsal = dorsal;
		this.nombre = nombre;
		this.demarcacion = demarcación;
	}

	public int getDorsal() {
		return dorsal;
	}

	public void setDorsal(int dorsal) {
		this.dorsal = dorsal;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDemarcación() {
		return demarcacion;
	}

	public void setDemarcación(String demarcación) {
		this.demarcacion = demarcación;
	}

	@Override
	public String toString() {
		return this.dorsal+"  --  "+this.nombre+"  --  "+this.demarcacion;
	}

}
System.out.println("********* TreeMap con Objetos y como Clave un String *********");
Map <String, JugadorSeleccion> jugadores = new TreeMap<String, JugadorSeleccion>();
jugadores.put("Casillas", new JugadorSeleccion(1, "Casillas", "Portero"));
jugadores.put("Ramos", new JugadorSeleccion(15, "Ramos", "Lateral Derecho"));
jugadores.put("Pique", new JugadorSeleccion(13, "Pique", "Central"));
jugadores.put("Puyol", new JugadorSeleccion(5, "Puyol", "Central"));
jugadores.put("Capdevila", new JugadorSeleccion(11, "Capdevila", "Lateral Izquierdo"));
jugadores.put("Xabi", new JugadorSeleccion(14, "Xabi Alonso", "Medio Centro"));
jugadores.put("Busquets", new JugadorSeleccion(16, "Busquets", "Medio Centro"));
jugadores.put("Xavi", new JugadorSeleccion(8, "Xavi Hernandez", "Centro Campista"));
jugadores.put("Pedrito", new JugadorSeleccion(18, "Pedrito", "Interior Izquierdo"));
jugadores.put("Iniesta", new JugadorSeleccion(6, "Iniesta", "Interior Derecho"));
jugadores.put("Villa", new JugadorSeleccion(7, "Villa", "Delantero"));
for (Entry<String, JugadorSeleccion> jugador : jugadores.entrySet()){
	String clave = jugador.getKey();
	JugadorSeleccion valor = jugador.getValue();
	System.out.println(clave+"  ->  "+valor.toString());
}
Busquets   ->  16  --  Busquets        --  Medio Centro
Capdevila  ->  11  --  Capdevila       --  Lateral Izquierdo
Casillas   ->  1   --  Casillas        --  Portero
Iniesta    ->  6   --  Iniesta         --  Interior Derecho
Pedrito    ->  18  --  Pedrito         --  Interior Izquierdo
Pique      ->  13  --  Pique           --  Central
Puyol      ->  5   --  Puyol           --  Central
Ramos      ->  15  --  Ramos           --  Lateral Derecho
Villa      ->  7   --  Villa           --  Delantero
Xabi       ->  14  --  Xabi Alonso     --  Medio Centro
Xavi       ->  8   --  Xavi Hernandez  --  Centro Campista
// Cuidado con comparar objetos que son iguales pero no son lo mismo
JugadorSeleccion villa = new JugadorSeleccion(7, "Villa", "Delantero");
System.out.println("Esta este objeto 'villa' en el Map: jugadores.containsValue(villa) = "+jugadores.containsValue(villa));
Esta este objeto 'villa' en el Map: jugadores.containsValue(villa) = false
// En este caso si que estamos preguntando por el mismo objeto
JugadorSeleccion navas = new JugadorSeleccion(22, "Navas", "Extremo Derecho");
jugadores.put("Navas", navas);
System.out.println("Esta este objeto 'navas' en el Map: jugadores.containsValue(navas) = "+jugadores.containsValue(navas));
Esta este objeto 'navas' en el Map: jugadores.containsValue(navas) = true
