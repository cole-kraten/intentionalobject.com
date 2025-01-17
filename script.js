const questions = [
    "Is tribalism, or looking out for others like you, innately good, bad, or neutral?",
    "Is valuing moral 'goodness' inherent to humans, even if what constitutes 'good' fluctuates from person to person?",
    "Are there any universal moral commonalities, and if so where do they come from?",
    "Do humans have more moral 'worth' than animals, and if so why?",
    "Do reparations mean less if they are given insincerely, why or why not?",
    "If a person has an accident and is no longer able to contribute to society, has their value as a person decreased, increased, or stayed the same?",
    "Can people change their fundamental character?",
    "If someone’s personality changes, does that mean they have also changed?",
    "What does it mean to truly know another person?",
    "If someone does a kind deed but has a selfish motive, does that impact the goodness of the deed?",
    "When (if ever) is lying morally permissible?",
    "Is non-willing ignorance ever a valid excuse for rudeness?",
    "What level of control do we have over our emotions? In other words, can you exert control (either directly or indirectly) over your emotions, or are you simply afflicted by them?",
    "Does love necessitate action, or can it exist simply as a feeling?",
    "In what ways (if any) are platonic love, romantic love, and sexual desire different from one another?",
    "If you experience romantic love for one person, then find that same attraction for another while still in love with the first, does that diminish the love you have for the first person?",
    "Can love ever be a bad thing?",
    "If your partner grew up in an abusive household, are you more understanding of unhealthy behaviors?",
    "Are humans responsible in any way for caring for wild animals? If yes, why is this burden not shared by other animals",
    "Can inanimate objects be inherently good or bad?",
    "Is morality applicable to the actions of non-human animals? If so, why?",
    "Is war ever necessary or reasonable?",
    "How involved should governments be in caring for the health of their citizens? If they should ensure drinking water is safe, why should they not also prescribe everyone a diet and ban all harmful foods?",
    "Is it morally wrong to abstain from voting?",
    "At what age or period in your life do you start becoming accountable for your actions?",
    "Should those who willingly live an unhealthy lifestyle have decreased access to healthcare options?",
    "To what extent can one culture assess the actions of a different culture using the first culture’s own standards?",
    "If someone has recently relocated to a new country, should there be leniency for breaking minor laws they did not know about, or should they be prosecuted the same as their counterpart raised in that culture?",
    "What, if anything, do the people alive on earth today owe to the people who will inhabit the earth 50 years from now? 100 years? 500 years?",
    "If superheroes were real, would they be more responsible for protecting people than you are or equally accountable?",
    "What, if anything, makes humans different from non-human animals?",
    "Should organ donation be opt in, opt out, mandatory, or banned?",
    "To what extent does your worldview impact the way you make day-to-day decisions?",
    "Is luck a real thing? If so, what does it mean?",
    "Does learning a valuable lesson through suffering make it worth it?",
    "Is it essential to care for yourself, or is it more important to care for others?",
    "Does art need to make a statement or have a deeper meaning?",
    "Are artists morally obligated to give trigger warnings if their art could mentally or physically negatively impact someone?",
    "Should everyone be able to interpret a piece of art as they see it, or is there a 'correct' interpretation of an art piece?",
    "Is it morally acceptable to enjoy art made by someone who did horrible things?",
    "Is art that makes a statement better or more important than art that does not?",
    "If there is a room full of people talking, could that be categorized as music?"
];


function displayRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const questionElement = document.getElementById("question");
    questionElement.innerText = questions[randomIndex];
}

// Display a question when the page loads.
window.onload = displayRandomQuestion;
