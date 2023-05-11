import data from "../data.json" assert { type: "json"}

const generateValues = (periodName, period) => {
    data.map(section => {
        const title = section.title.toLowerCase().replace(" ", "-");
        document.getElementById(`${title}-period`).textContent = section.timeframes[period].current + "hrs";
        document.getElementById(`last-${title}-period`).textContent = `${periodName} - ${section.timeframes[period].previous}hrs`;
    });
}
window.onload = () => {
    generateValues("Last Week", "weekly");
    document.getElementsByClassName("option-button")[0].addEventListener("click", () => generateValues("Previous Day", "daily"));
    document.getElementsByClassName("option-button")[1].addEventListener("click", () => generateValues("Last Week", "weekly"));
    document.getElementsByClassName("option-button")[2].addEventListener("click", () => generateValues("Last Month", "monthly"));
}
