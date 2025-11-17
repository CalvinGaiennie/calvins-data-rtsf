import { useState } from "react";
type tabType = "people" | "ideas" | "quotes";
function VaultPage() {
    const [activeTab, setActiveTab] = useState<tabType>("people")

    return (
        <div>Value
            {activeTab === "people" ? (
                <div>people</div>
            ) : (
                <div>not people
                    <button onClick={() => setActiveTab("ideas")}>Change</button>
                </div>
            )}
        </div>
    )
}
export default VaultPage
