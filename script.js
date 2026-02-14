function calculateLove() {

    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();
    let zodiac1 = document.getElementById("zodiac1").value;
    let zodiac2 = document.getElementById("zodiac2").value;
    let result = document.getElementById("result");

    if (name1 === "" || name2 === "" || zodiac1 === "" || zodiac2 === "") {
        result.innerHTML = "Please fill all fields 💕";
        return;
    }

    // Random base score
    let baseScore = Math.floor(Math.random() * 50) + 50;

    // Zodiac bonus
    let zodiacBonus = getZodiacBonus(zodiac1, zodiac2);

    let finalScore = baseScore + zodiacBonus;

    if (finalScore > 100) {
        finalScore = 100;
    }

    result.innerHTML = `
        ${name1} (${zodiac1}) ❤️ ${name2} (${zodiac2}) <br>
        Compatibility: ${finalScore}% 💘
    `;
}


function getZodiacBonus(z1, z2) {

    let goodPairs = {
        Aries: ["Leo", "Sagittarius"],
        Taurus: ["Virgo", "Capricorn"],
        Gemini: ["Libra", "Aquarius"],
        Cancer: ["Scorpio", "Pisces"],
        Leo: ["Aries", "Sagittarius"],
        Virgo: ["Taurus", "Capricorn"],
        Libra: ["Gemini", "Aquarius"],
        Scorpio: ["Cancer", "Pisces"],
        Sagittarius: ["Aries", "Leo"],
        Capricorn: ["Taurus", "Virgo"],
        Aquarius: ["Gemini", "Libra"],
        Pisces: ["Cancer", "Scorpio"]
    };

    if (goodPairs[z1] && goodPairs[z1].includes(z2)) {
        return 20;
    }

    return 0;
}