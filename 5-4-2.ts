class BatchProcessor {
  constructor(private processor: ElementProcessor) {}
  process(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      this.processor.processElement(arr[i]);
    }
    return this.processor.getAccmulator();
  }
}

interface ElementProcessor {
  processElement(e: number): void;
  getAccmulator(): number;
}

class MinimumProcessor implements ElementProcessor {
  constructor(private accumulator: number) {}
  getAccmulator() {
    return this.accumulator;
  }
  processElement(e: number) {
    if (this.accumulator > e) {
      this.accumulator = e;
    }
  }
}

class SumProcessor implements ElementProcessor {
  constructor(private accmulator: number) {}
  getAccmulator() {
    return this.accmulator;
  }
  processElement(e: number) {
    this.accmulator += e;
  }
}
