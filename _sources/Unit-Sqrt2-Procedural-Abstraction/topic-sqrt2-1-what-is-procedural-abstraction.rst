.. qnum::
   :prefix: √2-1-
   :start: 1

.. include:: ../header.rst

|Time45|

What is Procedural Abstraction?
===============================

Computer programs, as you’ll discover, can get rather complex. Once you get past
the details of syntax and the basic mechanics of the language, you’ll find that
your main task as a programmer is managing that complexity.

**Abstraction** is the main tool we have to keep complexity under control.
Abstraction gets a bad rap in our culture, often being considered synonymous
with “hard to understand” as in abstract math or abstract theoretical physics.
But abstraction really just means “hiding details” and we use abtractions all
the time without even realizing it.

Texting, for instance, is an abstraction that hides many details about
interactions that take place between between multiple computers every time your
friend taps out a message on their phone and hits send and, causing it to show
up on your phone milliseconds later. Very few people undertand all the details
that happen because they are abstracted away. Even the people who wrote the text
software on your phone don’t know all the details because the software itself is
built on top of abstractions that hide the details of how the phone communicates
with the nearest radio tower, etc. But the point of this abstraction, like many
others, is that as long as we understand abstractly what happens—the text that
is typed on this phone shows up on that phone after I hit send—we can make use
of the abstraction without knowing exactly how it happens.

Abstraction is a powerful tool that will appear over and over as you learn to
program. In this chapter we are going to talk about **procedural abstraction**
which just means hiding the details of how something gets done so we can focus
instead of what the procedure achieves. A procedure is a method for doing
something and if we abstract a procedure we hide the details of **how** it does
things allowing us to focus on **what** result it achieves.

Procedures go by many names in different programming languages: functions,
subroutines, commands, or even procedures. In Java they are called **methods**,
as in a method of doing something.

In the last chapter we talked about data types and variables. But data is inert;
it just `is`. Any code that `does` anything will live in a method. So far we’ve
only seen one method the ``main`` method that is run when you run a Java class.
In this chapter we’ll see how to write other methods and how to **call** them.

Two Kinds of Methods
--------------------

There are two broad categories of methods: methods that have effects and methods
that compute values. You have seen examples of the former already:
``System.out.println`` is a method that has the effect of causing some text to
appear on the computer screen.

.. code-block:: java

   System.out.println("hello, world");

A simple example of the second kind of method, one that computes a value is the
``sqrt`` method that is part of the ``java.lang.Math`` class. Whereas
``System.out.println`` takes its argument and writes it to the screen,
``Math.sqrt`` takes an ``double`` argument and **returns** a value which is
square root of the argument. A method that returns a value doesn’t have any
observable effect when it is called—nothing shows up on the screen; the computer
doesn’t make any sound—it just produces a new value just like an expression like
``y * 2`` produces a new value that you need to something with like assign it to
another variable. For instance, we might use ``sqrt`` like this:

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

Java only enforces half of the distinction between methods with effects and
methods that compute values. If a method has ``void`` as its return type it
definitely doesn’t return a value. Therefore the only possible thing it *can* do
is have some effect. So when you see a ``void`` method you know you are looking
at a method to be called for effect.

Methods with non-``void`` return types, on the other hand, are less constrained.
They have to return a value but there is nothing stopping them from also having
effects. For instance, you can’t tell from its return type that ``Math.sqrt``
doesn’t also print something to the screen. But as you might imagine, if it did
it would be a lot less useful because usually when you are trying to compute a
square root you don’t also want something printed to the screen.

