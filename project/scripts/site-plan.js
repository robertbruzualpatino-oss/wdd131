let characterState = JSON.parse(localStorage.getItem("playerInventory")) || {
    oxygen: 94,
    plasmaCutter: true,
    datapad: true
};

let activeNodeId = JSON.parse(localStorage.getItem("currentStoryNode")) || 1;

const storyNodes = [
    {
        id: 1,
        text: "SYS//LOG_04.EXE initiated. You awaken in SECTOR 7-G. Alarms sound as emergency seals lock down. The console shows oxygen reserves draining.",
        choices: [
            {
                text: "F1 > OVERRIDE AIRLOCK DOORS",
                requiredState: (state) => state.plasmaCutter,
                nextTextNode: 2
            },
            {
                text: "F2 > VENT RADIANT HEAT",
                nextTextNode: 3
            }
        ]
    },
    {
        id: 2,
        text: "You light up your Plasma Cutter, sparks flying as you cut past the jammed airlock gears. The hatch moves, granting safe entry to the Command Deck.",
        choices: [
            {
                text: "Proceed to Command Interface",
                nextTextNode: 4
            }
        ]
    },
    {
        id: 3,
        text: "SYSTEM ERROR: Venting heat failed. Atmospheric pressure spikes, consuming remaining emergency oxygen reserves. SYSTEM TERMINATED.",
        isTerminalState: true,
        choices: [
            {
                text: "REBOOT SYSTEM (Restart Game)",
                nextTextNode: 1
            }
        ]
    },
    {
        id: 4,
        text: "Welcome to the central Command Interface. Main systems are offline, but you have bypassed the primary security locks. Data logs saved successfully.",
        isTerminalState: true,
        choices: [
            {
                text: "REBOOT SYSTEM (Restart Game)",
                nextTextNode: 1
            }
        ]
    }
];

function saveGameProgress() {
    localStorage.setItem("currentStoryNode", JSON.stringify(activeNodeId));
    localStorage.setItem("playerInventory", JSON.stringify(characterState));
}

function resetGameProgress() {
    characterState = { oxygen: 94, plasmaCutter: true, datapad: true };
}

function showTextNode(textNodeId) {
    const currentNode = storyNodes.find(node => node.id === textNodeId);
    if (!currentNode) return;

    activeNodeId = textNodeId;

    const textDisplays = document.querySelectorAll('.wf-main-desktop, .wf-element-mobile-main');
    textDisplays.forEach(display => {
        if (display) {
            display.innerHTML = `<strong>[Main Section / Text Display Feed]</strong><br><br>${currentNode.text}`;
        }
    });
    
    if (currentNode.isTerminalState) {
        resetGameProgress();
    }

    saveGameProgress();
    renderChoices(currentNode.choices);
}

function renderChoices(choices) {
    const commandGrids = document.querySelectorAll('.wf-choice-mobile, .wf-choice-desktop');

    commandGrids.forEach(commandGrid => {
        if (!commandGrid) return;
    
        

        const isMobile = commandGrid.classList.contains('wf-choice-mobile');

        const headerLabel = isMobile ? 'Bottom Section / Choice Matrix' : 'Bottom Section / Choice Command Grid';

        commandGrid.innerHTML = `<strong>[${headerLabel}]</strong><br><br>`;

        choices.forEach(choice => {
            if (choice.requiredState && !choice.requiredState(characterState)) {
                return;
            }

            const actionBtn = document.createElement('button');
            actionBtn.textContent = choice.text;
            actionBtn.className = 'game-choice-btn';

            actionBtn.addEventListener('click', () => {
                if (choice.nextTextNode === 1) {
                    activeNodeId = 1;
                }
                showTextNode(choice.nextTextNode);
            });

            commandGrid.appendChild(actionBtn);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    showTextNode(activeNodeId);
});