import { pubSub } from "./scripts/PubSub.js";
import "./scripts/render/Render.js"
import "./scripts/ExpenseController.js";

pubSub.emit("init");

