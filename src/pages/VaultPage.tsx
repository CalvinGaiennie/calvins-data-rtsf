import { useState } from "react";
type tabType = "people" | "ideas" | "quotes";
function VaultPage() {
    const [activeTab, setActiveTab] = useState<tabType>("people")

    return (
        <div>Value
            {activeTab == "people" }
        </div>
    )
}
export default VaultPage
