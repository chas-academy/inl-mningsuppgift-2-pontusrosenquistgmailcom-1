// Definera array av namn
let people = ["Viktor", "Helena", "Jordan", "Teresa", 
  "Jane", "Steven", "Råland","Helge", 
  "Rutger", "Melita",];


export function initSearch(people) { // rör ej denna rad

  // Hämta HTML-element
  const htmlSearchInput = document.getElementById("searchInput")
  const htmlButton = document.getElementById("searchBtn")
  let htmlDisplayResult = document.getElementById("resultDisplay")

  // Lägg till en klickhändelse på "Sök"-knappen
  searchBtn.addEventListener("click",() => {
  
    // 1. Hämta texten i searchInput.value
    const searchName = htmlSearchInput.value
    console.log(searchName)

    // 2. Skapa en boolean för found
    let boolFound = false
    // 3. Loopa igenom people-arrayen
    for(let person of people){
    // 4. Jämför texten med varje namn i arrayen
      if(person === searchName){
        // 5. Om du hittar en match, skriv ut "Namn hittades!" i resultDisplay, ändra found till true
        htmlDisplayResult.innerHTML = "Namn hittades: " + searchName
        htmlDisplayResult.style.color = "blue"
        boolFound = true
      }

    }
    if(!boolFound){
      htmlDisplayResult.innerHTML = "Namn hittades inte."
      htmlDisplayResult.style.color = "red"
    }
    

    
    // 6. Om du efter loopen inte hittat något, skriv ut "Namn hittades inte." och gör found till false igen.
    
    });
}



// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});