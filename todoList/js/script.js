const addTask = document.querySelector("#add-task")
const inputTask = document.querySelector("#input-task")
const taskContainer = document.querySelector("#task-container")

function creating() {
	let task = document.createElement("div")
	task.classList.add("task")

	let li = document.createElement("span")
	li.innerText = inputTask.value
	task.appendChild(li)

	let checkButton = document.createElement("button")
	checkButton.classList.add("check-task")
	checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`
	task.appendChild(checkButton)

	checkButton.addEventListener("click", function () {
		this.parentElement.classList.toggle("line-through")
	})

	let deleteButton = document.createElement("button")
	deleteButton.classList.add("delete-task")
	deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
	task.appendChild(deleteButton)

	deleteButton.addEventListener("click", function () {
		this.parentElement.remove()
	})

	if (inputTask.value === "") {
		alert("Please Enter The Task!")
	} else {
		taskContainer.appendChild(task)
		inputTask.value = ""
	}
}

addTask.addEventListener("click", creating)

window.addEventListener("keypress", function (e) {
	e.key === "Enter" && inputTask.value !== "" ? creating() : null
})
