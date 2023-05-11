import data from "../data.json" assert { type: "json"}

const generateValues = (periodName, period) => {
    data.map(section => {
        const title = section.title.toLowerCase().replace(" ", "-");
        let hrs = "hrs";
        const { current, previous } = section.timeframes[period];
        if(current === 1){
            hrs = "hr";
        }
        document.getElementById(`${title}-period`).textContent = `${current}${hrs}`;
        if(previous === 1){
            hrs = "hr";
        }
        else{
            hrs = "hrs";
        }
        document.getElementById(`last-${title}-period`).textContent = `${periodName} - ${previous}${hrs}`;
    });
}
window.onload = () => {
    generateValues("Last Week", "weekly");
    document.getElementsByClassName("option-button")[0].addEventListener("click", (e) => {
        generateValues("Yesterday", "daily");
        removeActive();
        e.target.classList.add("active");
    });
    document.getElementsByClassName("option-button")[1].addEventListener("click", (e) => {
        generateValues("Last Week", "weekly");
        removeActive();
        e.target.classList.add("active");
    });
    document.getElementsByClassName("option-button")[2].addEventListener("click", (e) => {
        generateValues("Last Month", "monthly");
        removeActive();
        e.target.classList.add("active");
    });
}
function removeActive(){
    const buttons = document.getElementsByClassName("option-button");
    buttons[0].classList.remove("active");
    buttons[1].classList.remove("active");
    buttons[2].classList.remove("active");
}
