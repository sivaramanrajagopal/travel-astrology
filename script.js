// script.js

// Tab functionality
function showTab(tabName, button) {
    // Hide all tab contents
    const contents = document.querySelectorAll(".tab-content");
    contents.forEach((content) => content.classList.remove("active"));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll(".tab-button");
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Show selected tab and mark button as active
    document.getElementById(tabName).classList.add("active");
    button.classList.add("active");
}

// Basic Analysis Form Handler
document.getElementById("basicForm").addEventListener("submit", function (e) {
    e.preventDefault();
    analyzeBasicTravel();
});

// Advanced Analysis Form Handler
document
    .getElementById("advancedForm")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        analyzeAdvancedTravel();
    });

// Timing Analysis Form Handler
document.getElementById("timingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    analyzeTimingTravel();
});

function analyzeBasicTravel() {
    const formData = new FormData(document.getElementById("basicForm"));

    let score = 0;
    let factors = [];

    // lagna analysis
    const lagna = formData.get("lagna");
    if (lagna) {
        const charalagnas = ["mesha", "kataka", "tula", "makara"];
        const ubhayalagnas = ["mithuna", "kanya", "dhanus", "meena"];

        if (charalagnas.includes(lagna)) {
            score += 20;
            factors.push({
                text: "Lagna in Chara (Movable) lagna - excellent for travel",
                positive: true,
            });
        } else if (ubhayalagnas.includes(lagna)) {
            score += 15;
            factors.push({
                text: "Lagna in Ubhaya (Dual) lagna - good for travel",
                positive: true,
            });
        } else {
            score += 5;
            factors.push({
                text: "Lagna in Sthira (Fixed) lagna - less travel tendency",
                positive: false,
            });
        }
    }

    // Planet-House combinations
    const planetHouses = formData.getAll("planetHouse");
    planetHouses.forEach((combination) => {
        switch (combination) {
            case "surya_9th":
                score += 12;
                factors.push({
                    text: "Sun in 9th house - great time spent abroad",
                    positive: true,
                });
                break;
            case "chandra_9th":
                score += 15;
                factors.push({
                    text: "Moon in 9th house - fond of travel & emigration",
                    positive: true,
                });
                break;
            case "kuja_9th":
                score += 10;
                factors.push({
                    text: "Mars in 9th house - adventure travel",
                    positive: true,
                });
                break;
            case "budha_9th":
                score += 10;
                factors.push({
                    text: "Mercury in 9th house - education abroad",
                    positive: true,
                });
                break;
            case "guru_9th":
                score += 12;
                factors.push({
                    text: "Jupiter in 9th house - study abroad & culture",
                    positive: true,
                });
                break;
            case "sukra_9th":
                score += 10;
                factors.push({
                    text: "Venus in 9th house - pleasure journeys",
                    positive: true,
                });
                break;
            case "sani_9th":
                score += 8;
                factors.push({
                    text: "Saturn in 9th house - business travel",
                    positive: true,
                });
                break;
            case "rahu_12th":
                score += 18;
                factors.push({
                    text: "Rahu in 12th house - strong foreign connection",
                    positive: true,
                });
                break;
            case "kethu_12th":
                score += 12;
                factors.push({
                    text: "Ketu in 12th house - spiritual journeys",
                    positive: true,
                });
                break;
            case "lagna_lord_7th":
                score += 18;
                factors.push({
                    text: "Lagna Lord in 7th house - partnership in foreign lands",
                    positive: true,
                });
                break;
            case "7th_lord_lagna":
                score += 16;
                factors.push({
                    text: "7th Lord in Lagna - foreign connections prominent",
                    positive: true,
                });
                break;
            case "lagna_lord_12th":
                score += 20;
                factors.push({
                    text: "Lagna Lord in 12th house - residence abroad",
                    positive: true,
                });
                break;
            case "9th_lord_12th":
                score += 15;
                factors.push({
                    text: "9th Lord in 12th house - higher education abroad",
                    positive: true,
                });
                break;
            case "12th_lord_9th":
                score += 18;
                factors.push({
                    text: "12th Lord in 9th house - residence & prosperity abroad",
                    positive: true,
                });
                break;
            case "12th_lord_lagna":
                score += 16;
                factors.push({
                    text: "12th Lord in Lagna - person lives abroad",
                    positive: true,
                });
                break;
        }
    });

    // New Lord Combinations from the book
    const lordCombinations = formData.getAll("lordCombination");

    lordCombinations.forEach((combination) => {
        switch (combination) {
            case "7th_lord_10th":
                score += 16;
                factors.push({
                    text: "7th Lord in 10th house - fame & reputation abroad",
                    positive: true,
                });
                break;
            case "10th_lord_7th":
                score += 16;
                factors.push({
                    text: "10th Lord in 7th house - career partnerships abroad",
                    positive: true,
                });
                break;
            case "11th_lord_7th":
                score += 14;
                factors.push({
                    text: "11th Lord in 7th house - prosperity abroad",
                    positive: true,
                });
                break;
            case "7th_lord_8th":
                score += 12;
                factors.push({
                    text: "7th Lord in 8th house - person goes abroad",
                    positive: true,
                });
                break;
            case "9th_lord_11th":
                score += 15;
                factors.push({
                    text: "9th Lord in 11th house - complete success in foreign travels",
                    positive: true,
                });
                break;
            case "12th_house_afflicted":
                score += 10;
                factors.push({
                    text: "12th house afflicted - will go to foreign countries",
                    positive: true,
                });
                break;
        }
    });

    displayBasicResults(score, factors);
}

