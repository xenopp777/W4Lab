/*  GroceryList — Starter File
    This application simulates an electronic grocery list. Users can add and delete
    items from the list. The list of items is stored in browser local storage
    so items persist between sessions.

    All classes and initialization code are in this single file.
*/

// Edited by Zoie D 4/23/26

import '../css/styles.css';
import { GroceryModel } from './model.js';
import { GroceryView } from './view.js';
import { GroceryController } from './controller.js';


/* ========== Init ========== */
document.addEventListener('DOMContentLoaded', () => {
  new GroceryController(new GroceryModel(), new GroceryView());
});