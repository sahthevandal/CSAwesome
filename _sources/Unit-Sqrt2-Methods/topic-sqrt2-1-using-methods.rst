.. qnum::
   :prefix: √2-1-
   :start: 1

.. include:: ../header.rst

|Time45|

Using Methods
=============

Computer programs, as you’ll discover, can get rather complex. Large programs
may consist of millions of lines of code, all of which have to connect to each
other in just the right way for the program to work. Compare that to a novel,
which might be only a few hundred thousand words and is still perfectly readable
even if the author misplaced a semicolon. Yet people manage to write those large
programs. How can human beings possibly deal with that kind of complexity?

**Abstraction** is the main tool we have to keep complexity under control.
Abstraction gets a bad rap in our culture, often being considered synonymous
with “hard to understand” as in abstract math or abstract theoretical physics.
But abstraction really just means “hiding details” and we use abstractions all
the time without even realizing it.

When you learn to drive, you learn how to use a steering wheel and the brake and
accelerator pedals. But your drivers ed instructor will almost certainly not
teach you about how a rack and pinion turns the wheels or how tiny explosions in
the car’s engine make it go. Most of the details are *abstracted* away. A car
mechanic needs to understand them but as a driver you can deal with the car in
terms of a much simpler set of concepts like press the gas to make the car go.

Abstraction is a powerful tool that will appear over and over as you learn to
program. In this chapter we are going to talk about **procedural abstraction**
which just means hiding the details of how something gets done so we can focus
instead of what the procedure achieves. A procedure is a method for doing
something and if we abstract a procedure we hide the details of *how* it does
things, allowing us to focus on *what* result it achieves.

Procedures go by many names in different programming languages: functions,
subroutines, commands, or even procedures. In Java they are called **methods**,
as in a method of doing something.

In this section we are going to talk about using already existing methods as
useful abstractions. In the next section we'll learn how to write new methods
and create our own abstractions.

What is a Method?
-----------------

.. image:: Figures/Toaster.png
    :width: 100
    :align: left
    :alt: Toaster

One way to think of a method is as a little machine that does something.
Consider a toaster. You put bread in the toaster and turn it on and a little
while later you get a piece of toast. Toasters don’t make toast without bread
but they can make toast out of any kind of bread that fits in the toaster.

And even a lowly toaster is a kind of abstraction. While you probably have some
rough idea of how a toaster works on the inside, as with a car you don't have to
know how it works to use it. All you have to know is, you put the bread in, you
press the button, and a little while later your toast pops out.

The other thing about a toaster is you only need one—you don’t need to get a new
toaster every time you want to make a piece of toast. Once you’ve got a toaster
you can use it to make all the toast you want.

Methods are similar. Most methods, like the toaster, require some inputs, which
we call **arguments**, and then either produce an effect in the world, such as
printing something on the screen, or compute a value based on the arguments. And
they hide, i.e. abstract, the details of what exactly they are doing so we can
write code that uses them without having to worry about those details. And once
you’ve got a method that does somethig useful, you can use that method whenever
you need to do that thing, rather than writing out the same code over and and
over.

Two methods we’ve used so far in this book are ``System.out.println`` and
``System.out.print``. Their job is to take a value and print it to the screen,
either with or without a new line at the end. They both abstract the actual
process of turning the value into a textual representation and then causing that
text to be displayed on the screen. There’s a lot of things that have to happen
under the covers to make that text come out on the screen but thankfully we
don’t have to know any more about that than we have to know about how pressing
on a car’s accelerator makes it go faster.

Now let’s consider the other kind of method, those that compute new values from
their arguments.

A simple example of this kind of method is the ``sqrt`` method that is part of
the ``java.lang.Math`` class. ``Math.sqrt`` takes an ``double`` argument and
**returns** a ``double`` value which is square root of the argument. We say that
the **return type** of ``sqrt`` is ``double``.

.. note::

  ``Math.sqrt`` is a static method, sometimes called a class method. The name of
  the method is just ``sqrt`` but we refer to it with the name of the class
  where it is defined, ``Math``, followed by a dot (``.``) followed by the name.
  If you write a static method in your own class, as you will do later in this
  unit you can call the method using just the name.

Methods that return a value typically doesn’t have any observable effect when
they are called—nothing shows up on the screen; no lights blink, no bleeps or
bloops are emitted—they just produces a new value that you need to something
with like assigning it to a variable. For instance, we might use ``sqrt`` like
this:

