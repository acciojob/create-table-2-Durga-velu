function createTable() {
    //Write your code here
let rowsCount=prompt("Input number of rows");
	let columnsCount=prompt("Input number of columns")
let table=document.getElementById("myTable")
for(let i=0;i<rowsCount;i++){
let rows=document.createElement("tr")
	for(let j=0;j<columnsCount;j++){
		let columns=document.createElement("td")
		colums.textContent=`Row-${i} Column-${j}`
	rows.appendChild(columns)	
		
	}

	table.appendChild(rows)
}
	
	
	
	
  
}
