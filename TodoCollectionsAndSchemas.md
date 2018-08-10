https://guide.meteor.com/collections.html#local-collections

Collections and Schemas
    Server-side collections

        Todos = new Mongo.Collection('todos');

        // This line won't complete until the insert is done
            Todos.insert({_id: 'my-todo'});
        // So this line will return something
            const todo = Todos.findOne({_id: 'my-todo'});
        // Look ma, no callbacks!
            console.log(todo);

    Client-side collections
    
        Todos = new Mongo.Collection('todos');

        // This line is changing an in-memory Minimongo data structure
            Todos.insert({_id: 'my-todo'});
        // And this line is querying it
            const todo = Todos.findOne({_id: 'my-todo'});
        // So this happens right away!
            console.log(todo);
    
    Defining a schema

        Lists.schema = new SimpleSchema({
            name: {type: String},
            incompleteCount: {type: Number, defaultValue: 0},
            userId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true}
            });

    Validating against a schema

        const list = {
            name: 'My list',
            incompleteCount: 3
            };

            Lists.schema.validate(list);

    Designing your data schema

        Lists.schema = new SimpleSchema({
            name: {type: String},
            todos: {type: [Object]}
            });