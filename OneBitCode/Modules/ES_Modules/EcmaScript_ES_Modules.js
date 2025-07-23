import { isSalame, xplain } from "./Functions.js";
const salame = document.getElementById('salame');
const explanation = document.getElementById('xplain');

salame.addEventListener('click', isSalame)
explanation.addEventListener('click', xplain)