using System;
/*
namespace Generic {
    class Box<TCargo> {
        public TCargo Cargo { get; set; }
    }

    class Book {
        public string Name { get; set; }
    }

    class Apple {
        public string Color { get; set; }
    }

    class Program {
        static void Main (string[] args) {
            Apple apple = new Apple () { Color = "red" };
            Book book = new Book () { Name = "new book" };
            Box<Apple> box1 = new Box<Apple> () { Cargo = apple };
            Box<Book> box2 = new Box<Book> () { Cargo = book };
            Console.WriteLine (box1.Cargo.Color);
            Console.WriteLine (box2.Cargo.Name);
        }
    }   
}
//*/
namespace IoGeneric {
    interface IPeople<Tid> {
        Tid ID { get; set; }
    }

    class Student<Tid> : IPeople<Tid> {
        public Tid ID { get; set; }
        public string Name { get; set; }
    }

    class Program {
        static void Main () {
            Student<int> stu = new Student<int> ();
            stu.ID = 001;
            stu.Name = "LiHua";
            Console.WriteLine ("{0},{1}", stu.ID, stu.Name);
        }
    }
}