.. code-block:: java

   double root = Math.sqrt(2);

After this assignment, ``root`` will have the value ``1.4142135623730951`` which
is the ``double`` value that most closely approximates the value of the square
root of 2. (If you remember your 8th grade math, you know that the square root
of 2 is a irrational number, meaning its decimal representation is infinite.
Since ``double``\ s have to be represented in a finite amount of memory we have
to live with the approximation.)

You could also use the value returned by a method as the argument to another
method. For instance, if you wanted to print the square root of two you could
write:

.. code-block:: java

   System.out.println("The square root of 2 is: " + Math.sqrt(2));

If ``System.out.println`` is a car, using all kinds of machinery under the hood
to make it go, ``Math.sqrt`` is maybe more like a toaster. It's not a total
mystery how it works but few of us probably know off the top of our head how to
compute arbitrary square roots efficiently. So it sure is convenient that Java
provides this method for us. (In fact, the source code for ``sqrt`` in the JDK
is over 100 lines of pretty hairy math code.)

Calling Methods
---------------

The main thing we can do with a method is **call** it. Calling a method is how
we get the code in the method to run, either to produce an effect or to compute
a value. There are several examples above of calling both ``println`` and
``sqrt`` but to spell it out, a call to a method is made up of the name of the
method followed by a pair of parentheses. In between the parentheses is a
comma-separated list of expressions, one for each parameter defined in the
method declaration.

Thus when we want to use a method that computes a value we need to know four
things:

- Its name.

- What arguments it expects.

- What type of value it returns.

- How the returned value is related to the arguments.

If you look back to the earlier description of ``Math.sqrt``, you’ll see it
includes exactly that information: “``Math.sqrt`` takes an ``double`` argument
and returns a ``double`` value which is square root of the argument.” (If you
look at the Javadocs you’ll see they are even more precise: it is documented to
return the “correctly rounded positive square root of a double value.”)

All the methods we’ve talked about so far only take one argument so the argument
lists only contain one expression. In a moment we’ll learn about some methods
that take more than one argument and also one that takes no arguments.

|Exercise| **Check Your Understanding**

.. mchoice:: correct-calls

   Knowing that ``Math.sqrt`` takes a single argument, Which of these are
   syntactically correct method calls to ``sqrt``?

   - ``Math.sqrt(2)``

     + ✅ This is a simple call to ``Math.sqrt`` with the argument 2.

   - ``Math.sqrt()``

     - ❌ ``Math.sqrt`` takes one argument. This would be a correct call if it took no arguments.

   - ``Math.sqrt(2, 4)``

     - ❌ ``Math.sqrt`` takes one argument. This would be a correct call if it took two arguments.

   - ``Math.sqrt(2 + 3)``

     + ✅ The argument passed to ``Math.sqrt`` is the value of the expression 2 + 3, namely 5.

   - ``Math.sqrt 2``

     - ❌ You must have parentheses around the arguments.

   - ``Math.sqrt(Math.sqrt(2))``

     + ✅ The argument passed to ``Math.sqrt`` is the value of *another* call to
       ``Math.sqrt`` which is perfectly fine.

Note that some methods take no arguments but when you call them you still need
an empty pair of paretheses. It's a common beginner mistake to leave the
parentheses off a method call that takes no arguments. ``System.out.println``
can, in fact be called with no arguments to just print a blank line. With that
in mind, compare these two lines of code:

.. code-block:: java

   System.out.println(); // ✅ Good - prints a blank line
   System.out.println;   // ❌ No good - will give you a compile error.

Other ``Math`` methods - ``pow`` and ``abs``
--------------------------------------------

``Math.sqrt`` is just one of many static methods in the ``Math`` class. Several
other ``Math`` methods are part of the AP subset in addition to ``sqrt``:
``abs``, ``pow``, and ``random``. And if you need to do complex mathematical
computations in a program you are writing, you should take a look at what else
is in ``Math``—it might have just what you need. You can read about all the
methods in the `Javadocs
<https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html>`_.

You may be able to guess what ``abs`` and ``pow`` do, if you can decipher the
abbreviations. ``Math.abs`` takes a single argument, either a ``double`` or an
``int`` and returns a value of the same type which is the absolute value of the
argument. So:

.. code-block:: java

   Math.abs(45);    // returns 45
   Math.abs(-45);   // returns 45
   Math.abs(33.3);  // returns 33.3
   Math.abs(-33.3); // returns 33.3

