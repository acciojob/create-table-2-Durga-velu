function createTable() {
    //Write your code here
let rowsCount=prompt("Input number of rows");
	let columnsCount=prompt("Input number of columns")


	if(isNaN(rowsCount) || isNaN(columnsCount) || rowsCount<=0 || columnsCount <=0){
		alert("Please enter the valid positive numbers.")
		return;
	}

rowsCount=parseInt(rowsCount);
	columnsCount=parseInt(columnsCount)
	
let table=document.getElementById("myTable")


	table.innerHTML=""
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
