Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

In TypeScript, type safety is the core feature. But any completely breaks it.
When you use any, TypeScript stops checking types:
Issue:

No type checking
You can call anything
Errors appear only at runtime

That’s why any is called a type safety hole.



Why unknown is safer
unknown also accepts any type — but it does NOT allow unsafe usage.
TypeScript forces you to prove what the value is before using it.


Type Narrowing (core concept)

Type narrowing means:

Reducing a broad type (unknown) into a specific safe type (string, number, etc.) using checks.


How it works
Start with a broad type (unknown)
Check the type using conditions
TypeScript “narrows” it to a specific type inside the block
Now safe methods are allowed

TypeScript ensures each block is safe.

any = “disable TypeScript completely” (dangerous)
unknown = “I don’t know the type yet, but I’ll check it first” (safe)
Type narrowing = the bridge that makes unknown usable safely