The next method ``Math.pow`` takes two argument, both ``double``\ s and returns
a ``double`` which is the first argument raised to the power of the second
argument.

.. code-block:: java

   Math.pow(2 , 3); // returns 8.0
   Math.pow(10, 6); // returns 1000000.0
   Math.pow(2, -3); // returns 0.125

|Exercise| **Check Your Understanding**

.. mchoice:: bhsawesome-distance-mc
   :multiple_answers:
   :random:

   The distance between two numbers is defined as the absolute value of their
   difference. (There difference is just what you get when you subtract one from
   the other.) Which of the following are a correct expression to compute the
   distance between ``a`` and ``b``.

   - ``Math.abs(a - b)``

     + ✅ ``a - b`` gives us the difference and ``Math.abs`` gives us the
       absolute value of that difference.

   - ``Math.abs(a) - Math.abs(b)``

     - ❌ Consider the distance between -2 and 3. It should be five. What value
       would this expression produce in that case?

   - ``Math.abs(a + b)``

     - ❌ We need to start with the difference between ``a`` and ``b``, not their sum.

.. mchoice:: bhsawesome-hypotenuse-mc
   :multiple_answers:
   :random:

   The Pythagorean theorem tells us that the length of the hypotenuse (the side
   opposite the right angle in a right triangle) is the square root of the sum
   of the squares of the lengths of the other two sides, also called the “legs”
   of the triangle. In other words :math:`c^{2} = \sqrt{a^{2} + b^{2}}` where
   :math:`a` and :math:`b` are the lengths of the legs and :math:`c` is the
   length of the hypotenuse.

   - ``Math.sqrt(a * a + b * b)``

     + ✅ ``a * a`` is a squared, likewise ``b * b``. Adding them with ``+``
       gives us the sum which is then passed to ``Math.sqrt``.

   - ``Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))``

     + ✅ ``Math.pow(a, 2)`` is ``a`` squared, likewise ``Math.pow(b, 2)``.
       Adding them with ``+`` gives us the sum which is then passed to
       ``Math.sqrt``.

   - ``Math.sqrt(a + b)``

     - ❌ Close, but we need to square the lengths of the legs.

   - ``a * a + b * b``

     - ❌ This is the sum of the squares of the lengths of the legs which gives
       us the square of the hypotenuse. We need a ``Math.sqrt`` to get the
       length of the hypotenuse.

Other ``Math`` methods - ``random``
-----------------------------------

The ``Math.random`` method is a bit of an odd duck. It takes no arguments and
each time it is called returns an essentially random ``double`` value that is
greater than or equal to 0 and less than 1. It’s not a method like ``println``
that is called purely for an effect, but it’s also not a method like ``sqrt`` or
``pow`` that returns a value computed purely from its arguments—it doesn’t even
take any arguments! Maybe rather than an odd duck it’s a platypus, a mammal that
lays eggs.

What’s going on is there a hidden value that is used to determine what number is
returned each time ``random`` is called and ``random`` changes that value each
time it is called so the next time it is called it will return a new
unpredictable number.

|Exercise| **Check Your Understanding**

.. shortanswer:: bhsawesome-random-bug-sa

   This is a tricky one. Remember that ``Math.random`` returns a different value
   every time it is called. (Well, technically it *could* return the same value
   twice; some people win the lottery twice too.)

   Usually that’s exactly what we want but the program below has a subtle bug
   caused by the programmer forgetting this fact. Can you see it? If you can,
   how would you fix it?

   .. code-block:: java

      public class GuessingGame
      {
          public static void checkGuess(double guess)
          {
              if (guess == Math.random())
              {
                  System.out.println("Correct!");
              }
              else
              {
                  System.out.println("Wrong. It was " + Math.random());
              }
          }

          public static void main(String[] argv)
          {
              checkGuess(3.2);
              checkGuess(4.6);
          }
      }

   What's wrong with this code and how might you fix it?


Summary
-------------------

- **Abstraction** means hiding details. **Procedural abstraction** means hiding
  the details of how a procedure is performed and so we can focus on what it
  achieves.

- A **method** in Java either computes a value or has some effect, such as
  printing to the screen.

- **Static methods** can be referenced using the name of the class they are
  defined in, a dot, and the name of the method, e.g. ``Math.sqrt`` to reference
  the ``sqrt`` method defined in the class ``Math``.
