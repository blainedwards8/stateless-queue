class Queue {
    constructor (delay, f) {
      this.queue = [];
      this.f = f;
      this.delay = delay;
  
      this.start();
    }
  
    add(obj) {
      this.queue.push(obj);
    }
  
    stop () {
      clearInterval(this.timer);
    }

    start () {
      this.timer = setInterval(async () => {
        if(this.queue.length > 0){
          let obj = this.queue.splice(0,1)[0];
          await this.f(obj);
        }
      }, this.delay);
    }

    size () {
      return this.queue.length;
    }
}


module.exports = Queue;