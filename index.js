class Queue {
    constructor (f , delay) {
      this.queue = [];
      this.f = f;
      this.delay = delay;
  
      this.timer = setInterval(async () => {
        if(this.queue.length > 0){
          console.log("Queue Size: ", this.queue.length);
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