function analyzeAdvancedTravel() {
    const formData = new FormData(document.getElementById("advancedForm"));

    let score = 0;
    let factors = [];

    // Lord combinations
    const lordCombination = formData.getAll("lordCombination");
    lordCombination.forEach((combo) => {
        switch (combo) {
            case "9th_12th_exchange":
                score += 25;
                factors.push({
                    text: "9th & 12th Lord exchange - excellent travel yoga",
                    positive: true,
                });
                break;
            case "1st_7th_exchange":
                score += 22;
                factors.push({
                    text: "1st & 7th Lord exchange - Gandhi's combination for foreign success",
                    positive: true,
                });
                break;
            case "lagna_9th_exchange":
                score += 20;
                factors.push({
                    text: "Lagna & 9th Lord exchange - foreign connections",
                    positive: true,
                });
                break;
            case "7th_lord_foreign_star":
                score += 15;
                factors.push({
                    text: "7th Lord in friend's star - foreign land indication",
                    positive: true,
                });
                break;
            case "4th_lord_chara_lagna":
                score += 12;
                factors.push({
                    text: "4th Lord in Chara lagna - home/residence change",
                    positive: true,
                });
                break;
            case "most_planets_chara":
                score += 18;
                factors.push({
                    text: "Most planets in Chara & Ubhaya lagnas - strong travel destiny",
                    positive: true,
                });
                break;
            case "8th_lord_12th":
                score += 12;
                factors.push({
                    text: "8th Lord aspecting 12th - transformation abroad",
                    positive: true,
                });
                break;
            case "guru_aspecting_12th":
                score += 15;
                factors.push({
                    text: "Jupiter aspecting 12th - blessed travel",
                    positive: true,
                });
                break;
        }
    });

    // Special yogas
    const specialYogas = formData.getAll("specialYoga");
    specialYogas.forEach((yoga) => {
        switch (yoga) {
            case "kalasarpa_yoga":
                score += 15;
                factors.push({
                    text: "Kala Sarpa Yoga - intense travel experiences",
                    positive: true,
                });
                break;
            case "saraswati_yoga":
                score += 20;
                factors.push({
                    text: "Saraswati Yoga - education & learning abroad",
                    positive: true,
                });
                break;
            case "budha_aditya_yoga":
                score += 18;
                factors.push({
                    text: "Budha-Aditya Yoga in travel houses - intellectual journeys",
                    positive: true,
                });
                break;
            case "gaja_kesari_yoga":
                score += 22;
                factors.push({
                    text: "Gaja Kesari Yoga in travel houses - royal treatment abroad",
                    positive: true,
                });
                break;
            case "pravasa_yoga":
                score += 25;
                factors.push({
                    text: "Pravasa Yoga - classical foreign travel combination",
                    positive: true,
                });
                break;
        }
    });

    displayAdvancedResults(score, factors);
}

function analyzeTimingTravel() {
    const formData = new FormData(document.getElementById("timingForm"));

    const mahaDasa = formData.get("mahaDasa");
    const antarDasa = formData.get("antarDasa");
    const beneficPeriods = formData.getAll("beneficPeriod");

    let timingScore = 0;
    let recommendations = [];

    // Maha Dasa analysis
    const favorableDasas = ["rahu", "guru", "sukra", "chandra"];
    if (favorableDasas.includes(mahaDasa)) {
        timingScore += 30;
        recommendations.push(
            `Current ${getDasaName(mahaDasa)} Maha Dasa is highly favorable for foreign travel`,
        );
    }

    // Antar Dasa analysis
    if (favorableDasas.includes(antarDasa)) {
        timingScore += 20;
        recommendations.push(
            `Current ${getDasaName(antarDasa)} Antar Dasa supports travel plans`,
        );
    }

    // Benefic periods
    beneficPeriods.forEach((period) => {
        switch (period) {
            case "rahu_dasa":
                timingScore += 25;
                recommendations.push(
                    "Rahu Dasa is the most powerful period for foreign connections",
                );
                break;
            case "jupiter_favorable":
                timingScore += 20;
                recommendations.push(
                    "Jupiter's favorable transit brings blessed journeys",
                );
                break;
            case "saturn_favorable":
                timingScore += 15;
                recommendations.push(
                    "Saturn's positive influence ensures long-term foreign success",
                );
                break;
            case "dasa_lord_travel_house":
                timingScore += 25;
                recommendations.push(
                    "Dasa lord in travel house - perfect timing for foreign ventures",
                );
                break;
        }
    });

    displayTimingResults(timingScore, recommendations, mahaDasa, antarDasa);
}

