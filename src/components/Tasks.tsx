function Tasks(props: string){
    console.log(props);
    return (
        <div>
            <h1>{props.tasks[0].title}</h1>
        </div>
    )
}

export default Tasks;