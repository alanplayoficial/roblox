import java.util.Timer;
import java.util.TimerTask;

public class StopWatch {
  Timer timer;

  public StopWatch(int seconds) {
    timer = new Timer();
    timer.schedule(new StopTask(), seconds * 1000);
  }

  public static void main(String[] args) {
    new StopWatch(10);
    System.out.println("StopWatch Started.");
  }

  class StopTask extends TimerTask {
    public void run() {
      System.out.println("Time Up!");
      timer.cancel();
    }
  }
}time.
StopWatch
time.schedule
time.TimerTask
time.IllegalArgumentException
time.IllegalArgumentException
time.NullPointerException
time.main
time.StopWatch
