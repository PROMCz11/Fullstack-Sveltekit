// const getTasks = () => {
//     fetch("/api/tasks", {
//         method: "GET",
//         headers: {"Content-Type": "application/json"}
//     })
//     .then(res => res.json())
//     .then(json => {
//         $tasks = json.tasks;
//     })
//     .catch(err => console.log(err));
// }

export const load = async ({ fetch }) => {
    const taskRes = await fetch("/api/tasks", {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });
    const tasks = await taskRes.json();
    return {
        tasks   
    }
}