import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type todolistsType = {
    id: string,
    title: string,
    filter: FilterValuesType
}
function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });



    function removeTask(ID:string ,id: string) {
        setTasks({...tasks,[ID]:tasks[ID].filter(t => t.id !== id) });
    }

    function addTask(ID:string,title: string) {

        let Newtask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks,[ID]:[Newtask,...tasks[ID]]});
    }

    function changeStatus(ID:string, taskId: string, isDone: boolean) {

        setTasks({...tasks,[ID]:tasks[ID].map(e => e.id === taskId ? {...e,isDone: isDone}:e)});
    }


    function changeFilter(ID:string, value: FilterValuesType)
    {setTodolists(todolists.map(e => e.id===ID ? {...e, filter:value} : e))
     }


    return (
        <div className="App">
            {todolists.map((e:todolistsType)=> {

                let tasksForTodolist = tasks[e.id]
                if (e.filter === "active") {
                    tasksForTodolist = tasks[e.id].filter(t => t.isDone === false);
                }
                if (e.filter === "completed") {
                    tasksForTodolist = tasks[e.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist key ={e.id}
                              title={e.title}
                              tasks={tasksForTodolist}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              changeTaskStatus={changeStatus}
                              filter={e.filter}
                              todoListsID = {e.id}
                    />
                )
            })}
        </div>
    );
}

export default App;
