using System;

namespace BS_winform.DLL
{
    class WorkData
    {
        static public string buckString = "0000030C0011230114006000490054005f80008000024e03090161012000bb007c00fd0000019901ac031402db035e00e603280062000a000b000a0000000a00f100ef01d501b40208008701d4000000b6070a24bd14bf1438139b04821ac50000a08687GG";
        private string MekName = buckString.Substring(4,8);
        public void print(){
            Console.WriteLine(MekName);
        }
 
    }
    class Program
    {
        static void Main(string[] args)
        {
            WorkData a = new WorkData();
            a.print();
        }
    }
}
