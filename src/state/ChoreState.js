class ChoreState {
  constructor() {
    // Empty arrays to push functions and chores
    this.listeners = [];
    this.chores = [];
  }

  // Function to just push other functions to the array
  addListener(listenerFn) {
    this.listeners.push(listenerFn);
  }

  // These values get passed in when this method is called
  addChore(child, chore, note) {
    const newChore = {
      id: (Math.random() * 10).toString(),
      child: child,
      chore: chore,
      note: note,
    };

    // Push the newChore into the empty chores array
    this.chores.push(newChore);
    // For Of loop in the listeners array
    for (const listenerFn of this.listeners) {
      // Pass the chores to the listener function use slice to return a copy of it
      listenerFn(this.chores.slice());
    }
  }
}

// Exported global constant to use these methods inside other classes
export const choreState = new ChoreState();
