/*

    TODO: implement this
*/

export class Controller {
    handleInput(state, key) {
        return {
            ...state,
            title: state.title + 'a',
            history: [...state.history, 1]
        };
    }
}