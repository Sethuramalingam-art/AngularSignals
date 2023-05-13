# AngularSignals

# Basic signals at first approach

# react app - npx create-react-app my-app

# angular app - npm install @angula/cli

# ng new appname

# signals -> same as state in react

# for update an signal values we have two methods one is mutate and update

# use the .update() operation to compute a new value from the previous one:

# // Increment the count by 1.

# count.update(value => value + 1);

<!-- When working with signals that contain objects, it's sometimes useful to mutate that object directly. For example, if the object is an array, you may want to push a new value without replacing the array entirely. To make an internal change like this, use the .mutate method: -->

<!-- const todos = signal([{title: 'Learn signals', done: false}]);

todos.mutate(value => {
  // Change the first TODO in the array to 'done: true' without replacing it.
  value[0].done = true;
}); -->

# computed signal it derieves a value from another signal. It will cache the value when signal is changed. We cant set a value to computed signal because it is not writable
