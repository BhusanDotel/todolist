        // const todolist = [
        //     {
        //         task:"Dancing",
        //         date:"sunday",
        //         time:"12/23"
        //     }
        // ];

        let todolist_jason = localStorage.getItem('todolist');
        let todolist = (JSON.parse(todolist_jason) || []);
        rednderTask();

        const addBtn = document.querySelector(".add-btn");
        addBtn.addEventListener('click',()=>{

            let activityField = document.querySelector(".activity");
            let duedateField = document.querySelector(".date");
            let duetimeField = document.querySelector(".time");

            let activity_in = activityField.value;
            let duedate_in = duedateField.value;
            let duetime_in = duetimeField.value;

            if(activity_in!="" && duedate_in!="" && duetime_in!=""){
                activityField.value="";
                duedateField.value="";
                duetimeField.value="";

                todolist.push({
                    task:activity_in,
                    date:duedate_in,
                    time:duetime_in
                });

                rednderTask();
            }else{
                alert("Do not leave fields Empty");
            }

        });

        function rednderTask(){

            let JSON_todolist = JSON.stringify(todolist);
            localStorage.setItem('todolist',JSON_todolist);

            let HTML="";
            todolist.forEach((ArrayItem,ArrayIndex)=>{
                const activity = ArrayItem.task;
                const date = ArrayItem.date;
                const time = ArrayItem.time;

                const html=`
                    <div class="task-row">
                    <p class="show_activity">${activity}</p>
                    <p class="show-date">${date}</p>
                    <p class="show-time">${time}</p>
                    <button data-activity-id="${ArrayIndex}" class="Delete">Delete</button>
                    </div>
                `;
                HTML= HTML+html;
            });

            const renderdiv = document.querySelector(".show-task");
            renderdiv.innerHTML=HTML;

            let delBtn = document.querySelectorAll(".Delete");
            delBtn.forEach((button) =>{
                button.addEventListener('click',() =>{
                 const activityId=button.dataset.activityId;
                 const index = parseInt(activityId);
                todolist.splice(index,1);
                rednderTask();
                });
            });
        }
