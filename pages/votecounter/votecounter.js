let voteState = {
    for: 0,
    against: 0,
    abstain: 0,
    history: []
};

document.addEventListener('DOMContentLoaded', () => {
    const totalInput = document.getElementById('totalDelegates');
    const ruleInputs = document.querySelectorAll('input[name="rule"]');

    // Update display when total or rule changes
    totalInput.addEventListener('input', updateDisplay);
    ruleInputs.forEach(input => input.addEventListener('change', updateDisplay));
    
    updateDisplay();
});

function getThreshold() {
    const n = parseInt(document.getElementById('totalDelegates').value) || 0;
    const rule = document.querySelector('input[name="rule"]:checked').value;
    
    if (n <= 0) return null;
    
    if (rule === "simple") {
        return Math.floor(n / 2) + 1;
    } else {
        return Math.ceil((2 / 3) * n);
    }
}

function castVote(type) {
    const total = parseInt(document.getElementById('totalDelegates').value) || 0;
    const currentTotal = voteState.for + voteState.against + voteState.abstain;

    if (total <= 0) {
        alert("Please enter the total number of delegates first.");
        return;
    }

    if (currentTotal >= total) {
        alert("All delegates have already voted.");
        return;
    }

    voteState[type]++;
    voteState.history.push(type);
    
    updateDisplay();
    checkResult();
}

function undoVote() {
    if (voteState.history.length === 0) return;
    
    const lastType = voteState.history.pop();
    voteState[lastType]--;
    updateDisplay();
}

function resetVoting() {
    if (!confirm("Are you sure you want to reset all votes?")) return;
    
    voteState = { for: 0, against: 0, abstain: 0, history: [] };
    updateDisplay();
}

function updateDisplay() {
    const total = parseInt(document.getElementById('totalDelegates').value) || 0;
    const needed = getThreshold();
    const cast = voteState.for + voteState.against + voteState.abstain;

    document.getElementById('countFor').innerText = voteState.for;
    document.getElementById('countAgainst').innerText = voteState.against;
    document.getElementById('countAbstain').innerText = voteState.abstain;
    document.getElementById('castVotes').innerText = cast;
    document.getElementById('displayTotal').innerText = total;
    document.getElementById('neededVotes').innerText = needed || "-";

    const status = document.getElementById('statusMessage');
    if (total <= 0) {
        status.innerText = "Set total delegates to begin";
    } else if (cast < total) {
        status.innerText = "Voting in progress...";
        status.style.color = "var(--main-blue)";
    } else {
        status.innerText = "Voting complete.";
    }
}

function checkResult() {
    const needed = getThreshold();
    const total = parseInt(document.getElementById('totalDelegates').value) || 0;
    const cast = voteState.for + voteState.against + voteState.abstain;

    if (!needed) return;

    if (voteState.for >= needed) {
        setTimeout(() => alert("MOTION PASSES!"), 100);
    } else if (cast === total) {
        setTimeout(() => alert("MOTION FAILS."), 100);
    }
}