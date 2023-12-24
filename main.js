import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/dracula.css';
import 'reveal.js/plugin/highlight/monokai.css';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';

let deck = new Reveal({
    hash: true,
    showSlideNumber: 'all',
    slideNumber: "c/t",
    plugins: [ Markdown, Highlight ]
})
deck.initialize();
