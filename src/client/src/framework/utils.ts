export const noop = () => {};

/**
 * Gets canvas element from DOM.
 * Throws error in case it cannot be found.
 *
 * @param id id of canvas element
 */
export const getCanvasEl = (id: string) => {
    const canvas = document.getElementById(id) as HTMLCanvasElement | null;
    if (!canvas) {
        throw new Error(`Canvas with specified id ${id} not found.`);
    }
    return canvas;
};