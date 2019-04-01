using System;
interface Iop {
    void Test ();
}
class op1 : Iop {
    public void Test () => Console.WriteLine ("hello");
}
class op2 : Iop {
    public void Test () => Console.WriteLine ("world");
}

class Program {
    static void Main (string[] args) {
        Iop a = new op2 ();
        a.Test ();
    }
}