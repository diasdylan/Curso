export const main = document.querySelector("main")
export const root = document.querySelector(":root")
export const input = document.getElementById("input")
export const resultInput = document.getElementById("result")

import { keyPressed, clear } from "./fn1.js"
import { keydown } from "./fn2.js"
import calculate from "./fn2.js"
import { copier} from "./fn3.js"
import ramon from "./fn3.js"

document.querySelectorAll(".charKey").forEach(keyPressed)

document.getElementById("clear").addEventListener("click", clear)

input.addEventListener("keydown", keydown)

document.getElementById("equal").addEventListener("click", calculate)

document.getElementById("copyToClipboard").addEventListener("click", copier)

document.getElementById("themeSwitcher").addEventListener("click", ramon)