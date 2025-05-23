const events = {};
let logActivity = true;

function on(eventName, fn) {
  events[eventName] = events[eventName] ? events[eventName] : [];
  events[eventName].push(fn);

  if (logActivity) {
    console.log(`${fn.name} added to ${eventName}`);
  }
}

function off(eventName, fn) {
  if (events[eventName]) {
    let i = 0;
    for (func of events[eventName]) {
      if (func == fn) {
        events[eventName].splice(i, 1);
        if (logActivity) {
          console.log(`${fn.name} added to ${eventName}`);
        }
        return;
      }
      i += 1;
    }
  }
}

function emit(eventName, ...data) {
  if (!events[eventName]) {
    if (logActivity) {
      console.log(`Cannot emit ${eventName}. Event has no listeners.`);
    }
    return;
  }

  for (const fn of events[eventName]) {
    if (logActivity) {
      console.log(`${eventName} triggered ${fn.name}`);
    }
    fn(...data);
  }
}

const pubSub = { on, off, emit };

export { pubSub };
