abstract class Renderable {

    abstract render(): string;

}

class Task extends Renderable{

    constructor(private _no: number, private _text: string){
        super();
    }

    public get no(): number {
        return this._no;
    }

    public set no(value: number) {
        this._no = value;
    }

    public get text(): string {
        return this._text;
    }

    public set text(value: string) {
        this._text = value;
    }

    render(): string {
        return `<div class=\'task\'><p>${this._no}. -> ${this._text}</p></div>`;
    }

}

class TodoList extends Renderable{

    private _tasks: Task[];

    constructor() {
        super();
        this._tasks = [];
    }


    public get tasks(): Task[] {
        return this._tasks;
    }

    public set tasks(value: Task[]) {
        this._tasks = value;
    }

    public addTask(task: Task){
        this._tasks.push(task);
    }


    public filterTasks(cb: (task: Task, index: number) => boolean): Task[]{
        return this._tasks.filter(cb);
    }

    render(): string {
        return "<div class=\'container\'>" +
            "<div class=\'jumbotron\'><h1>Todo List</h1></div>" +
            "<table class=\'table\'><tbody>" +
                this._tasks.map((task: Task, index: number) =>
                    '<tr><th scope=\"row\">' + task.no + '</th><td>' + task.text + '</td></tr>').join('') +
            "</tbody></table>" +
            "</div>";
    }

}

let list: TodoList = new TodoList();
list.addTask(new Task(1,"hello"));
list.addTask(new Task(2,"hwge"));
list.addTask(new Task(3,"heffa"));
list.addTask(new Task(4,"heawefasdg"));
list.addTask(new Task(5,"afa"));
list.addTask(new Task(6,"asf"));



let everyNth = function (a: number) {
    return function(task: Task, index: number){
        return (index + 1) % a === 0;
    }
}

let everyNthLambda = (a: number) => (task: Task, index: number) => (index + 1) % a === 0;

let every2nd = everyNthLambda(2);
list.tasks = list.filterTasks(every2nd);

let main = document.querySelector('.main');
if(main !== null) main.innerHTML = list.render();
