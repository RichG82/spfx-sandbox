import { observable, action, computed } from "mobx";
/*
    @observable is a property that is watched by the @observer for any changes when the property changes, it will trigger the render() method on the component
    @action are methods that are also watched for property changes, they can be async/awaited
    @computed are dynamic properties that will update when the properties referenced in it change.
*/

export default class MockStore {
    @observable public results: Array<any> = [];
    @observable public isLoading: boolean;

    @action public async getResults() {
        this.isLoading = true;

        setTimeout(() => {
            // simulate loading time
            let data = [];
            let randomTotal = Math.floor(Math.random() * 50);
            for (let i = 0; i < randomTotal; i++) {
                let rand = Math.floor(Math.random() * 10);
                data.push({
                    title: "Result " + rand,
                    description: "Description " + rand
                });
            }

            this.results = data;
            this.isLoading = false;
            console.log("Done loading...");
        }, 3000);
    }

    @action public clearResults() {
        this.results = [];
    }

    @computed get isTotalResultsEven(): boolean {
        return this.results.length % 2 == 0;
    }

    @computed get evenOddText(): string {
        return this.isTotalResultsEven ? "even" : "odd";
    }
}