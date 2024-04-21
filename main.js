import { termekLISTA } from "./adat.js";
import { htmlCardOsszeallit, megjelenit } from "./htmlOsszeallit.js";
const kartyaELEM = $(".kartyak")
    megjelenit(htmlCardOsszeallit(termekLISTA), kartyaELEM)

