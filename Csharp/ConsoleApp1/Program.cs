using System;
using Microsoft.Extensions.DependencyInjection;

interface Iop
{
    void Test();
}
class op1 : Iop
{
    public void Test() => Console.WriteLine("hello");
}
class op2 : Iop
{
    public void Test() => Console.WriteLine("world");
}

class Program
{
    static void Main(string[] args)
    {
        var sc = new ServiceCollection();
        sc.AddScoped(typeof(Iop),typeof(op1));
        var sp = sc.BuildServiceProvider();
        //==================================//
        Iop a = sp.GetService<Iop>();
        a.Test();
    }
}