## Attack of the CEO!

We started the day by reminding ourselves that as engineers, we don't just write code: we build software, for humans, and with humans. It's incumbant upon all engineers to hone their facilitation and communication skills, not just their technical skills.

## Deciding where to start

Pairs then tried to come up with a starting point for building. 

We looked at three techniques for picking a starting point: 
* Feature Map
* Assumptions
* Tech Risk


## First feature 

We looked at our first feature, and briefly learned about Gherkin, and the hidden power behind it: Finite State Machines!

## Architect

Next, pairs architected the software. We learned the definitions of architecture generally, and software architecture specifically: 

* Architecture: decisions that are hard to reverse
* Software Architecture: the high level shape and flow of the code that's dpeendent on the desired user experience but independent of the specific application domain.

The CEO reappeared while pairs were architecting, and some correctly took advantage of the collocation opportunity to get feedback quickly on their ideas before they wasted time building the wrong architecture. This displayed the XP principle of "fast feedback". 

## Middle Out TDD

We then began to TDD our first feature using what is something referred to as the "middle out" TDD approach. We started by TDDing the high level policy, and applied DIP along with several patterns in the process to seperate the high level policy from lower level details: 
 
* Observer Pattern
* Tell, Don't Ask
* Refactoring: Method Object extraction; composed method refactoring

## Ubiquitous language

Before moving to the frontend, groups spent time developing a ubiquitous language; then we mobbed on the code to clean it up and bring it in line with our ubiquitous language. 

## UML

After cleaning up the code, and before moving to the frontend, pairs also spent time UMLing their code. In the process, they learned about "has a" and "is a" relationships, and also how to detect boundaries in the diagram, and why that's important.

We had to make the interfaces (which are implicit in JS) explicit in the model. And we also noticed how we had decoupled our tests from implementation details.   

## Frontend

Next, we moved to the frontend, noting that we would continue to use our component testing strategy (testing each component in isolation of the other components). We had to determine the approporaite test doubles to use for doubling the HLP. 

We also began to use React, and spent time right at the end of the day refactoring our first frontend test for readability. 
