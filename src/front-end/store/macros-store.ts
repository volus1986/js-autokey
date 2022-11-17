import {action, autorun, computed, makeObservable, observable} from "mobx";

const testMacros = [`a press`, `b press`, `c press`]

class ObservableMacrosStore {
    macrosList: Array<string> = [...testMacros];

    constructor() {
        makeObservable(this, {
            macrosList: observable,
            // pendingRequests: observable,
            report: computed,
            addMacros: action,
        });

        autorun(() => console.log(this.report));
    }

    addMacros(macros: string) {
        this.macrosList.push(macros)
    }

    get report() {
        return `Macros amount (report): ${this.macrosList.length}`;
    }
}

export const observableMacrosStore = new ObservableMacrosStore();