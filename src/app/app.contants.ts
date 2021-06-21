import { Injectable } from '@angular/core';

/**
 * Variable globale pour savoir si la page est en cours de chargement.
 * Utile por le spinner
 *
 * @export
 * @class Globals
 */
@Injectable()
export class Globals {
    // Boolean permet de savoir si la page est en cours de chargement
    loading = false;

    static readonly SEARCH_FORM_STATE_KEY: string = "filtreRecherche";


}