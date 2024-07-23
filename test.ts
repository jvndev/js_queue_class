'use strict';

import Queue from "./Queue.ts";

const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.toString());

while (queue.length()) {
    console.log(`${queue.front()} ${queue.back()}`);
    console.log(`*${queue.dequeue()}`);
}