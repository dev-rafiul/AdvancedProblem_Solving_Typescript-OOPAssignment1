Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

In TypeScript, type safety is the core feature. But any completely breaks it.
When you use any, TypeScript stops checking types:
Issue:

No type checking
You can call anything
Errors appear only at runtime

That’s why any is called a type safety hole.