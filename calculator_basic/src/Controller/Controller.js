/*
    TODO: implement this
*/

export class Controller {
    counter = 0

    handleInput(state, key) {
        return {
            title: state.title + 'a',
            history: [...state.history, this.counter++]
        };
    }
}