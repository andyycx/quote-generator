quotes = [
    ["The artist's job is not to succumb to despair but to find an antidote for the emptiness of existence.", "Midnight in Paris, Woody Allen"],
    ["When it comes to sex there are certain things that should always be left unknown, and with my luck, they probably will be.", "Everything You Always Wanted to Know About Sex*, Woody Allen"],
    ["To love is to suffer. To avoid suffering, one must not love. But, then one suffers from not loving. Therefore, to love is to suffer, not to love is to suffer, to suffer is to suffer. To be happy is to love, to be happy, then, is to suffer, but suffering makes one unhappy, therefore, to be unhappy one must love, or love to suffer, or suffer from too much happiness.", "Love and Death, Woody Allen"],
    ["Money is better than poverty, if only for financial reasons.","Without Feathers, Woody Allen"],
    ["What if everything is an illusion and nothing exists? In that case, I definitely overpaid for my carpet.","Without Feathers, Woody Allen"],
    ["Interestingly, according to modern astronomers, space is finite. This is a very comforting thought - particularly for people who can never remember where they have left things", "Side Effects, Woody Allen"],
    ["I thought of that old joke: This guy goes to a psychiatrist and says, 'Doc, my brother's crazy, he thinks he's a chicken.' And the doctor says, 'Well why don't you turn him in?' and the guy says, 'I would, but I need the eggs.' Well, I guess that's pretty much now how I feel about relationships. They're totally irrational and crazy and absurd, but I guess we keep going through it because most of us need the eggs.", "Annie Hall, Woody Allen"],
    ["It's just gossip, you know. Gossip is the new pornography.", "Manhattan, Woody Allen"],
    ["Talent is luck. The important thing in life is courage.", "Manhattan, Woody Allen"],
    ["You know a lot of geniuses, y'know. You should meet some stupid people once in a while, y'know, you could learn something.", "Manhattan, Woody Allen"],
    ["If my films make one more person miserable, I'll feel I have done my job.", "Woody Allen"],
    ["Does art imitate life, or does life imitate TV?", "Woody Allen"],
    ["Life is full of misery, loneliness, and suffering - and it's all over much too soon.", "Woody Allen"],
    ["I don't want to achieve immortality through my work. I want to achieve it by not dying.", "Woody Allen"],
    ["The two biggest myths about me are that I`m an intellectual, because I wear these glasses, and that I`m an artist because my films lose money. Those two myths have been prevalent for many years.", "Woody Allen"],
    ["I had a terrible education. I attended a school for emotionally disturbed teachers.", "Woody Allen"],
    ["Eighty percent of success is showing up.", "Woody Allen"],
    ["If you're not failing every now and again, it's a sign you're not doing anything very innovative.", "Woody Allen"],
    ["I believe there is something out there watching us. Unfortunately, it's the government.", "Woody Allen"],
    ["Confidence is what you have before you understand the problem.", "Woody Allen"],
    ["The only thing standing between me and greatness is me.", "Woody Allen"],
    ["You will notice that what we are aiming at when we fall in love is a very strange paradox. The paradox consists of the fact that, when we fall in love, we are seeking to re-find all or some of the people to whom we were attached as children. On the other hand, we ask our beloved to correct all of the wrongs that these early parents or siblings inflicted upon us. So that love contains in it the contradiction: The attempt to return to the past and the attempt to undo the past.", "Woody Allen"],
    ["The heart wants what it wants. There's no logic to these things.", "Woody Allen"],
    ["All people know the same truth. Our lives consist of how we choose to distort it.", "Woody Allen"],
    ["I have no idea what I am doing but incompetence has never prevented me from plunging in with enthusiasm.", "Woody Allen"],
    ["This year I'm a star, but what will I be next year? A black hole?", "Woody Allen"],
    ["It's very hard to keep your spirits up. You've got to keep selling yourself a bill of goods, and some people are better at lying to themselves than others. If you face reality too much, it kills you... you've got to find an answer to the question: Why go on?", "Woody Allen"],
    ["It seemed the world was divided into good and bad people. The good ones slept better... while the bad ones seemed to enjoy the waking hours much more.", "Side Effects, Woody Allen"],
    ["The talent for being happy is appreciating and liking what you have, instead of what you don't have.", "Woody Allen on Woody Allen, Woody Allen"],
    ["I like the rain. It washes memories off the sidewalk of life.", "Manhattan, Woody Allen"],
    ["Yeah, that's what the present is. It's a little unsatisfying because life's a little unsatisfying", "Midnight in Paris, Woody Allen"],
    ["To be loved, certainly, is different from being admired, as one can be admired from afar but to really love someone it is essential to be in the same room with the person, crouching behind the drapes.", "Without Feathers, Woody Allen"],
    ["优秀是一种习惯", "Dying"],
    ["You should be thankful that you’re miserable, because that’s very lucky, to be miserable.", "Annie Hall, Woody Allen"],
    ["You want to do mankind a real service? Tell funnier jokes.", "Stardust Memories, Woody Allen"],
    ["I should stop ruining my life searching for answers I’m never gonna get, and just enjoy it while it lasts.", "Hannah and Her Sisters, Woody Allen"],
    ["What a world. It could be so wonderful if it wasn’t for certain people", "Radio Days, Woody Allen"],
    ["In reality, we rationalize, we deny, or we couldn’t go on living.", "Crimes and Misdemeanors, Woody Allen"],
    ["You can learn to push the guilt under the rug and go on. Otherwise, it overwhelms you", "Match Point, Woody Allen"],
    ["Nostalgia is denial, denial of the painful present … the name for this denial is golden age thinking: the erroneous notion that a different time period is better than the one one’s living in. It’s a flaw in the romantic imagination of those people who find it difficult to cope with the present.", "Midnight in Paris, Woody Allen"]
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    var quote = randomNumber;
    document.getElementById('displayQuote').innerHTML = quotes[quote][0];
    document.getElementById('displayQuoteOrigin').innerHTML = "— " + quotes[quote][1];
}