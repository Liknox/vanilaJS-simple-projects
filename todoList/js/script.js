const addTask = document.getElementById("add-task")
const inputTask = document.getElementById("input-task")
const taskContainer = document.getElementById("task-container")

addTask.addEventListener("click", function () {
	let task = document.createElement("div")
	task.classList.add("task")

	let li = document.createElement("li")
	li.innerText = `${inputTask.value}`
	task.appendChild(li)

	let checkButton = document.createElement("button")
	checkButton.innerHTML = '<i class="fa-solid fa-check"></i>'
	checkButton.classList.add("check-task")
	task.appendChild(checkButton)

	checkButton.addEventListener("click", function (e) {
		this.parentElement.classList.toggle("line-through")
	})

	let deleteButton = document.createElement("button")
	deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
	deleteButton.classList.add("delete-task")
	task.appendChild(deleteButton)

	deleteButton.addEventListener("click", function (e) {
		this.parentElement.remove()
	})

	if (inputTask.value === "") {
		alert("Please Enter The Task!")
	} else {
		taskContainer.appendChild(task)
		inputTask.value = ""
	}
})
