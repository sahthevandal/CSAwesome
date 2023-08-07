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

All the methods we’ve talked about so far only take one argument so the argument
lists only contain one expression. In a moment we’ll learn about some methods
that take more than one argument and also that take no arguments.

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
parentheses off a method call that takes no arguments.

.. code-block:: java

   System.out.println(); // ✅ Good - prints a blank line
   System.out.println;   // ❌ No good - will give you a compile error.

Other ``Math`` methods
----------------------

``Math.sqrt`` is just one of many static methods in the ``Math`` class. Several
other ``Math`` methods are part of the AP subset in addition to ``sqrt``:
``abs``, ``pow``, and ``random``. And if you need to do any other at all complex
mathematical computations in a program you are writing, you should take a look
at what else is in ``Math``—it might have just what you need. You can read about
all the methods in the `Javadocs
<https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html>`_ hosted by
Oracle.

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

Coding exercises
----------------

|CodingEx|

.. activecode:: bhsawesome-distance

   The distance between two numbers is defined as the absolute value of their
   difference. (There difference is just what you get when you subtract one from
   the other.) Implement the distance method below.

   ~~~~
   public class DistanceCalculator {

       public double distance(double a, double b)
       {
           // Implement this using Math.abs
       }

       public static void main(String[] argv)
       {
           System.out.println("distance(13.5, 26.2) = " + distance(13.5, 26.2));
           System.out.println("distance(26.2, 13.5) = " + distance(26.2, 13.5));
           System.out.println(distance(13.5, 26.2) == distance(13.5, 26.2));
       }
   }
   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expected = "distance(13.5, 26.2) = 12.7\ndistance(26.2, 13.5) = 12.7\ntrue\n”;
           assertTrue(getResults(expected, output, "Expected output from main"));
       }
   }

|CodingEx|

.. activecode:: bhsawesome-hypotenuse

   The Pythagorean theorem tells us that the length of the hypotenuse (the side
   opposite the right angle in a right triangle) is the square root of the sum
   of the squares of the lengths of the other two sides, also called the “legs”
   of the triangle. In other words :math:`c^{2} = \sqrt{a^{2} + b^{2}}` where
   :math:`a` and :math:`b` are the lengths of the legs and :math:`c` is the
   length of the hypotenuse.

   Using that fact and at least one ``Math`` method, implement the
   ``hypotenuse`` method in this class.

   ~~~~
   public class HypotenuseCalculator {

       public double hypotenuse(double a, double b)
       {
           // Implement this using Math.sqrt
       }

       public static void main(String[] argv)
       {
           System.out.println("hypotenuse(3, 4) = " + hypotenuse(3, 4));
           System.out.println("hypotenuse(5, 12) = " + hypotenuse(5, 12));
       }
   }
   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expected = "hypotenuse(3, 4) = 5\nhypotenuse(5, 12) = 13\n";
           assertTrue(getResults(expected, output, "Expected output from main"));
       }
   }

|CodingEx|

.. activecode:: bhsawesome-random-bug

   This is a tricky one. Remember that ``Math.random`` returns a different value
   every time it is called. (Well, technically it *could* return the same value
   twice; some people win the lottery twice too.) Usually that’s exactly what we
   want. The program below has a subtle bug caused by the programmer forgetting
   this fact. Can you see it? If you can, how would you fix it?

   (By “subtle” we mean that you can't actually tell from the output of the
   program that it is wrong. But the logic is not quite right.)

   ~~~~
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



The Structure of a Method
-------------------------

As you may recall from Unit 1, when we define a variable we need to provide the
type of the variable and give the variable a name. We can also initialize the
variable when we declare it by assigning it a value. To review, here are two
variable declarations. One with and one without an initialization:

.. code-block:: java

   int count = 0;  // Declaring and initializing a variable of type int named count
   String message; // Declaring a variable of type String named message

Defining a method is similar except that we have to both **declare** the method,
specifying its type and name and define it by providing the code that says what
the method does. However the type of a method is more complicated than the type
of a variable, including both the type of value the method returns (or ``void``
if it returns no value) and the types of arguments it takes.

The basic structure of a method definition consists of four main parts: the
return type, the name, the parameter list, and the body of the method. Here's a
simple example:

.. code-block:: java

   int doubled(int n)
   {
       return n * 2;
   }

The first ``int`` is the return type which tells both the compiler and humans
reading this code what kind of value this method produces. Then comes the name
``doubled``. As with variables, the name can be (almost) anything. (One of the
constraints, however, is that the name cannot be a **keyword**. Keywords are a
set of names that have special meaning in Java and thy include the names of the
primitive types. That means we can't call this method ``double`` since that’s
the name of a type.) Following the name is a **parameter list** enclosed in
parentheses (``()``). Each element of this list is a variable declaration, i.e.
a type name and then a name for the parameter. In this method there is only one
parameter, an ``int`` parameter named ``n`` which presumably stands for
“number”.

Finally we get to the **body** of the method, which is always enclosed in a pair
of curly braces (``{}``). In the body we can write whatever code we want and can
refer to the variables defined in the parameter list.

However, the code does have one obligation: it must return a value of the
correct type. In this case that means we need to an ``int``. To return a value
we use a return statement which consists of the word ``return`` followed by an
expression that will produce the value to be returned. As you can see in this
method, the code in the method body can refer to the variables defined in the
method’s parameter list. The expression in the return statement ``n * 2`` means,
multiply the value passed to this method by 2. Since ``n`` was declared to be an
``int`` and ``2`` is an ``int`` and multiplying two ``int``\ s gives us another
``int``, this clearly satisfies the requirement to return an ``int``. (Phew,
that’s a lot of ``int``\ s.)

|CodingEx| **Coding Exercise**

