class Queue {
    constructor (delay, f) {
      this.queue = [];
      this.f = f;
      this.delay = delay;
  
      this.timer = setInterval(async () => {
        if(this.queue.length > 0){
          let obj = this.queue.splice(0,1)[0];
          await this.f(obj);
        }
      }, this.delay);
    }
  
    add(obj) {
      this.queue.push(obj);
    }
  
    stop () {
      clearInterval(this.timer);
    }
}


module.exports = Queue;