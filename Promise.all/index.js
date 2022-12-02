const loadData = async () => {
	try {
		const url1 = "https://jsonplaceholder.typicode.com/todos/1"
		const url2 = "https://jsonplaceholder.typicode.com/todos/2"
		const url3 = "https://jsonplaceholder.typicode.com/todos/3"
		const results = await Promise.all([fetch(url1), fetch(url2), fetch(url3)])
		const dataPromises = results.map(result => result.json())
		const finalData = await Promise.all(dataPromises)
		return finalData
	} catch (err) {
		console.log(err)
	}
}

loadData().then(data => console.log(data))