As you start writing your own methods, it is best to keep the two kinds of
methods distinct. Methods that compute values are a lot easier to understand and
to use if that’s all they do. And since methods with effects can call methods
that compute values, there’s no need to make methods that do both.


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
``doubled``. As with variables the name can be (almost) anything. (One of the
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
refer to the variables defined in the parameter list. However, the code does
have one obligation: it must return a value of the correct type. In this case
that means we need to an ``int``. To return a value we use a return statement
which consists of the word ``return`` followed by an expression that will
produce the value to be returned. As you can see in this method, the code in the
method body can refer to the variables defined in the method’s parameter list.
The expression in the return statement ``n * 2`` means, multiply the value
passed to this method by 2. Since ``n`` was delcared to be an ``int`` and ``2``
is an ``int`` and multiplying two ``ints`` gives us another ``int``, this
clearly satisfies the requirement to return an ``int``. (Phew, that’s a lot of
``int``\ s.)

Calling a Method
----------------

The main thing we can do with a method is **call** it. Calling a method is how
we get the code in the method to run, either to produce an effect or to compute
a value.

A call to a method is made up of the name of the method followed by a pair of
parentheses. In between the parentheses is a comma-separated list of
expressions, one for each parameter defined in the method declaration. In this
case ``doubled`` just takes one argument so we only need one expression.


|Exercise| **Check Your Understanding**

.. mchoice:: correct-calls

   Which of these are syntactically correct method calls of ``double``?

   - ``double(2)``

     + ✅ This is a simple call to double with the value 2.

   - ``double()``

     - ❌ ``double`` takes one argument. This would be a correct call if it took no arguments.

   - ``double(2, 4)``

     - ❌ ``double`` takes one argument. This would be a correct call if it took two arguments.

   - ``double(2 + 3)``

     + ✅ The argument passed to ``double`` is the value of the expression 2 + 3, namely 5.

   - ``double 2``

     - ❌ You must have parentheses around the arguments.

   - ``double(double(2))``

     + ✅ The argument passed to ``double`` is the value of *another* call to
       ``double`` which is perfectly fine.


But what does it mean to call a method? One way to think of a method is as a
little machine that does something. Like many machines, it takes some inputs
which effect what it does. Consider a toaster. You put bread in the toaster and
turn it on and a little while later you get a piece of toast. Toasters don’t
make toast without bread and they can make toast out of any kind of bread that
fits in the toaster.

The ``doubled`` method above is somewhat like a toaster. You put in one ``int``
and you get back a different ``int``. If you put in ``2`` you get ``4`` but if
you put in ``3`` you get ``6``, just like if you put a piece of whole wheat
bread in a toaster you get whole wheat toast and if you put in sourdough you get
sourdough toast.

One important difference, however, is that in the physical world machines can
really only *transform* their inputs—after you make toast you don’t have the
original bread. Methods that compute values typically don’t have any effect on
their inputs: the 2 is not changed into a 4; a new ``int`` with the value 4 is
created when the method is called.

Maybe a better analogy from the physical world would be something like a
photocopier. If you ignore (abstract away!) the fact that photo copier has a
reservoir of paper and toner, you can think of it like a method that takes
something you want to copy as its input and produces a copy as its output. A
method in a computer is kind of like a photocopier in that it has a reservoir of
bits of computer memory that it can draw on to create new values whenever they
are needed.

To actually be able to call a method, we need to put it in a class. Until now
the only method we’ve written is ``main`` which is called for you when you run
your program. To use a method like ``doubled`` we need to put it in a class like
this:

|CodingEx| **Coding Exercise**

.. activecode:: DoubledMethod
   :language: java

   This class has both a ``main`` method and a ``doubled`` method. We’ll talk
   more later about what the ``public`` added before the ``int`` in the
   definiont of ``doubled`` is for but for now most methods you write will be
   ``public``. Run this program and look at the output. Notice how there is no
   sign in the output of the call to ``doubled(4)``. Can you change the program
   to have it print out the result of that call?

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
else where in a program but they do not interfer with the ``n`` in ``doubled``.
Which is good news—if that wasn’t true we’d have to keep track of all the
variable names we had used anywhere in our program which would be a huge pain!

This is the key to using methods as an abstraction. The details that we care
about inside the method—what names the method uses for its parameters and how it
computes its result—are only relevant hidden inside the method. Code that calls
the method such as this line:

.. code-block:: java

   System.out.println("Twice 2 is: " + doubled(2));

isn’t affected at all by those details. We could change the definiton of
``doubled`` to this perfectly good, but different, definition and everything
would still work the same:

.. code-block:: java

   public int doubled(int value)
   {
       return value + value;
   }

Note that both the parameter name has changed, from ``n`` to ``value`` and the
way the result is computed, using addition rather than multiplication. Those are
the details that have been abtracted away by writing the method.

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

.. activecode:: doubled-and-twice
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


Summary
-------------------

- **Abstraction** means hiding details. **Procedural abstraction** means hiding
  the details of how a procedure is performed and so we can focus on what it
  achieves.

- A **method** in Java either computes a value or has some effect, such as printing to the screen.

- Methods belong to **object**. We say we invoke a method `on` and object.
