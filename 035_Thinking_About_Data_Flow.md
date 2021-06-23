## 035 Thinking About Data Flow

1. ) Did you notice what yi did in the last video? He is doing something that a lot of senior developers do, and that is they think about their data flow. They don't just go ahead and start coding.
>

2. ) If it works the first time that;s great, they are done.
>
3. ) No, in their head or maybe on a piece of paper or in a diagram they're thinking about how data is moving. For example, in our case from our redux store into our components. Yi is deciding how much of that data do I want by using selectors and then deciding where should that data live. Where should I put that data.
>
4. ) No one rule while you want to do is to think about your application and why you think at the moment the client or yourself wants for the project.


5. ) They keep things extensible. But at the same time, they decide what makes sense what components component should be in charge of what should be a connected component to a redux store or should it be a simple presentational component that just renders something simple.
>

6. ) Yi understands every part of his app, every part of the feature that he is working it so that when he notices that something perhaps is inefficient like possibly iterating through a large array he converts it or normalizes the data into an object or what we call a hash table so that it's more efficient. Really understanding your code how the program runs allows you to make these smart decisions.


7. ) Thinking about data flow in your application is going to help us further in the course when we start talking about things like graphQL.
>

8. ) Because at the end of the day what we do as developers is received data and present that data to a user to a customer and we let that customer manipulate that data.
>

9.  ) But we engineer that. How it flows, how it moves, how it changes is our job so next time you're working on a feature or a product or even a component. Start thinking about that data flow. How that component is going to affect that data flow, what's going to need, what it's going to present and what it's going to change that's going to make you a better developer.
