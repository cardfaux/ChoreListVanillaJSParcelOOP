class ChoreState {
  constructor() {
    // Empty arrays to push functions and chores
    this.functions = [];

    this.chores = [];
  }

  // Function to just push other functions to the array
  addFunction(listener) {
    this.functions.push(listener);
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

    // For Of loop in the functions array
    for (const listener of this.functions) {
      // Pass the chores to the listener function
      listener(this.chores);
    }
  }
}

// Exported global constant to use these methods inside other classes
export const instanceOfChoreState = new ChoreState();
