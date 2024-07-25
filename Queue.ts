'use strict';

export default class Queue<E> {
    private readonly data: Array<E> = [];
    private size: number = 0;

    public enqueue(e: E): void {
        this.data[this.size++] = e;
    }

    public dequeue(): E | null {
        let first = !this.isEmpty() ? this.data[0] : null;

        for (let i = 1; i < this.data.length; i++)
            this.data[i - 1] = this.data[i];

        this.size--;

        return first;
    }

    public front(): E | null {
        return !this.isEmpty()
            ? this.data[0]
            : null;
    }

    public back(): E | null {
        return !this.isEmpty()
            ? this.data[this.data.length - 1]
            : null;
    }

    public isEmpty(): boolean {
        return !this.size;
    }

    public clear(): void {
        this.data.length = this.size = 0;
    }

    public toString(): string {
        return this.data.reduce((p, c) => `${p ? p + ' ' + c : c}`, '');
    }
}