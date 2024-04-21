import { getParameters } from "./wheatherAPIdata.js";

async function skyConditionShow() {
    try {
        const currentData = await getParameters();
        const skyOutput = document.querySelector("#skyOutput img");
        skyOutput.src = currentData.current.condition.icon;
    } catch (error) {
        console.log(error);
    }
}

export {skyConditionShow}