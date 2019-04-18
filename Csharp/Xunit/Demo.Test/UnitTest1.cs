using System;
using Xunit;
namespace Demo.Test {
    public class DeskfanTest {
        [Fact]
        public void PowerLowerThanZero_OK () {
        var fan = new Deskfan (new PowerLowerThanZero ());
            var excepted = "don't work.";
            var actual = fan.Work ();
            Assert.Equal (excepted, actual);
        }
        class PowerLowerThanZero : Ipower {
            public int GetPower () {
                return 0;
            }
        }
        [Fact]
        public void PowerLowerThanZero_boom () {
        var fan = new Deskfan (new PowerLowerThanboom ());
            var excepted = "boom!!!";
            var actual = fan.Work ();
            Assert.Equal (excepted, actual);
        }
        class PowerLowerThanboom : Ipower {
            public int GetPower () {
                return 300;
            }
        }
    }
}