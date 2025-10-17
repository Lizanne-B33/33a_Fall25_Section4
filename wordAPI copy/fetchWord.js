document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelector("#fetch-btn").addEventListener('click', getWord);

    // Function returns a random word from API
    function getWord() {
        let key = APIkey;
        let url = `https://api.wordnik.com/v4/words.json/randomWord?api_key=${key}`;
        
        console.log("1) Beginning the call to the API");
        
        // Returns a Promise which resolves to one of 2 states: fulfilled/rejected
        fetch(url)
   
        // Handle fulfilled promise from the fetch call
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`)
            }

            console.log("2) The response object has been rendered to JSON"); 
            return response.json();  
        })
 
        // Handle fulfilled promise from the response.json() call
        .then(data => {

            console.log(`3) Parsed word is: ${data.word}`);

            // Updating the DOM with the returned word
            document.querySelector("#data-div").textContent = data.word;
        })

        // Handle rejected promise
        .catch(err => console.log(err.message));

        console.log("4) End of the call to the API");

    } // End getWord
    
    
    // async function getWord() {
    //     let key = APIkey;
    //     let url = `https://api.wordnik.com/v4/words.json/randomWord?api_key=${key}`;
        
    //     console.log("Beginning the call to the API");
    
    //     try {
    //         let response = await fetch(url);
    //         if (!response.ok){
    //             throw new Error("Failed to fetch data")
    //         }
    //         console.log("1) Response object returns")
    
    //         let apiWord = await response.json()
    //         console.log("2) JSON data available")

    //         document.querySelector("#data-div").innerHTML = apiWord.word;
    //         console.log("3) Data added to DOM")
            
    //     }   
    //         catch (error) {
    //         console.error("Error fetching data:", error)
    //     }
    //     console.log("4) End of the call to the API");
    // } // End async getWord


}) // End COMContentLoaded