function getDasaName(dasa) {
    const dasaNames = {
        surya: "Sun",
        chandra: "Moon",
        kuja: "Mars",
        rahu: "Rahu",
        guru: "Jupiter",
        sani: "Saturn",
        budha: "Mercury",
        kethu: "Ketu",
        sukra: "Venus",
    };
    return dasaNames[dasa] || dasa;
}

function displayBasicResults(score, factors) {
    const resultsDiv = document.getElementById("basicResults");
    const placeholderDiv = document.getElementById("basicPlaceholder");
    const scoreDiv = document.getElementById("basicScore");
    const factorList = document.getElementById("basicFactorList");

    // Hide placeholder and show results
    placeholderDiv.style.display = "none";
    resultsDiv.style.display = "block";

    // Calculate percentage and determine level
    const percentage = Math.min(100, Math.round((score / 100) * 100));
    const level = getScoreLevel(percentage);

    scoreDiv.innerHTML = `
        <div class="score-${level.class}">
            ${percentage}%
            <div style="font-size: 1.2rem; margin-top: 10px;">${level.text}</div>
        </div>
    `;

    // Display factors
    factorList.innerHTML = "";
    factors.forEach((factor) => {
        const li = document.createElement("li");
        li.className = factor.positive ? "factor-positive" : "factor-negative";
        li.textContent = factor.text;
        factorList.appendChild(li);
    });

    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: "smooth" });
}

function displayAdvancedResults(score, factors) {
    const resultsDiv = document.getElementById("advancedResults");
    const placeholderDiv = document.getElementById("advancedPlaceholder");
    const scoreDiv = document.getElementById("advancedScore");
    const factorList = document.getElementById("advancedFactorList");

    placeholderDiv.style.display = "none";
    resultsDiv.style.display = "block";

    const percentage = Math.min(100, Math.round((score / 120) * 100));
    const level = getScoreLevel(percentage);

    scoreDiv.innerHTML = `
        <div class="score-${level.class}">
            ${percentage}%
            <div style="font-size: 1.2rem; margin-top: 10px;">${level.text}</div>
        </div>
    `;

    factorList.innerHTML = "";
    factors.forEach((factor) => {
        const li = document.createElement("li");
        li.className = factor.positive ? "factor-positive" : "factor-negative";
        li.textContent = factor.text;
        factorList.appendChild(li);
    });

    resultsDiv.scrollIntoView({ behavior: "smooth" });
}

function displayTimingResults(score, recommendations, mahaDasa, antarDasa) {
    const resultsDiv = document.getElementById("timingResults");
    const placeholderDiv = document.getElementById("timingPlaceholder");
    const timingDisplay = document.getElementById("timingDisplay");
    const factorList = document.getElementById("timingFactorList");

    placeholderDiv.style.display = "none";
    resultsDiv.style.display = "block";

    const percentage = Math.min(100, Math.round((score / 100) * 100));
    const level = getTimingLevel(percentage);

    timingDisplay.innerHTML = `
        <h4>Current Period Analysis</h4>
        <div style="font-size: 2rem; margin: 15px 0;">${percentage}% Favorable</div>
        <div style="font-size: 1.1rem;">${level}</div>
        <div style="margin-top: 15px; font-size: 0.9rem;">
            Maha Dasa: ${getDasaName(mahaDasa)} | Antar Dasa: ${getDasaName(antarDasa)}
        </div>
    `;

    factorList.innerHTML = "";
    recommendations.forEach((recommendation) => {
        const li = document.createElement("li");
        li.className = "factor-positive";
        li.textContent = recommendation;
        factorList.appendChild(li);
    });

    resultsDiv.scrollIntoView({ behavior: "smooth" });
}

function getScoreLevel(percentage) {
    if (percentage >= 80)
        return {
            class: "excellent",
            text: "Excellent Foreign Travel Potential",
        };
    if (percentage >= 60)
        return { class: "very-good", text: "Very Good Travel Prospects" };
    if (percentage >= 40)
        return { class: "good", text: "Good Travel Possibilities" };
    if (percentage >= 20)
        return { class: "moderate", text: "Moderate Travel Indications" };
    return { class: "low", text: "Limited Travel Indications" };
}

function getTimingLevel(percentage) {
    if (percentage >= 80) return "Extremely Auspicious Time for Foreign Travel";
    if (percentage >= 60)
        return "Very Favorable Period for International Ventures";
    if (percentage >= 40) return "Good Time for Travel Planning";
    if (percentage >= 20) return "Moderate Support for Foreign Activities";
    return "Wait for More Favorable Planetary Periods";
}

// Initialize app
document.addEventListener("DOMContentLoaded", function () {
    console.log("Foreign Travel Astrology App Loaded");
});
// Updated Tue Jun 17 09:48:54 AM UTC 2025
