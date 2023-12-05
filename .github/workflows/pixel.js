public void repaint() public void repaint(long tm) public void repaint(int x, int y, int width,
    int height) public void repaint(long tm, int x, int y, int width, int height)
import java.awt.*;
import java.awt.event.*;
import java.util.*;
import javax.swing.*;
public class SimpleTesting extends JPanel implements MouseListener {
  private Vector v;
  public SimpleTesting() {
    v = new Vector();
    setBackground(Color.white);
    addMouseListener(this);
  }
  public static void main(String args[]) {
    JFrame frame = new JFrame();
    frame.getContentPane().add(new SimpleTesting());
    frame.setTitle("Repaint Method");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setLocationRelativeTo(null);
    frame.setSize(375, 250);
    frame.setVisible(true);
  }
  public void paint(Graphics g) { // paint() method
    super.paint(g);
    g.setColor(Color.black);
    Enumeration enumeration = v.elements();
    while (enumeration.hasMoreElements()) {
      Point p = (Point) (enumeration.nextElement());
      g.drawOval(p.x - 20, p.y - 20, 40, 40);
    }
  }
  public void mousePressed(MouseEvent me) {
    v.add(me.getPoint());
    repaint(); // call repaint() method
  }
  // MouseListener method blank implementation
  public void mouseClicked(MouseEvent me) {}
  public void mouseEntered(MouseEvent me) {}
  public void mouseExited(MouseEvent me) {}
  public void mouseReleased(MouseEvent me) {}
}
// program to show the implementation of the repaint() method in java  
//  program to draw an ovel in the frame when the mouse is clicked in the frame using JFramei,e. swings  
importjava.awt.*;  
importjava.awt.event.*;  
importjavax.swing.*;  
importjava.util.*;  
public class Demo extends JPanel implements MouseListener {  
    private Vector v;  
    public Demo() {  
        v = new Vector();  
        setBackground(Color.black);  
        // adding mouse listener  
        addMouseListener(this);  
    }  
    public static void main(String args[]) {  
        JFrame f = new JFrame(); // creating an object to the Jframe class  
        f.getContentPane().add(new Demo());  
        f.setTitle(" JavaTpoint "); // giving title to the frame  
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // setting the closing operation  
        f.setLocationRelativeTo(null); // fixing the local relative as null  
        f.setSize(400, 400); // fixing the size of the frame   
        f.setVisible(true); // fixing the visibility of the frame  
    }  
    public void paint(Graphics g) { // paint() method  
        super.paint(g); // calling the paint method present in the super class or parent class  
        g.setColor(Color.white); // fixing the outline colour of the ovel as white  
        Enumeration e = v.elements(); // creating the object to the enumeration class  
        while(e.hasMoreElements()) {  
            Point point = (Point)(e.nextElement());  
            g.drawOval(point.x-20, point.y-20, 40, 40);  
        }  
    }  
    public void mousePressed(MouseEvent e) {  
        v.add(e.getPoint());  
        repaint(); // calling the repaint() method  
    }  
    // MouseListener method implementation  
    public void mouseClicked(MouseEvent e) {}  
    public void mouseEntered(MouseEvent e) {}  
    public void mouseExited(MouseEvent e) {}  
    public void mouseReleased(MouseEvent e) {}  