.. activecode:: bhsawesome-doubled
   :language: java

   To actually be able to call a method, we need to put it in a class. Until now
   the only method we’ve written is ``main`` which is called for you when you
   run your program.

   This class has two methods, ``main`` and ``doubled``. We’ll talk more later
   about what the ``public`` added before the ``int`` in the definition of
   ``doubled`` is for but for now just know that most methods you write will be
   ``public``.

   Run this program and look at the output. Notice how there is no sign in the
   output of the call to ``doubled(4)``. Can you change the program to have it
   print out the result of that call?

   ~~~~
   public class Doubler {

      public int doubled(int n)
      {
          return n * 2;
      }

      public static void main(String[] argv)
      {
          System.out.println("Twice 2 is: " + doubled(2));
          doubled(4); // Notice that this has no effect when you run the program.
      }
   }


Inside the Method During the Call
---------------------------------

When we call a method the execution of our program jumps to the body of the
method. Inside the body the parameters, such as ``n`` have been initialized to
the value of the argument passed in the call. So when we call ``double(2 + 3)``,
the expression ``2 + 3`` is evaluated to produce 5 and. Then just before we jump
to the first line of the body of ``double``, ``n`` is initialized to 5. Then the
line executes multiplying 5 times 2, producing 10 which is returned.

The variable ``n`` only exists within the body of the method and it can take on
different values for different calls. There can be other variables named ``n``
else where in a program but they do not interfere with the ``n`` in ``doubled``.
Which is good news—if that wasn’t true we’d have to keep track of all the
variable names we had used anywhere in our program which would be a huge pain!

This is the key to using methods as an abstraction. The details that we care
about inside the method—what names the method uses for its parameters and how it
computes its result—are hidden inside the method. Code that calls the method
such as this line:

.. code-block:: java

   System.out.println("Twice 2 is: " + doubled(2));

isn’t affected at all by those details. We could change the definition of
``doubled`` to this perfectly good, but different, definition and everything
would still work the same:

.. code-block:: java

   public int doubled(int value)
   {
       return value + value;
   }

Note that both the parameter name has changed, from ``n`` to ``value`` and the
way the result is computed, using addition rather than multiplication. Those are
the details that have been abstracted away by writing the method.

The only tricky thing about this is that when you are writing a program and
defining your own methods, sometimes you are creating the abstraction and
sometimes you are using it. When you are writing a method like ``doubled`` you
have to think about the details of how it works. But when you call it you can
forget about those details. By contrast, when we use methods that are provided
to us like ``Math.sqrt`` we only see the outside of the abstraction—we know what
it does and we trust that whoever wrote it got it right. But as you get used to
using methods soon you’ll learn to treat even methods you wrote yourself as
black boxes that you usually don’t need to look inside.


Writing Your Own Methods with Effects
-------------------------------------

You can also write your own methods that have effects rather than computing
values. For instance, if you often wanted to abstract the pattern of printing
out “Twice <something> is: <something>” you could write a method that does that
as shown in this code:

|CodingEx| **Coding Exercise**

.. activecode:: bhsawesome-doubled-and-twice
   :language: java

   This code adds a ``showTwice`` method that uses ``System.out.println`` to
   print to the the screen. Notice that the return type of ``showTwice`` is
   ``void`` meaning it does not return any value.

   After running this code, add two new methods to this class:

   - ``tripled`` that takes an ``int`` and return an ``int`` which is three
     times the argument.

   - ``showThrice`` that takes an ``int`` and will print out a message similar
     to the one in ``showTwice`` except showing what the argument tripled is.

   ~~~~
   public class Doubler {

      public int doubled(int n)
      {
          return n * 2;
      }

      public void showTwice(int n)
      {
          System.out.println("Twice " + n + " is: " + doubled(n) + ".");
      }

      public static void main(String[] argv)
      {
          showTwice(2);
          showTwice(4);
      }
   }

Using Methods in Your Code
--------------------------

This chapter has just covered the mechanics of writing and calling methods.
Actually learning to use methods well is a big part of learning Java so we can't
expect to cover it all here.

However even from these small examples, you can maybe start to get a glimpse of
how we can use methods to break our programs into meaningful chunks. Look at the
``main`` method from the last coding exercise. While some details are abstracted
away in the definition of ``showTwice``, if we at least remember that it prints
something about the value we can see at a glance what ``main`` does: it does
that, once for the value 2 and once for 4.

If we care about the details we can look at the definition of ``showTwice``.
There we can see what it prints though exactly how the doubled value is computed
is abstracted away in the ``doubled`` method.

Obviously this is a tiny program and none of these abstractions is hiding very
much. But consider a million line program, like the ones mentioned at the
beginning of this chapter. Suppose you broke what that program does into ten
main pieces and wrote each piece as a separate method. Each method would still
be 100,000 lines. But at least at the top level you could understand what the
program does in terms of only ten separate parts. And each of those ten methods
could be further broken down into ten smaller pieces, and so on. If you kept
going it would only take six levels until you got to a bunch of 10-line methods.
You'd still have a million lines and you'd have written a lot of methods. But
you could read each method and understand, at a certain level of abstraction,
what it does while only having to think about ten things at a time.

There’s no silver bullet to making a million-line program trivial to understand
but with good abstractions, including well-designed methods, it’s possible.


Summary
-------------------

- **Abstraction** means hiding details. **Procedural abstraction** means hiding
  the details of how a procedure is performed and so we can focus on what it
  achieves.

- A **method** in Java either computes a value or has some effect, such as
  printing to the screen.

- The **type** of a method is determined by its **return type** and the types of
  its **parameters**.

- **Parameters** are variables whose values are the values passed as arguments
  passed when a method is **called**.
