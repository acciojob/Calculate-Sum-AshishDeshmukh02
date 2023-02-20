//your JS code here. If required.
function calculateSum() {
			// Get the input values
			let n1 = parseInt(document.getElementById("n1").value);
			let n2 = parseInt(document.getElementById("n2").value);

			// Calculate the sum
			let sum = n1 + n2;

			// Display the sum
			document.getElementById("Sum").innerHTML =  sum.toString().trim();
		}