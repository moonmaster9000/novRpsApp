Here's a reminder of what we covered today.

"Everyone believes their way is the right way; everyone is wrong." 

## Best Practices v. Patterns 

Best Practice definition: something you should always do regardless of context. "Do this, and your life will be better."

Pattern definition: a practice that has pros and cons, and is appropriate in some situations, and not others. 

Examples of best practices: 
* Syntax highlighting
* Source control

Examples of patterns:
* TDD
* Pair Programming
* Code Review
* Stories
* Estimation


## XP Values

We covered five values: 

* Communication
* Respect
* Courage
* Simplicity
* Feedback


## TDD

We started by concisely describing TDD and Tests.

Next, we did the RPS Kata in Java. Some things we paid special attention to: 
* Calling the shot!
* Watching out for untested logic
* Refactoring

Next, we covered why we do TDD in the first place: 
* GO FAST FOREVER
* CLEAN CODE
* REFACTORING
* CONFIDENCE
* TDD

We talked through the qualities of good test suites:
* FAST
* CLEAN
* CONFIDENCE
* FREEDOM TO REFACTOR

And lastly, we introduced the XP Principle, "Assume Simplicity", and thought about that in the context of the RPS kata. 
  
## DIP

First, we talked about the most ubiquitous pattern in all of software development: the "Ball of Mud" pattern. This is the reason that we study the dependency inversion principle—it's one of several tools we should all have in our toolbox to help us combat the ball of mud. 

We started by looking at the following definitions: 
* source code dependencies oppose the runtime flow of control
* seperation of concerns
* high level policy independent of low level detail
* depend in the direction of stability
* polymorphism  

Next, we talked about the first documented case of DIP in the wild: Teradyne!     

Then, we paper coded the Smart Home challenge, and illustrated the technical definition of DIP (both the violation and solution) via code + UML. 

Next, we refactored the temp regulator algorithm to apply the dependency inversion principle.

And lastly, we paired on the Smart Home TDD Kata, and introduce the five types of test doubles: 
* Dummy
* Stub
* Spy
* Mock
* Fake

And we started to learn the rules of thumb for when to use one double versus another.
   