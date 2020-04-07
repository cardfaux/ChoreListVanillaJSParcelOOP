class ChoreState {
  constructor() {
    this.listeners = [];
    this.chores = [];
  }

  addListener(listenerFn) {
    this.listeners.push(listenerFn);
  }

  addChore(child, chore, note) {
    const newChore = {
      id: Math.random().toString(),
      child: child,
      chore: chore,
      note: note,
    };

    this.chores.push(newChore);
    for (const listenerFn of this.listeners) {
      listenerFn(this.chores.slice());
    }
  }
}

export const choreState = new ChoreState();
