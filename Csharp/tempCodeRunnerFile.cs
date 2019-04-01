using System;
interface Iop {
    void test ();
}
class op : Iop {
    public void test () => Console.WriteLine ("hello");
}

op a = new op ();
a.test();