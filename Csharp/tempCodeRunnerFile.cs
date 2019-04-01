using System;
using DependencyInjection;
interface Iop {
    void Test ();
}
class op1 : Iop {
    public void Test () => Console.WriteLine ("hello");
}
class op2 : Iop {
    public void Test () => Console.WriteLine ("world");
}

var sc = new SevericeCollection ();
sc.AddScoped (typeof (Iop), typeof (op1));
var sp = sc.BuildServiceProvider ();
//==================================//
Iop a = sp.GetSeverice<Iop> ();
a.Test ();