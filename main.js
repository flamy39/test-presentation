import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/dracula.css';
import 'reveal.js/plugin/highlight/zenburn.css';

import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Notes from "reveal.js/plugin/notes/notes.esm.js";
import Zoom from "reveal.js/plugin/zoom/zoom.esm.js";

let deck = new Reveal({
    hash: true,
    controlsTutorial: false,
    progress: true,
    center: true,
    showSlideNumber: 'all',
    slideNumber: "c/t",
    plugins: [ Markdown, Highlight, Notes,Zoom]
})
deck.initialize();
