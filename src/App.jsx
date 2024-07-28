import "./App.css";
import Stepper from "./components/Stepper";

function App() {
    const steps = [
        {
            label: "Steps 1",
            content: "This is the content for step 1.",
        },
        {
            label: "Steps 2",
            content: "This is the content for step 2.",
        },
        {
            label: "Steps 3",
            content: "This is the content for step 3.",
        },
        {
            label: "Steps 4",
            content: "This is the content for step 4.",
        },
        {
            label: " Steps 5",
            content: "This is the content for step 5.",
        },
        {
            label: " Steps 6",
            content: "This is the content for step 6.",
        },
        {
            label: " Steps 7",
            content: "This is the content for step 7.",
        },
        // Add more steps as needed
    ];

    return (
        <>
            <Stepper steps={steps} />
        </>
    );
}

export default App;
