# Simple Stateless Queue

## The Way it Works

Imagine you are the post master in a post office.  People come by each day to drop off mail.
When a person drops off a piece of mail, they are interested in whether the piece of mail
is recieved by the post office.  They would eventually like to know whether the mail was processed
correctly, but they are not going to stick around to find out (they have more important things to do).

A stateless queue receives packages from a sender, to which they make a response that receipt is complete.
Each queue is associated with a function that processes each item in the queue.  A timer determines how often
an item in the queue is processed.  The function and timer are supplied when the queue is created.

When something is added to the queue, the item is processed in order when the timer triggers.

The function could have the responsibilty of informing the sender that processing is complete and
handling errors if the object wasn't processed correctly.

## Why I Created It

In Express, I needed a way to quickly send a response back to a sender that the request was received.  
This needed to happen fast. The actual processing of the request could be done later and the sender doesn't really care.
The function that processed the request eventually would be responsible for informing the sender that the
processing was complete.  However, this informing wouldn't be done through the initial connection when the
sender actually gave the message.  Instead, it would be through some other means.  In my case, the informing
occured by writing to a database.

## Programming

### How to Create

```javascript
npm install stateless-queue
```

```javascript
const Queue = require('stateless-queue');

//start a queue that processes every 3 seconds
const fn = () => {...}
const delay  = 3000;

const queue = new Queue(timer, fn);
```

### How to Add an Item to the Queue

```javascript
queue.add({x: 3, y: 5});
```
