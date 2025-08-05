import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Instructions = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const hasRead = localStorage.getItem("hasReadInstructions");
        if (hasRead) {
            navigate("/detection");
        }
    }, [navigate]);

    const handleStart = () => {
        localStorage.setItem("hasReadInstructions", "true");
        navigate("/detection");
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-6 text-center">📋 How to Use the PulseGuard</h1>

            <ul className="text-lg space-y-4 max-w-md">
                <li>✅ Sit in a well-lit area (natural light is best).</li>
                <li>✅ Keep your face close to the webcam (around 30–50cm).</li>
                <li>✅ Stay still and avoid sudden movements or blinking too much.</li>
                <li>✅ Remove glasses or anything that may cover your face.</li>
                <li>✅ Ensure no other apps are using the webcam.</li>
                <li>✅ Give it a few seconds to calibrate before results appear.</li>
            </ul>

            <button
                onClick={handleStart}
                className="mt-10 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
                🚀 Start Detection
            </button>
        </div>
    );
};

export default Instructions;
