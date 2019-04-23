using System;
using Refer.Main;

namespace Refer.Main {
    class Program {
        static void Main (string[] args) {
            int a = 1, b = 2;
            Num num = new Num ();
            var result = num.Number (a, b);
            Console.WriteLine (result);
        }
    }
}
