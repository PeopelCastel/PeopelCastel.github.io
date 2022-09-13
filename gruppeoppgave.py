import math
from fractions import Fraction

s = 0.5;

for n in range(2, 11):
    print(Fraction(s));
    s = s + 1/(2**n);

