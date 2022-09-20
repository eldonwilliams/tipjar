import { Application, } from "express";

/**
 * The BackendState represents all the essential parts of the backend.
 * This is given to the Handler functions for initialization.
 */
interface BackendState {
    application: Application,
}

/**
 * A Handler is a function that takes in the BackendState and subscribes events onto it.
 */
type Handler = (state: BackendState) => void;