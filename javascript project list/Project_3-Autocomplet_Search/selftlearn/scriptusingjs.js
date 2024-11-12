let indianCities = null;

fetch("data.json")
    .then(response => response.json())
    .then(data => {
        indianCities = data;
    });

const resultbox = document.querySelector(".resultbox");
const inputBox = document.querySelector("#InputBox");

inputBox.addEventListener("input", () => {
    let result = [];
    let input = inputBox.value
    result = indianCities.filter((keyword) => {
        return keyword.toLowerCase().includes(input.toLowerCase())
    });
    // console.log(result)
    display(result)
    if (!result.length) {
        resultbox.innerHTML = '';
    }

    if (input === '') {
        resultbox.innerHTML = '';
    }
})


function display(result) {
    const content = result.map((item) => {
        return `<li onclick='selectInput(this)' >${item}</li>`
    });
    // console.log(content)
    resultbox.innerHTML = `<ul>${content.join("")}</ul>`
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultbox.innerHTML = '';
}

//? using keyup
// inputBox.onkeyup = function() {
//     let result = [];
//     let input = inputBox.value
//     result = indianCities.filter((keyword) => {
//         return keyword.toLowerCase().includes(input.toLowerCase())
//     });
//     display(result)
//     if (!result.length) {
//         resultbox.innerHTML = '';
//     }
// }

/* let nameArr = ["Sohan", "Suman", "Sandhiya", "Sonu", 'Narendra'];
// const indianCities = [
//     "Ahmedabad",
//     "Agra",
//     "Allahabad",
//     "Amritsar",
//     "Aurangabad",
//     "Bangalore",
//     "Bhopal",
//     "Bhubaneswar",
//     "Chandigarh",
//     "Chennai",
//     "Coimbatore",
//     "Cuttack",
//     "Dehradun",
//     "Delhi",
//     "Dhanbad",
//     "Faridabad",
//     "Ghaziabad",
//     "Gurgaon",
//     "Guwahati",
//     "Gwalior",
//     "Hubli-Dharwad",
//     "Hyderabad",
//     "Indore",
//     "Jabalpur",
//     "Jaipur",
//     "Jalandhar",
//     "Jammu",
//     "Jamshedpur",
//     "Kanpur",
//     "Kochi",
//     "Kolkata",
//     "Kota",
//     "Lucknow",
//     "Ludhiana",
//     "Madurai",
//     "Mangalore",
//     "Meerut",
//     "Mumbai",
//     "Mysore",
//     "Nagpur",
//     "Nashik",
//     "Navi Mumbai",
//     "Patna",
//     "Pune",
//     "Raipur",
//     "Rajkot",
//     "Ranchi",
//     "Rourkela",
//     "Surat",
//     "Thiruvananthapuram",
//     "Vadodara",
//     "Varanasi",
//     "Vijayawada",
//     "Visakhapatnam",
]; */