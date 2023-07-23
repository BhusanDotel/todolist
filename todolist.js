        // let todolist=[
        //     {
        //         task:'make dinner',
        //         duedate:'2022-12-22'
        //     }    //input data is saved as object inside array.
        // ];

        let todolist = JSON.parse(localStorage.getItem('todolist')) || [];
        
         function renderTask(){
            let todolistHTML = "";

            todolist.forEach(function(todoObject, index){
                const task = todoObject.task;
                const duedate = todoObject.duedate;
                const html = `
                <div class="task_row">
                    <div class="date_task_div">${task}</div>
                    <div class="date_task_div">${duedate}</div>
                    <button class="delete_btn" >Delete</button>
                </div>
                `;
                todolistHTML = todolistHTML+html; 
            });
            document.querySelector(".js-todo-list").innerHTML=todolistHTML;

            const del_button = document.querySelectorAll(".delete_btn");
            del_button.forEach(function(deletebuttons,index){
                deletebuttons.addEventListener('click',()=>{
                todolist.splice(index,1);
                renderTask();
                });
            });
            
            localStorage.setItem('todolist', JSON.stringify(todolist)); // Save the updated todolist in localStorage

        }

        const add_button = document.querySelector(".add_btn");
        add_button.addEventListener('click',()=>{
            Add();
        })
        
        function Add(){
            const activity_input = document.querySelector(".input_box").value;
            const date_input = document.querySelector(".date_input_box").value;

            if(activity_input==="" || date_input===""){
                alert('Do not leave any field!')
            }else{
                todolist.push({
                    task:activity_input,
                    duedate:date_input
                });

                document.querySelector(".input_box").value="";
                document.querySelector(".date_input_box").value="";

                renderTask();
            }

        }
        //initial rendering of task, to show saved undeleted tasks.
    renderTask();