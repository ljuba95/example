"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Renderable = /** @class */ (function () {
    function Renderable() {
    }
    return Renderable;
}());
var Task = /** @class */ (function (_super) {
    __extends(Task, _super);
    function Task(_no, _text) {
        var _this = _super.call(this) || this;
        _this._no = _no;
        _this._text = _text;
        return _this;
    }
    Object.defineProperty(Task.prototype, "no", {
        get: function () {
            return this._no;
        },
        set: function (value) {
            this._no = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this._text = value;
        },
        enumerable: true,
        configurable: true
    });
    Task.prototype.render = function () {
        return "<div class='task'><p>" + this._no + ". -> " + this._text + "</p></div>";
    };
    return Task;
}(Renderable));
var TodoList = /** @class */ (function (_super) {
    __extends(TodoList, _super);
    function TodoList() {
        var _this = _super.call(this) || this;
        _this._tasks = [];
        return _this;
    }
    Object.defineProperty(TodoList.prototype, "tasks", {
        get: function () {
            return this._tasks;
        },
        set: function (value) {
            this._tasks = value;
        },
        enumerable: true,
        configurable: true
    });
    TodoList.prototype.addTask = function (task) {
        this._tasks.push(task);
    };
    TodoList.prototype.filterTasks = function (cb) {
        return this._tasks.filter(cb);
    };
    TodoList.prototype.render = function () {
        return "<div class=\'container\'>" +
            "<div class=\'jumbotron\'><h1>Todo List</h1></div>" +
            "<table class=\'table\'><tbody>" +
            this._tasks.map(function (task, index) {
                return '<tr><th scope=\"row\">' + task.no + '</th><td>' + task.text + '</td></tr>';
            }).join('') +
            "</tbody></table>" +
            "</div>";
    };
    return TodoList;
}(Renderable));
var list = new TodoList();
list.addTask(new Task(1, "hello"));
list.addTask(new Task(2, "hwge"));
list.addTask(new Task(3, "heffa"));
list.addTask(new Task(4, "heawefasdg"));
list.addTask(new Task(5, "afa"));
list.addTask(new Task(6, "asf"));
var everyNth = function (a) {
    return function (task, index) {
        return (index + 1) % a === 0;
    };
};
var everyNthLambda = function (a) { return function (task, index) { return (index + 1) % a === 0; }; };
var every2nd = everyNthLambda(2);
list.tasks = list.filterTasks(every2nd);
var main = document.querySelector('.main');
if (main !== null)
    main.innerHTML = list.render();
//# sourceMappingURL=index.js.map