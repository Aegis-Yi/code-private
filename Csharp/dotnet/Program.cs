using System;

namespace dotnet {
    class Program {
        static void Main ()
        {
            string a = " ";
            a = NewMethod();
            Console.WriteLine(a);
        }

        private static string NewMethod()
        {
            return Console.ReadLine();
        }
    }
}