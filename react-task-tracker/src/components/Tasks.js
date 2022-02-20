// Example tasks, for testing usage. (This should be part of states)
const tasks = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 4th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
]

// Using map function to list out the details of the list
export const Tasks = () => {

    return (
        <div>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </div>
    )
}

export default Tasks