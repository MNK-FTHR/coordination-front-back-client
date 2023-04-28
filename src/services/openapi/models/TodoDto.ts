/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TodoDto = {
    /**
     * ID Autogénéré
     */
    id: number;
    /**
     * Titre du todo
     */
    title: string;
    /**
     * Description du todo
     */
    text: string;
    /**
     * Etat de complétion du todo
     */
    completed: boolean;
};
